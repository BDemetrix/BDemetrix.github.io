//Placeholers
let inputs = document.querySelectorAll('.input');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length) {
		for (let index = 0; index < inputs.length; index++) {
			let input = inputs[index];
			input.addEventListener('focus', function (e) {
				input_focus_add(input);
			});
      input.addEventListener('blur', function(e) {
				input_focus_remove(input);
      });
			input.addEventListener('change', () => {
      if (input.value)
        input.parentElement.classList.add('_filled');
      else
        input.parentElement.classList.remove('_filled');
    	});
		}
	}
}
function input_placeholder_add(input) {
	input.placeholder = input.getAttribute('data-value');
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}


