/**
 * Скрипт для добавления кнопок скачивания таблицы к заголовкам h2
 * Запускается в консоли браузера
 */
(function() {
    'use strict';

    // Минифицированные стили для download-table-button
    const buttonStyles = `
.download-table-button-parent{padding:0 140px;position:relative}.download-table-button{align-items:center;background:#efefef;border:1px solid #e6e6e6;border-radius:3px;color:#000;cursor:pointer;display:flex;gap:2px;justify-content:start;padding:3px 7px 3px 3px}.download-table-button--rc{position:absolute;right:3px;top:50%;transform:translateY(-50%)}.download-table-button__icon{height:18px;width:18px}.download-table-button__text{display:block;font-size:12px;font-weight:400;line-height:110%;padding-top:1px}
`;

    // SVG спрайт с иконкой
    const svgSprite = `
<div style="display: none;">
  <svg xmlns="http://www.w3.org/2000/svg">
    <symbol id="icon-table-file" viewBox="0 0 18 18">
        <g clip-path="url(#clip0_410_238)">
            <path d="M4.5 1.5C3.67125 1.5 3.0075 2.17125 3.0075 3L3 15C3 15.8287 3.66375 16.5 4.4925 16.5H13.5C14.3287 16.5 15 15.8287 15 15V6L10.5 1.5H4.5ZM9.75 6.75V2.625L13.875 6.75H9.75Z" fill="#4FB677"/>
            <rect x="4.5" y="9.9" width="3.6" height="1.8" fill="white"/>
            <rect x="9" y="9.9" width="4.5" height="1.8" fill="white"/>
            <rect x="4.5" y="12.6" width="3.6" height="1.8" fill="white"/>
            <rect x="9" y="12.6" width="4.5" height="1.8" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0_410_238">
                <rect width="18" height="18" fill="white"/>
            </clipPath>
        </defs>
    </symbol>
  </svg>
</div>
`;

    // Добавляем стили на страницу
    const styleElement = document.createElement('style');
    styleElement.textContent = buttonStyles;
    document.head.appendChild(styleElement);
    console.log('✓ Стили для кнопок скачивания добавлены');

    // Добавляем SVG спрайт в начало body
    const spriteContainer = document.createElement('div');
    spriteContainer.innerHTML = svgSprite.trim();
    document.body.insertBefore(spriteContainer, document.body.firstChild);
    console.log('✓ SVG спрайт добавлен');

    // Находим все h2 внутри .wrapper__content
    const wrapperContents = document.querySelectorAll('.wrapper__content');
    
    if (wrapperContents.length === 0) {
        console.warn('⚠️ Элементы .wrapper__content не найдены');
        return;
    }

    let buttonsAdded = 0;

    wrapperContents.forEach((wrapper, wrapperIndex) => {
        const h2Elements = wrapper.querySelectorAll('h2');
        
        h2Elements.forEach((h2) => {
            // Добавляем класс родителю
            h2.classList.add('download-table-button-parent');

            // Находим следующий элемент после h2 и добавляем margin-bottom
            const nextElement = h2.nextElementSibling;
            if (nextElement) {
                nextElement.style.marginBottom = '32px';
            }

            // Создаем кнопку
            const button = document.createElement('button');
            button.className = 'download-table-button download-table-button--rc';
            button.innerHTML = `
                <svg class="download-table-button__icon">
                    <use href="#icon-table-file"></use>
                </svg>
                <span class="download-table-button__text">
                    Скачать таблицу
                </span>
            `;
            button.addEventListener("click", () => alert("Файл загружен"))

            // Добавляем кнопку в h2
            h2.appendChild(button);
            buttonsAdded++;
        });
    });

    console.log(`✓ Добавлено кнопок: ${buttonsAdded} к ${wrapperContents.length} элементам .wrapper__content`);
})();
