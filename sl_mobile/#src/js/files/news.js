// скрипт для перехода на страницу автора новости и отмену перехода к самой новости (в ленте новостей)

(function () {
    const newsList = document.querySelector('.js-news-feed-list')
    if (!newsList) return;

    document.documentElement.addEventListener('click', e => {
        const newsAuthor = e.target.closest('.js-news-card-author');
        if (!newsAuthor) return;

        e.preventDefault();
        window.location.href = newsAuthor.dataset.href;
    })

    // пересчет ширин имени 
    function calcAuthorWidthAll(newsList) {
        let authorEls = newsList.querySelectorAll('.js-news-card-author');
        authorEls.forEach(el => {
            const parent = el.parentElement;
            const dataEl = parent.querySelector('.js-news-card-date');
            if (dataEl) {
                const parentWidth = parent.offsetWidth;
                const dataElWidth = dataEl.offsetWidth;
                el.style.maxWidth = `${parentWidth - dataElWidth}px`;
            }
            else {
               el.style.maxWidth = `100%`;
            } 
        });
    }

    calcAuthorWidthAll(newsList);
    window.addEventListener('resize', () => {
        calcAuthorWidthAll(newsList);
    }, false);
    window.addEventListener("orientationchange", () => {
        calcAuthorWidthAll(newsList);
    }, false);

    // Изменение ширины при добавлении новых новостей
    if (!window.hasOwnProperty('MutationObserver')) return;
    let mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                calcAuthorWidthAll(newsList)
            }
        });
    });

    mutationObserver.observe(newsList, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    });

}());