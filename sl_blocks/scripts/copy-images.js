import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcImagesDir = path.resolve(__dirname, '../src/images/pictures');
const buildImagesDir = path.resolve(__dirname, '../build/pictures');

function copyImages() {
  if (!existsSync(srcImagesDir)) {
    console.log('⚠️  Source images directory not found: src/images/pictures');
    return;
  }

  if (!existsSync(buildImagesDir)) {
    mkdirSync(buildImagesDir, { recursive: true });
  }

  const files = readdirSync(srcImagesDir);
  
  if (files.length === 0) {
    console.log('⚠️  No images found in src/images/pictures');
    return;
  }

  files.forEach(file => {
    const srcPath = path.join(srcImagesDir, file);
    const destPath = path.join(buildImagesDir, file);
    copyFileSync(srcPath, destPath);
  });

  console.log(`✓ Copied ${files.length} image(s) to build/pictures`);
}

copyImages();
