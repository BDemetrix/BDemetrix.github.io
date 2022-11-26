(function () {
    const sidebar = document.querySelector('.js-right-sidebar');
    const sidebarToggleBtn = document.querySelector('.js-right-sidebar-toggle-btn');
    const wrapper = document.querySelector('.wrapper');

    if (!sidebar || !sidebarToggleBtn || !wrapper) return;

    sidebarToggleBtn.addEventListener('click', () => {
        /* wrapper.style.overflow = 'hidden';
        setTimeout(() => {
            wrapper.style.overflow = 'visible';
        }, 400); */
        sidebar.classList.toggle('right-sidebar--opened');
    })

}());