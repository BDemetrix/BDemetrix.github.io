(function () {
    const filterBtn = document.querySelector('.nf-filter__btn');
    const filterBody = document.querySelector('.nf-filter__body');

    if (!filterBtn || !filterBody) return;

    filterBtn.addEventListener('click', () => {
        _slideToggle(filterBody, 300);
    })
}());