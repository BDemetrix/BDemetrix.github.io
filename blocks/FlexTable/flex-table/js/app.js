let tds = document.querySelectorAll('td, th');
let t = new Date();

new FlexTable('.trades-table');
t = new Date() - t;

let info = document.getElementById('box-info-run');
if (info) {
  info.innerHTML = `Время работы скрипта: ${t} мс <br> количество ячеек в таблице ${tds.length}`;
}