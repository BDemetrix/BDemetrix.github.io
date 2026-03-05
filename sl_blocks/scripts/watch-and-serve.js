import chokidar from 'chokidar';
import { exec } from 'child_process';
import { promisify } from 'util';
import browserSync from 'browser-sync';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

const bs = browserSync.create();
let isBuilding = false;
let buildQueue = false;
let debounceTimer = null;
let shouldReload = false;

// Функция сборки проекта с debounce
async function buildProject(triggerReload = false) {
  if (isBuilding) {
    buildQueue = true;
    if (triggerReload) shouldReload = true;
    return;
  }

  isBuilding = true;
  console.log('\n🔨 Building project...');

  try {
    await execAsync('npm run build', { cwd: path.resolve(__dirname, '..') });
    console.log('✅ Build completed successfully');

    // Перезагрузка только если это было вызвано изменением файла
    if (triggerReload || shouldReload) {
      setTimeout(() => {
        console.log('🔄 Reloading browser...');
        bs.reload();
        shouldReload = false;
      }, 200);
    }
  } catch (error) {
    console.error('❌ Build failed:', error.message);
  } finally {
    isBuilding = false;

    // Если были изменения во время сборки, запускаем ещё раз
    if (buildQueue) {
      buildQueue = false;
      setTimeout(() => buildProject(shouldReload), 500);
    }
  }
}

// Debounced сборка
function debouncedBuild(filePath) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    buildProject(true);  // true = перезагрузить браузер после сборки
  }, 1000);  // Увеличиваем debounce до 1 секунды
}

// Первоначальная сборка
console.log('🚀 Starting initial build...');
await buildProject();

// Запуск browser-sync
console.log('🌐 Starting browser-sync...');
bs.init({
  server: {
    baseDir: path.resolve(__dirname, '../build'),
    index: 'index.html'
  },
  port: 3000,
  open: true,
  notify: false,
  ui: false,
  watch: false,  // Отключаем автоматическое отслеживание
  reloadDelay: 0,
  injectChanges: false
});

console.log('👀 Watching for changes in src/...');

// Наблюдение за изменениями
const watcher = chokidar.watch(
  path.resolve(__dirname, '../src'),
  {
    ignored: (filePath) => {
      // Игнорируем скрытые файлы
      if (/(^|[\/\\])\./.test(filePath)) return true;

      // Игнорируем автогенерируемые файлы
      if (filePath.includes('svg-sprite.html')) return true;
      if (filePath.includes('sprite.svg')) return true;

      return false;
    },
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 500,
      pollInterval: 100
    }
  }
);

watcher
  .on('add', (filePath) => {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`📄 File added: ${relativePath}`);
    debouncedBuild(filePath);
  })
  .on('change', (filePath) => {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`📝 File changed: ${relativePath}`);
    debouncedBuild(filePath);
  })
  .on('unlink', (filePath) => {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`🗑️  File removed: ${relativePath}`);
    debouncedBuild(filePath);
  });

// Обработка завершения процесса
process.on('SIGINT', () => {
  console.log('\n👋 Stopping watcher...');
  watcher.close();
  bs.exit();
  process.exit(0);
});
