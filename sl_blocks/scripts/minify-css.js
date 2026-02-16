import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import cssnano from 'cssnano';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildDir = path.resolve(__dirname, '../build/css');

async function minifyCss() {
  if (!fs.existsSync(buildDir)) {
    console.log('CSS directory not found');
    return;
  }

  const files = fs.readdirSync(buildDir).filter(file => file.endsWith('.css') && !file.includes('.min.'));

  for (const file of files) {
    const filePath = path.join(buildDir, file);
    const css = fs.readFileSync(filePath, 'utf-8');

    const result = await postcss([cssnano({ preset: 'default' })]).process(css, { from: filePath });

    const minFileName = file.replace('.css', '.min.css');
    const minFilePath = path.join(buildDir, minFileName);

    fs.writeFileSync(minFilePath, result.css);
    console.log(`✓ Created: ${minFileName}`);
  }
}

minifyCss().catch(console.error);
