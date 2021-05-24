  
let circleBar = new ProgressBar.Circle('#upload-container', {   
  color: "violet",
  strokeWidth: 3.5,
  trailWidth: 3.5,
  trailColor: "transparent",
  easing: "bounce",
  from: { color: "#c3ff00"/* , width: 1 */ },
  to: { color: "#02CA82"/* , width: 2  */},
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

let rating = +document.getElementById('upload-container').dataset.rating; // Получаем рейтинг
circleBar.animate(rating, {
  duration: 1500
});

// progress-text-link

let progressTextEls = document.querySelectorAll('.progress-text');
console.log(progressTextEls);
  progressTextEls.forEach( el => {
  el.addEventListener('click', ()=>{
    el.parentElement.querySelector('.progress-text-link').click();
  })
});