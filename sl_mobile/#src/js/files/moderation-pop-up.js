(function () {
    const moderationPopUp = document.querySelector('#moderation-pop-up');
    if (moderationPopUp) {
        window.addEventListener('close-custom-pop-up', () => {
            const opened = moderationPopUp.querySelector('._spoller._active');
            if (opened) opened.click();
        })

        const inputs = moderationPopUp.querySelectorAll('textarea, input');
        const support = (typeof window.IntersectionObserver === "function");

        if (inputs && support) {
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        entry.element.scrollIntoView();
                    }
                })
            });

            inputs.forEach(el => {
                el.addEventListener('focus', () => {
                    setTimeout(() => {
                        observer.observe(el)
                    }, 100);
                })
            });
        }

        // костыль для textarea в спойлере 
        const textareaAutoHeight = moderationPopUp.querySelectorAll('.js-textarea-auto-height');
        const spollers = moderationPopUp.querySelectorAll('._spoller');

        if (spollers) spollers.forEach( btn => {
            btn.addEventListener('click', () => {
                textareaAutoHeight.forEach(textarea => {
                    textarea.dispatchEvent(new Event('input'))
                })
            })
        })
    }
}());