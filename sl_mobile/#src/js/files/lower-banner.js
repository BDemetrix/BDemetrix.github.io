(function () {
    const lowerBanner = document.querySelector('.lower-banner');
    if (!lowerBanner) return;
    document.body.classList.add('with-lower-banner');

    lowerBanner.addEventListener('click', () => {
        lowerBanner.remove();
        document.body.classList.remove('with-lower-banner');
    })
}());