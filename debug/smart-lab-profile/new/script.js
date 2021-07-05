let circleBar = new ProgressBar.Circle('#progress-wrap', {
  color: "violet",
  strokeWidth: 3.5,
  trailWidth: 3.5,
  trailColor: "#999",
  easing: "bounce",
  from: { color: "#c3ff00"/* , width: 1 */ },
  to: { color: "#02CA82"/* , width: 2  */ },
  text: {
    value: '0',
    className: 'progress-text',
    style: {
      //color: '#747474',
      position: 'absolute',
      /* left: '-10px',
      bottom: '-10px', */
      padding: 0,
      margin: 0,
      //transform: null
    }
  },
  step: (state, shape) => {
    shape.path.setAttribute("stroke", state.color);
    shape.setText(Math.round(shape.value() * 100) + '%');
    shape.text.style.color = state.color;
  }
});


let rating = +document.getElementById('progress-wrap').dataset.rating; // Получаем рейтинг
circleBar.animate(rating, {
  duration: 1500
});

// progress-text-link
let progressTextEls = document.querySelectorAll('.progress-text');
if (progressTextEls.length) {
  progressTextEls.forEach(el => {
    el.addEventListener('click', () => {
      el.parentElement.querySelector('.progress-text-link').click();
    })
    let title = el.parentElement.dataset.title ? el.parentElement.dataset.title : 'Рейтинг';
    title += ' ' + +el.parentElement.dataset.rating * 100 + '%';
    el.setAttribute('title', title);
  });
}

 
