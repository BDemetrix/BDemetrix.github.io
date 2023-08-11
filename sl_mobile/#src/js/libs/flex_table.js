// Flex Table v.1
// HTML data-flextable="rows, cols, col, colAfter, simpleBar"
// rows – number of fixed rows,
// cols – the number of fixed rows,
// col – the number of the column that is being rearranged,
// colAfter - the number of the column after which the rearranged column is placed.
// default: data-flextable="1,2,0,0,true" - optional attribute
// Bogdanov Dmitry 2021

//===============================================================================================================================================

class FlexTable {
  constructor(tableWrap) {
    this.options = {
      rows: 1,
      cols: 2,
      col: 0,
      colAfter: 0,
      simpleBar: true
    }

    this.run(tableWrap);
  }

  getDefaultOptions() {
    return options = {
      rows: 1,
      cols: 2,
      col: 0,
      colAfter: 0,
      simpleBar: true
    }
  }
  initOptions() {
    let optionsArr = this.wrap.dataset.flextable;
    
    if (optionsArr) {
      optionsArr = optionsArr.split(',')
      optionsArr = optionsArr.map(el => {
        return (el.trim())
      });
      this.options.rows = parseInt(optionsArr[0]) || this.options.rows;
      this.options.cols = parseInt(optionsArr[1]) || this.options.cols;
      this.options.col = parseInt(optionsArr[2]) || this.options.col;
      this.options.colAfter = parseInt(optionsArr[3]) || this.options.colAfter;
      this.options.simpleBar = (optionsArr[4] == 'false') ? false : this.options.simpleBar; 
    }
    // Для автовысоты ячеек
    this.options.autoHight = this.wrap.classList.contains('_ft-auto-height');
  }
  initShell() {

    this.inner.classList.add('_hidden');

    this.inner.leftBox = this.wrap.querySelector('.flex-table__l-box');
    this.inner.rightBox = this.wrap.querySelector('.flex-table__r-box');

    this.inner.leftTable = this.wrap.querySelector('.flex-table__l-table');
    this.inner.leftTHead = this.wrap.querySelector('.flex-table__l-thead');
    this.inner.leftTBody = this.wrap.querySelector('.flex-table__l-tbody');

    this.inner.rightHeaderWrap = this.wrap.querySelector('.flex-table__r-header-wrap');
    this.inner.rightTableWrap = this.wrap.querySelector('.flex-table__r-table-wrap');

    this.inner.rightHeaderInner = this.wrap.querySelector('.flex-table__r-header-inner');
    this.inner.rightHeaderTable = this.wrap.querySelector('.flex-table__r-header-table');
    this.inner.rightHeaderTHead = this.wrap.querySelector('.flex-table__r-table-thead');

    this.inner.rightTable = this.wrap.querySelector('.flex-table__r-table');
    this.inner.rightTBody = this.wrap.querySelector('.flex-table__r-tbody');
  }
  createShell() {
    let inner;
    inner = document.createElement('div');
    inner.leftBox = document.createElement('div');
    inner.rightBox = document.createElement('div');

    inner.classList.add('flex-table__inner', '_hidden');
    inner.leftBox.className = 'flex-table__l-box';
    inner.rightBox.className = 'flex-table__r-box';
    inner.append(inner.leftBox);
    inner.append(inner.rightBox);

    inner.leftTable = document.createElement('table');
    inner.leftTHead = document.createElement('thead');
    inner.leftTBody = document.createElement('tbody');
    inner.leftTable.className = 'flex-table__l-table';
    inner.leftTHead.className = 'flex-table__l-thead';
    inner.leftTBody.className = 'flex-table__l-tbody';
    inner.leftBox.append(inner.leftTable);
    inner.leftTable.append(inner.leftTHead)
    inner.leftTable.append(inner.leftTBody);

    inner.rightHeaderWrap = document.createElement('div');
    inner.rightTableWrap = document.createElement('div');
    inner.rightHeaderWrap.className = 'flex-table__r-header-wrap';
    inner.rightTableWrap.className = 'flex-table__r-table-wrap';
    inner.rightBox.append(inner.rightHeaderWrap);
    inner.rightBox.append(inner.rightTableWrap);

    inner.rightHeaderInner = document.createElement('div');
    inner.rightHeaderTable = document.createElement('table');
    inner.rightHeaderTHead = document.createElement('thead');
    inner.rightHeaderInner.className = 'flex-table__r-header-inner';
    inner.rightHeaderTable.className = 'flex-table__r-header-table';
    inner.rightHeaderTHead.className = 'flex-table__r-table-thead';
    inner.rightHeaderWrap.append(inner.rightHeaderInner);
    inner.rightHeaderInner.append(inner.rightHeaderTable);
    inner.rightHeaderTable.append(inner.rightHeaderTHead);

    inner.rightTable = document.createElement('table');
    inner.rightTBody = document.createElement('tbody');
    inner.rightTable.className = 'flex-table__r-table';
    inner.rightTBody.className = 'flex-table__r-tbody';
    inner.rightTableWrap.append(inner.rightTable);
    inner.rightTable.append(inner.rightTBody);

    this.inner = inner;
    return inner;
  }
  swapColumns() {
    if (this.options.col1 >= 0 && this.options.col2 >= 0 &&
      this.options.col1 != this.options.col2) {

      let max = Math.max(this.options.col1, this.options.col2);
      let min = Math.min(this.options.col1, this.options.col2);
      let col1 = min,
        col2 = max;
      let trs = this.sourceTable.querySelectorAll('tr');
      if (trs.length > 0) {
        trs.forEach(tr => {
          let tds = tr.querySelectorAll('th, td');
          if (tds.length > max) {
            tds[col1].before(tds[col2]);
            tds[col2 - 1].after(tds[col1]);
          }
        })
      }
    }
  }
  moveColumn() {
    if (this.options.col >= 0 && this.options.colAfter >= 0 &&
      this.options.col != this.options.colAfter) {

      let max = Math.max(this.options.col, this.options.colAfter);
      let min = Math.min(this.options.col, this.options.colAfter);
      let col = min,
        colAfter = max;
      let trs = this.sourceTable.querySelectorAll('tr');
      if (trs.length > 0) {
        trs.forEach(tr => {
          let tds = tr.querySelectorAll('th, td');
          if (tds.length > max) {
            tds[colAfter].after(tds[col]);
          }
        })
      }
    }
  }
  rebuild() {
    const row = this.options.rows;
    const col = this.options.cols;
    let tops = [];
    let margin = 0;
    let offset = 0;
    tops.push(0)
    this.sourceTable.before(this.inner);

    let trs = this.sourceTable.rows;
    if (trs.length > row) {
      let height;
      for (let i = 0; i < row; i++) {
        height = trs[i].cells[0].offsetHeight;
        if (i > 0) {
          tops.push(tops[i - 1] + height);
        }
        margin += height;
      }

      // Выравниваение высоты строк если обертке таблицы добавлен css класс _ft-auto-height
      if (this.options.autoHight) {
        for (let i = row; i < trs.length; i++) {
          height = trs[i].cells[0].offsetHeight;
          for (let j = 0; j < trs[i].cells.length; j++) {
            trs[i].cells[j].style.height = `${height}px`;
          }
        }
      }

      // Выравнивем ширины ячеек
      let maxCellsLength = 0;
      let headRow;
      for (let i = 0; i < row; i++) {
        const length = trs[i].cells.length
        if (maxCellsLength < length) {
          maxCellsLength = length;
          headRow = trs[i];
        }
      }
      let tableRow;
      for (let i = row; i < trs.length; i++) {
        if (trs[i].cells.length === maxCellsLength) {
          tableRow = trs[i];
          break;
        }
      }
      if (tableRow) {
        for (let i = 0; i < maxCellsLength; i++) {
          tableRow.cells[i].style.width = headRow.cells[i].style.width = tableRow.cells[i].offsetWidth + 'px';
        }
      }
 
    } else {
      alert('В таблице недостаточно строк');
      return null;
    }

    for (let i = 0; i < row; i++) {
      let tds = trs[i].querySelectorAll('td, th');
      if (tds.length > 1) {
        let newLeftTHeadTr = document.createElement('tr');
        let newRightTHeadTr = document.createElement('tr');
        for (let j = 0; j < col; j++) {
          tds[j].style.top = tops[i] - offset + 'px';
          newLeftTHeadTr.append(tds[j])
        }
        if (tds[col]) {
          for (let j = col; j < tds.length; j++) {
            tds[j].style.top = tops[i] - offset + 'px';
            newRightTHeadTr.append(tds[j]);
          }

        } else {
          let td = document.createElement('td');
          td.style.top = tops[i] + 'px';
          newRightTHeadTr.append(document.createElement('td'));
        }
        this.inner.leftTHead.append(newLeftTHeadTr);
        this.inner.rightHeaderTHead.append(newRightTHeadTr);
      }
      this.inner.rightTableWrap.style.marginTop = margin - offset + 'px';
    }

    if (trs[row]) {
      for (let i = row; i < trs.length; i++) {
        let tds = trs[i].querySelectorAll('td, th');
        let newLeftTBodyTr = document.createElement('tr');
        let newRightTBodyTr = document.createElement('tr');
        if (tds.length > 1) {

          for (let j = 0; j < col; j++) {
            newLeftTBodyTr.append(tds[j])
          }
          if (tds[col]) {
            for (let j = col; j < tds.length; j++) {
              newRightTBodyTr.append(tds[j]);
            }
          } else {
            let td = document.createElement('td');
            newRightTBodyTr.append(td);
          }
          this.inner.leftTBody.append(newLeftTBodyTr);
          this.inner.rightTBody.append(newRightTBodyTr)
        }
        if (tds.length == 1) {
          const marketHTML = `<td style="overflow: visible;"><div class="flex-table__ad-wrap"><div class="flex-table__ad-text">${tds[0].innerHTML}</div></div></td>`;
          const link = tds[0].querySelector('a');
          if (link) {
            link.innerHTML = '&nbsp';
            link.style.cssText = 'display: block; width: 100%; height: 100%;';

            newRightTBodyTr.innerHTML = marketHTML;
            newRightTBodyTr.className = 'flex-table__ad';
            this.inner.rightTBody.append(newRightTBodyTr);

            for (let i = 0; i < col; i++) {
              let td = document.createElement('td');
              td.innerHTML = link.outerHTML;
              newLeftTBodyTr.append(td);
            }
            newLeftTBodyTr.className = 'flex-table__ad';
            this.inner.leftTBody.append(newLeftTBodyTr);
          }
        }
      }
    }
    this.sourceTable.remove();
  }
  setupParameters() {
    let inner = this.inner;
    let wrap = this.wrap;
    this.adTextEls = wrap.querySelectorAll('.flex-table__ad-text');
    inner.rightHeaderInner.style.width = '';
    inner.rightTableWrap.style.maxWidth = '';
    inner.rightTableWrap.style.width = '';
    inner.rightTableWrap.style.marginTop = '';
    inner.style.width = '';
    inner.leftBox.style.width = '';
    inner.rightBox.style.width = '';

    inner.rightTableWrap.style.marginTop = inner.rightHeaderInner.getBoundingClientRect().height + 'px';
    let leftTableWidth = inner.leftTable.getBoundingClientRect().width;
    let rightTableWidth = inner.rightTable.getBoundingClientRect().width;
    let wrapW = wrap.clientWidth;
    let leftBoxHeight = inner.leftBox.clientHeight;

    this.overflowX = (leftTableWidth + rightTableWidth) > wrapW;
    this.overflowY = leftBoxHeight < (inner.leftTable.getBoundingClientRect().height);

    let rightBoxWidth;
    if (this.overflowX) {
      wrap.classList.add('_overflow');
      inner.rightBox.classList.add('_overflow');
      rightBoxWidth = Math.floor(wrapW - leftTableWidth);
      if (rightBoxWidth < 1) {
        rightBoxWidth = 0;
      }
      inner.rightHeaderInner.style.width = rightBoxWidth + 'px';
      inner.rightTableWrap.style.maxWidth = rightBoxWidth + 'px';
      inner.rightTableWrap.style.width = rightBoxWidth + 'px';
    } else {
      rightBoxWidth = rightTableWidth;
      wrap.classList.remove('_overflow');
      inner.rightBox.classList.remove('_overflow');
      inner.rightHeaderInner.style.width = rightBoxWidth + 'px';
      inner.rightTableWrap.style.maxWidth = rightBoxWidth + 'px';
      inner.rightTableWrap.style.width = rightBoxWidth + 'px';
    }

    if (this.adTextEls) {
      if (this.overflowX) {
        this.adTextEls.forEach(adText => {
          adText.style.width = rightBoxWidth + 'px';
          adText.style.left = '0px';
        });
      } else {
        this.adTextEls.forEach(adText => {
          adText.style.width = inner.clientWidth + 'px';
          adText.style.left = rightBoxWidth - inner.clientWidth + 'px';
        });
      }
    }
  }
  translateHeader() {
    let wrapX = this.inner.rightBox.getBoundingClientRect().left;
    let rightTableX = this.inner.rightTable.getBoundingClientRect().left;
    this.inner.rightHeaderTable.style.transform = `translate(${((rightTableX - wrapX) + "px")}, 0)`;
  }
  translateAdTextEls() {
    let wrapX = this.inner.rightBox.getBoundingClientRect().left;
    let rightTableX = this.inner.rightTable.getBoundingClientRect().left;
    let wrapR = this.inner.rightBox.getBoundingClientRect().right;
    let rightTableR = this.inner.rightTable.getBoundingClientRect().right;

    this.adTextEls.forEach(adText => {
      if (wrapR <= rightTableR) {
        adText.style.transform = `translate(${(-(rightTableX - wrapX) + "px")}, 0)`;
      }
    });
  }
  defineScrollBar() {
    if (this.options.simpleBar) {
      try {
        this.simpleBar = new SimpleBar(this.inner.rightTableWrap);
        if (this.simpleBar) {
          this.scroller = this.inner.rightBox.querySelector(".simplebar-content-wrapper");
          if (this.scroller) {
            let sBSHTrack = this.inner.rightBox.querySelector(".simplebar-track.simplebar-horizontal");
            sBSHTrack = sBSHTrack.getBoundingClientRect().height;
            this.inner.rightTableWrap.style.marginBottom = -sBSHTrack + 'px';
          }
        }
      } catch {
        this.inner.rightTableWrap.style.overflowX = 'auto'
        this.scroller = this.wrap;
      }
    } else {
      this.inner.rightTableWrap.style.overflowX = 'auto'
      this.scroller = this.wrap;
    }
  }
  scroll() {
    this.scroller = this.scroller || this.inner.rightTableWrap;
    this.translateX = this.translateHeader.bind(this);
    this.scroller.addEventListener('scroll', this.translateX);

    if (this.adTextEls.length > 0) {
      this.translateAdText = this.translateAdTextEls.bind(this);
      this.scroller.addEventListener('scroll', this.translateAdText);
    }

  }
  hover() {
    let table = this.inner;
    let leftTable = table.leftTable;
    let rightTable = table.rightTable;
    if (leftTable && rightTable) {
      let leftTrs = leftTable.querySelectorAll('tbody>tr');
      let rightTrs = rightTable.querySelectorAll('tr');

      leftTrs.forEach((tr) => addHover(tr));
      rightTrs.forEach((tr) => addHover(tr));
      leftTrs.forEach((tr) => removeHover(tr));
      rightTrs.forEach((tr) => removeHover(tr));

      function addHover(tr) {
        tr.addEventListener('mouseenter', () => {
          const curentTBody = tr.parentElement; //closest('tbody');
          //const table = tr.closest('.flex-table');
          const curentTrs = curentTBody.querySelectorAll('tr');
          let targetTBody;
          if (curentTBody === table.rightTBody /* .classList.contains('flex-table__l-tbody') */ ) {
            targetTBody = table.leftTBody;
          } else {
            targetTBody = table.rightTBody;
          }
          const targetTrs = targetTBody.querySelectorAll('tr');

          for (let i = 0; i < curentTrs.length; i++) {
            if (curentTrs[i] == tr) {
              targetTrs[i].classList.add('_hover');
              break;
            }
          }
        });
      }

      function removeHover(tr) {
        tr.addEventListener('mouseleave', () => {
          const curentTBody = tr.parentElement; //closest('tbody');
          //const table = tr.closest('.flex-table');
          const curentTrs = curentTBody.querySelectorAll('tr');
          let targetTBody;
          if (curentTBody === table.rightTBody /* .classList.contains('flex-table__l-tbody') */ ) {
            targetTBody = table.leftTBody;
          } else {
            targetTBody = table.rightTBody;
          }
          const targetTrs = targetTBody.querySelectorAll('tr');
          for (let i = 0; i < targetTrs.length; i++) {
            targetTrs[i].classList.remove('_hover');
          }
        });
      }
    }
  }
  resize() {
    this.windowResize = this.setupParameters.bind(this);
    window.addEventListener('resize', this.windowResize);
  }
  handler() {
    this.setupParameters();
    this.defineScrollBar();
    this.scroll();
    this.hover();
    this.resize();
  }
  clearClassList() {
    this.wrap.classList.remove('_loading');
    this.inner.classList.remove('_hidden');
  }
  run(tableWrap) {

    if (typeof tableWrap === 'string') {
      this.wrap = document.querySelector(tableWrap);
    } else if (typeof tableWrap === 'object') {
      this.wrap = tableWrap;
    }
    if (!this.wrap) {
      return;
    }

    this.wrap.classList.add('flex-table', '_loading');
    this.initOptions();

    this.inner = this.wrap.querySelector('.flex-table__inner');

    if (this.inner) {
      this.initShell();
      this.handler();
    } else {
      this.sourceTable = this.wrap.querySelector('table');
      this.sourceTable.classList.add('_hidden');
      this.moveColumn();
      this.createShell();
      this.rebuild();
      this.handler();
    }
    this.clearClassList();
  }
}

function getFlaxTableShell() {
  let wrap = document.createElement('div');
  wrap.classList.add('flex-table', '_loading');
  let inner = document.createElement('div');
  inner.classList.add('flex-table__inner', '_hidden');

  inner.leftBox = document.createElement('div');
  inner.rightBox = document.createElement('div');

  inner.leftBox.className = 'flex-table__l-box';
  inner.rightBox.className = 'flex-table__r-box';
  inner.append(inner.leftBox);
  inner.append(inner.rightBox);

  inner.leftTable = document.createElement('table');
  inner.leftTHead = document.createElement('thead');
  inner.leftTBody = document.createElement('tbody');
  inner.leftTable.className = 'flex-table__l-table';
  inner.leftTHead.className = 'flex-table__l-thead';
  inner.leftTBody.className = 'flex-table__l-tbody';
  inner.leftBox.append(inner.leftTable);
  inner.leftTable.append(inner.leftTHead)
  inner.leftTable.append(inner.leftTBody);

  inner.rightHeaderWrap = document.createElement('div');
  inner.rightTableWrap = document.createElement('div');
  inner.rightHeaderWrap.className = 'flex-table__r-header-wrap';
  inner.rightTableWrap.className = 'flex-table__r-table-wrap';
  inner.rightBox.append(inner.rightHeaderWrap);
  inner.rightBox.append(inner.rightTableWrap);

  inner.rightHeaderInner = document.createElement('div');
  inner.rightHeaderTable = document.createElement('table');
  inner.rightHeaderTHead = document.createElement('thead');
  inner.rightHeaderInner.className = 'flex-table__r-header-inner';
  inner.rightHeaderTable.className = 'flex-table__r-header-table';
  inner.rightHeaderTHead.className = 'flex-table__r-table-thead';
  inner.rightHeaderWrap.append(inner.rightHeaderInner);
  inner.rightHeaderInner.append(inner.rightHeaderTable);
  inner.rightHeaderTable.append(inner.rightHeaderTHead);

  inner.rightTable = document.createElement('table');
  inner.rightTBody = document.createElement('tbody');
  inner.rightTable.className = 'flex-table__r-table';
  inner.rightTBody.className = 'flex-table__r-tbody';
  inner.rightTableWrap.append(inner.rightTable);
  inner.rightTable.append(inner.rightTBody);

  wrap.append(inner);
  return wrap;
}