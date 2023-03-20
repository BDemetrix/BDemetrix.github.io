(function () {
    const filterBtn = document.querySelector('.js-nf-filter-btn');
    const filterBody = document.querySelector('.js-nf-filter-body');

    if (!filterBtn || !filterBody) return;

    filterBtn.addEventListener('click', () => {
        _slideToggle(filterBody, 300);
    })
}());