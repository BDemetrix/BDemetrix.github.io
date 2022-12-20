(function () {
    const quickComment = document.querySelector('.quick-comment');
    const btn = document.querySelector('.quick-comment__btn');
    const cover = document.querySelector('.quick-comment__cover');
    const send = document.querySelector('.quick-comment__send');
    const text = document.querySelector('.quick-comment__text');

    if (!quickComment || !btn || !cover || !send || !text) return;

    btn.addEventListener('click', () => {
        quickComment.classList.add('quick-comment--visible');
        text.focus();
        blockOverflow();
    });

    cover.addEventListener('click', () => {
        quickComment.classList.remove('quick-comment--visible', '_open');
        unBlockOverflow();
    });

    send.addEventListener('click', () => {
        quickComment.classList.remove('quick-comment--visible', '_open');
        text.value = '';
        text.style.height = '';
        unBlockOverflow();
    });
}());