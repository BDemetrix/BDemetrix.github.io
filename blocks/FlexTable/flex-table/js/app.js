plugSimpleBar('#trades-table-fixed');

let tds = document.querySelectorAll('td, th');
let t = new Date();

new FlexTable('.trades-table');
t = new Date() - t;

let info = document.getElementById('box-info-run');
if (info) {
  info.innerHTML = `Время работы скрипта: ${t} мс <br> количество ячеек в таблице ${tds.length}`;
}

// To connect the SimpleBar
function plugSimpleBar(selector) {
  let simpleBarEl = document.querySelector(selector);
  if (simpleBarEl) {
    try {
      new SimpleBar(simpleBarEl);
    } 
    catch {
      simpleBarEl.style.ovetflowY = 'auto';
    }
  }
}

