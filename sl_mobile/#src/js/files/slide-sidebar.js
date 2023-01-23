(function () {
    const sidebar = document.querySelector('.js-slide-sidebar');
    const sidebarToggleBtns = document.querySelectorAll('.js-slide-sidebar-toggle-btn');

    if (!sidebar || !sidebarToggleBtns.length) return;

    sidebarToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebar.classList.toggle('slide-sidebar--opened');
        })
    })
}());