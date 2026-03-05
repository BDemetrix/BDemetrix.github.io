import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { resolve } from 'path';

/**
 * Vite plugin for copying images from src/images/pictures to build/pictures
 */
export function copyImagesPlugin() {
  const srcImagesDir = resolve(__dirname, '..', 'src', 'images', 'pictures');
  const buildImagesDir = resolve(__dirname, '..', 'build', 'pictures');

  function copyImages() {
    if (!existsSync(srcImagesDir)) {
      return;
    }

    if (!existsSync(buildImagesDir)) {
      mkdirSync(buildImagesDir, { recursive: true });
    }

    const files = readdirSync(srcImagesDir);
    files.forEach(file => {
      const srcPath = resolve(srcImagesDir, file);
      const destPath = resolve(buildImagesDir, file);
      copyFileSync(srcPath, destPath);
    });
  }

  return {
    name: 'copy-images',
    
    // Copy images during build
    buildStart() {
      copyImages();
    },
    
    // Copy images when dev server starts
    configureServer() {
      copyImages();
    }
  };
}
