{
    const moderationPopUp = document.querySelector('#moderation-pop-up');
    if (moderationPopUp) {
        console.log(moderationPopUp)
        window.addEventListener('close-custom-pop-up', () => {
            moderationPopUp.querySelector('._spoller._active').click();
        })
    }
}