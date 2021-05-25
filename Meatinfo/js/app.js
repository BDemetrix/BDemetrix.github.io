function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
(()=>{
  let employees = document.querySelectorAll('.button--employee');
  if (employees.length) {
    employees.forEach(employee => {
      employee.addEventListener('click', () => {
        const text = employee.textContent;
        employee.textContent = employee.dataset.text;
        employee.dataset.text = text;
        employee.dataset.sent = employee.dataset.sent ? employee.dataset.sent = 'false' : employee.dataset.sent = 'true'
      });
    });
  };

  let upBtn = document.querySelector('.button--up');
  if (upBtn) {
    upBtn.addEventListener('click', ()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"});
    });
  }
})();
(()=>{
  let prevCloseBtns = document.querySelectorAll('.feedback__preview-btn');
  prevCloseBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
      btn.parentNode.remove();
    });
  })
})();
tippy('.confirmed', {
  content: `<div class="confirmed-msg">
							<div class="confirmed-msg__title">
								Подтверждённая компания
							</div>
							<div class="confirmed-msg__text">
								Реквизиты компании проверены банковским переводом.
							</div>
						</div>`,
  allowHTML: true,
});

// To connect the SimpleBar
function plugSimpleBar(selector) {
  let simpleBarEl = document.querySelector(selector);
  if (simpleBarEl) {
    try {
      new SimpleBar(simpleBarEl);

    } catch {
      simpleBarEl.style.ovetflowY = 'auto';
    }
  }
}

plugSimpleBar('.page__abs-table');
plugSimpleBar('.breadcrumbs'); 
plugSimpleBar('.page__photos-box');
