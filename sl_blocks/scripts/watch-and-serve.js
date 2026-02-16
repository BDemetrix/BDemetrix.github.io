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

// Функция сборки проекта
async function buildProject() {
  if (isBuilding) {
    buildQueue = true;
    return;
  }

  isBuilding = true;
  console.log('\n🔨 Building project...');

  try {
    await execAsync('npm run build', { cwd: path.resolve(__dirname, '..') });
    console.log('✅ Build completed successfully');

    // Перезагрузка браузера после сборки
    bs.reload();
  } catch (error) {
    console.error('❌ Build failed:', error.message);
  } finally {
    isBuilding = false;

    // Если были изменения во время сборки, запускаем ещё раз
    if (buildQueue) {
      buildQueue = false;
      buildProject();
    }
  }
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
  ui: false
});

console.log('👀 Watching for changes in src/...');

// Наблюдение за изменениями
const watcher = chokidar.watch(
  path.resolve(__dirname, '../src'),
  {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true
  }
);

watcher
  .on('add', (filePath) => {
    console.log(`📄 File added: ${path.relative(process.cwd(), filePath)}`);
    buildProject();
  })
  .on('change', (filePath) => {
    console.log(`📝 File changed: ${path.relative(process.cwd(), filePath)}`);
    buildProject();
  })
  .on('unlink', (filePath) => {
    console.log(`🗑️  File removed: ${path.relative(process.cwd(), filePath)}`);
    buildProject();
  });

// Обработка завершения процесса
process.on('SIGINT', () => {
  console.log('\n👋 Stopping watcher...');
  watcher.close();
  bs.exit();
  process.exit(0);
});
