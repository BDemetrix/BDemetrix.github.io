"use strict";

// Срипт для кастомного селекта
(function () {
  var sCustomSelector = '.custom-select';

  function close(nExclude) {
    document.querySelectorAll(sCustomSelector).forEach(function (nOther) {
      if (nOther != nExclude) nOther.classList.remove('custom-select--opened');
    });
  }

  document.documentElement.addEventListener('click', function (e) {
    var nSelect = e.target.closest(sCustomSelector);
    if (!nSelect) return close(null);

    if (e.target.closest('.custom-select__main-btn')) {
      nSelect.classList.toggle('custom-select--opened');
      close(nSelect);
    } else if (nOption = e.target.closest('.custom-select__option')) {
      var nMainBtn = nSelect.querySelector('.custom-select__main-btn');
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
    var nSelect = e.target;
    var nMainBtn = nSelect.querySelector('.custom-select__main-btn');

    if (nMainBtn) {
      var nActive = nSelect.querySelector('.custom-select__option--active');

      if (nActive) {
        nMainBtn.textContent = nActive.textContent;
        nMainBtn.value = nActive.value;
      } else {
        var _nOption = nSelect.querySelector('.custom-select__option[value="' + nMainBtn.value + '"]');

        if (_nOption) _nOption.classList.add('custom-select__option--active');
      }

      Object.defineProperty(nMainBtn, 'value', {
        set: function set(value) {
          this.setAttribute('value', value);
          var nActive = nSelect.querySelector('.custom-select__option--active');
          var nOption = nSelect.querySelector('.custom-select__option[value="' + this.value + '"]');

          if (nActive !== nOption) {
            if (nActive) nActive.classList.remove('custom-select__option--active');
            if (nOption) nOption.classList.add('custom-select__option--active');
            this.textContent = nOption ? nOption.textContent : '';
          }
        },
        get: function get() {
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
  if (typeof MutationObserver !== 'function') return;
  new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.matches && node.matches(sCustomSelector)) {
          node.dispatchEvent(new Event('sync', {
            'bubbles': true,
            'cancelable': false
          }));
        } else if (node.querySelectorAll) {
          var nodes = node.querySelectorAll(sCustomSelector);

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
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();