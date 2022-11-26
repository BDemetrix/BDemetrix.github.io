(function () {
    const sidebar = document.querySelector('.js-right-sidebar');
    const sidebarToggleBtn = document.querySelector('.js-right-sidebar-toggle-btn');

    if (!sidebar || !sidebarToggleBtn) return;

    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('right-sidebar--opened');
    })

}());