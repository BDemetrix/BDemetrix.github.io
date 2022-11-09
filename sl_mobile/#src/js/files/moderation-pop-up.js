// Модальное окно модерации
(function () {

    const sModerationPopupSelector = '#moderation-pop-up';
    if (typeof (IntersectionObserver) === 'function') {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target.scrollIntoView();
                }
            })
        });

        document.documentElement.addEventListener('focus', function (e) {
            if (!e.target.closest(sModerationPopupSelector)) return;
            if (!e.target.matches('textarea, input')) return;

            setTimeout(() => {
                observer.observe(e.target);
            }, 100);

        }, false);
    }

    document.documentElement.addEventListener('click', function (e) {
        if (!e.target.closest(sModerationPopupSelector)) return;
        if (!e.target.matches('._spoller')) return;

        var inputs = e.target.closest(sModerationPopupSelector).querySelectorAll('.js-textarea-auto-height');
        inputs.forEach(textarea => {
            textarea.dispatchEvent(new Event('input'))
        });

    }, false);

    document.documentElement.addEventListener('close-custom-pop-up', function (e) {
        if (!e.target.closest(sModerationPopupSelector)) return;

        const opened = e.target.closest(sModerationPopupSelector).querySelector('._spoller._active');
        if (opened) opened.click();

    }, false);

    document.documentElement.addEventListener('keyup', (e) => {
        heightCorrection(e)
    }, false);

    const popUpBody = document.querySelector('.moderation-pop-up__body');
    var bodyPaddingBottom = 0;
    if (popUpBody) {
        bodyPaddingBottom = +(window.getComputedStyle(popUpBody).paddingBottom.slice(0, -2));
    }

    function heightCorrection(e) {
        if (!e.target.closest(sModerationPopupSelector)) return;
        if (!e.target.matches('.moderation-pop-up__comp-search')) return;

        const popUp = e.target.closest('.moderation-pop-up');
        const popUpBody = popUp.querySelector('.moderation-pop-up__body');

        popUpBody.style.height = popUp.scrollHeight + bodyPaddingBottom + 'px';
        bodyPaddingBottom = 0;
    }
}());