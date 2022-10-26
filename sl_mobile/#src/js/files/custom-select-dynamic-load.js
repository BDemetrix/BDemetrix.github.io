
// Срипт для кастомного селекта
(function () {
    const sCustomSelector = '.custom-select';

    function close(nExclude) {
        document.querySelectorAll(sCustomSelector).forEach(function (nOther) {
            if (nOther != nExclude) nOther.classList.remove('custom-select--opened');
        });
    }

    document.documentElement.addEventListener('click', function (e) {
        const nSelect = e.target.closest(sCustomSelector);
        if (!nSelect) return close(null);

        if (e.target.closest('.custom-select__main-btn')) {
            nSelect.classList.toggle('custom-select--opened');
            close(nSelect);

        } else if (nOption = e.target.closest('.custom-select__option')) {
            const nMainBtn = nSelect.querySelector('.custom-select__main-btn');
            if (nMainBtn) nMainBtn.value = nOption.value; // defineProperty handler

            nSelect.classList.remove('custom-select--opened');

            nMainBtn.dispatchEvent(new Event('change', {
                'bubbles': true,
                'cancelable': false
            }));
        }
    }, false);

    document.documentElement.addEventListener('sync', function (e) {
        if (!e.target.matches(sCustomSelector)) return;

        const nSelect = e.target;
        const nMainBtn = nSelect.querySelector('.custom-select__main-btn');
        if (nMainBtn) {
            const nActive = nSelect.querySelector('.custom-select__option--active');
            if (nActive) {
                nMainBtn.textContent = nActive.textContent;
                nMainBtn.value = nActive.value;
            } else {
                const nOption = nSelect.querySelector('.custom-select__option[value="' + nMainBtn.value + '"]');
                if (nOption) nOption.classList.add('custom-select__option--active');
            }

            Object.defineProperty(nMainBtn, 'value', {
                set: function (value) {
                    this.setAttribute('value', value);
                    const nActive = nSelect.querySelector('.custom-select__option--active');
                    const nOption = nSelect.querySelector('.custom-select__option[value="' + this.value + '"]');

                    if (nActive !== nOption) {
                        if (nActive) nActive.classList.remove('custom-select__option--active');
                        if (nOption) nOption.classList.add('custom-select__option--active');
                        this.textContent = nOption ? nOption.textContent : '';
                    }
                },

                get: function () {
                    return this.getAttribute('value');
                }
            });
        }

    }, false);

    document.querySelectorAll(sCustomSelector).forEach(function (nSelect) {
        nSelect.dispatchEvent(new Event('sync', {
            'bubbles': true,
            'cancelable': false
        }));
    });


    if (typeof (MutationObserver) !== 'function') return;
    (new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.matches && node.matches(sCustomSelector)) {
                    node.dispatchEvent(new Event('sync', {
                        'bubbles': true,
                        'cancelable': false
                    }));
                } else if (node.querySelectorAll) {
                    const nodes = node.querySelectorAll(sCustomSelector);
                    if (nodes.length) {
                        nodes.forEach(function (node) {
                            node.dispatchEvent(new Event('sync', {
                                'bubbles': true,
                                'cancelable': false
                            }));
                        });
                    }
                }
            });
        });
    })).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

}());