// скрипт для перехода на страницу автора новости и отмену перехода к самой новости (в ленте новостей)

(function () {
    if (!document.querySelector('.js-news-feed-list')) return;

    document.documentElement.addEventListener('click', e => {
        const newsAuthor = e.target.closest('.js-news-card-author');
        if (!newsAuthor) return;

        e.preventDefault();
        window.location.href = newsAuthor.dataset.href;
    })
}());