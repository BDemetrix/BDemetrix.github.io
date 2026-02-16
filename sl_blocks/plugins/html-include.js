import posthtml from 'posthtml';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

export default function htmlIncludePlugin() {
  return {
    name: 'vite-plugin-html-include',
    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        // Простой плагин для обработки инклюдов с параметрами
        const includePlugin = (tree) => {
          tree.match({ tag: 'module' }, (node) => {
            const href = node.attrs?.href;
            if (!href) return node;

            const filePath = path.resolve(path.dirname(ctx.filename), href);

            try {
              let content = fs.readFileSync(filePath, 'utf-8');

              // Замена {{ paramName }} на значения из атрибутов
              Object.keys(node.attrs).forEach(key => {
                if (key !== 'href') {
                  const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
                  content = content.replace(regex, node.attrs[key] || '');
                }
              });

              // Парсим контент как HTML
              return posthtml().process(content, { sync: true }).tree;
            } catch (error) {
              console.error(`Error including ${href}:`, error.message);
              return node;
            }
          });

          return tree;
        };

        const result = await posthtml([includePlugin]).process(html);
        return result.html;
      }
    }
  };
}
