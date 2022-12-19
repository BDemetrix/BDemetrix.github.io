(function () {
    const quickComment = document.querySelector('.quick-comment');
    const btn = document.querySelector('.quick-comment__btn');
    const cover = document.querySelector('.quick-comment__cover');
    const send = document.querySelector('.quick-comment__send');

    if (!quickComment || !btn || !cover || !send) return;

    btn.addEventListener('click', () => {
        quickComment.classList.add('quick-comment--visible');
        blockOverflow();
    });

    cover.addEventListener('click', () => {
        quickComment.classList.remove('quick-comment--visible', '_open');
        unBlockOverflow();
    });

    send.addEventListener('click', () => {
        quickComment.classList.remove('quick-comment--visible', '_open');
        const text = quickComment.querySelector('.quick-comment__text');
        text.value = '';
        text.style.height = '';
        unBlockOverflow();
    });

}());