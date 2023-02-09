window.addEventListener('DOMContentLoaded', () => {

    function burgerMenuActivate() {
        const burgerMenu = document.querySelector('.js-burger-menu');
        if (!burgerMenu) return;

        const burgerMenuItemBtn = burgerMenu.querySelectorAll('.js-burger-menu-item-btn')

        burgerMenu.addEventListener('click', e => {
            if (!e.target.closest('.js-burger-menu-item-btn')) {
                burgerMenu.classList.toggle('_opened');
                if (burgerMenuItemBtn.length) closeAllSubBMenu(burgerMenuItemBtn);
            }
        });

        const hash = location.hash.replace('#', '');
        const target = document.getElementById(hash);
        if (target) {
            target.scrollIntoView(true);
        }


        if (!burgerMenuItemBtn.length) return;

        burgerMenuItemBtn.forEach(btn => {
            btn.parent = btn.parentElement;
            btn.inner = burgerMenu.querySelector('.js-burger-menu-sub-inner')
            btn.list = burgerMenu.querySelector('.js-burger-menu-sub-list')

            btn.addEventListener('click', e => {
                const isOpened = btn.parent.classList.contains('_opened');
                closeAllSubBMenu(burgerMenuItemBtn);
                if (!isOpened) openSubBMenu(btn);
            })
        })

        function closeAllSubBMenu(itemBtn) {
            itemBtn.forEach(btn => {
                btn.parent.classList.remove('_opened');
                btn.inner.setAttribute('style', '');
            })
        }

        function openSubBMenu(btn) {
            btn.parent.classList.add('_opened');
            btn.inner.style.height = btn.list.offsetHeight + 'px';
        }
    };

    burgerMenuActivate();

    function contextMenu() {
        const contextMenu = document.querySelectorAll('.js-context-menu');

        if (!contextMenu.length) return;

        contextMenu.forEach(menu => {
            const menuBtns = menu.querySelectorAll('.js-context-menu-btn');
            if (!menuBtns.length) return;
            menuBtns.forEach(btn => {
                btn.addEventListener('click', e => {
                    menu.classList.toggle('_opened');
                })
            });
        })

        document.documentElement.addEventListener('click', (e) => {
            if (e.target.closest('.js-context-menu-btn')) return;
            const contextMenu = document.querySelectorAll('.js-context-menu._opened');
            contextMenu.forEach(menu => menu.classList.remove('_opened'));
        }, false)
    };

    contextMenu();
    // cкрипт для тестов (показывает кнопку записаться только при ?sign_up)
    function signUpLink() {
        const psyTest = document.querySelector('.psy-test');
        const fixedSignUpBtn = document.querySelector('.fixed-sign-up');

        if (location.search.match('sign_up')) {
            if (psyTest) {
                psyTest.parentElement.style.paddingBottom = '40px';
            }
            if (fixedSignUpBtn) {
                fixedSignUpBtn.classList.remove('_hidden');
            }
        }
    };
    signUpLink();
});
