(function () {
    const sidebar = document.querySelector('.js-slide-sidebar');
    const sidebarToggleBtn = document.querySelector('.js-slide-sidebar-toggle-btn');

    if (!sidebar || !sidebarToggleBtn) return;

    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('slide-sidebar--opened');
    })
}());