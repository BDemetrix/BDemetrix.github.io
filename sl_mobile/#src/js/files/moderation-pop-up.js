{
    const moderationPopUp = document.querySelector('#moderation-pop-up');
    if (moderationPopUp) {
        console.log(moderationPopUp)
        window.addEventListener('close-custom-pop-up', () => {
            moderationPopUp.querySelector('._spoller._active').click();
        })

        const inputs = moderationPopUp.querySelectorAll('textarea, input');
        const support = (typeof window.IntersectionObserver === "function");

        if (inputs && support) {
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        entry.element.scrollIntoView();
                        console.log(entry)
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
    }
}
