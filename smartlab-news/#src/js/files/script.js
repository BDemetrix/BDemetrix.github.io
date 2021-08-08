
window.addEventListener('resize', e => {
  ChangeFontSize();
});

//document.body.style.transition = 'all 0.25s linear';

// Styles object ======================================================================
let viewSettitgs = {
  themes: [],
  fontFamilies: [],
  fontWeights: [],
  fontSize: [],
  fontSizeArticle: []
}

let  exCookieDays = 365;

// СМЕНА СТИЛЕЙ ======================================================================

let themeLink = document.getElementById("theme-link");
let themeBtns = document.querySelectorAll('input[name="theme"][type="radio"]');
let fontFamilyBtns = document.querySelectorAll('input[name="font-family"]');
let fontWeightBtns = document.querySelectorAll('input[name="font-weight"]');
let fontSizeBtns = document.querySelectorAll('input[name="font-size"]');
let fontFamilyEls = document.querySelectorAll('._font-family');
let fontWeightEls = document.querySelectorAll('._font-weight');
let fontSizeEls = document.querySelectorAll('._font-size');

const innerWidthPC = 992;
const innerWidthMob = 320;
//const minFontSize = 16;

bootFonts();

viewSettitgsInit();
syncTheme();
syncFontFamily();
syncFontWeight();
syncFontSize();

function viewSettitgsInit() {
  for (let i = 0; i < themeBtns.length; i++) {
    viewSettitgs.themes.push(themeBtns[i].value);
  }
  for (let i = 0; i < fontFamilyBtns.length; i++) {
    viewSettitgs.fontFamilies.push(fontFamilyBtns[i].value);
  }
  for (let i = 0; i < fontWeightBtns.length; i++) {
    viewSettitgs.fontWeights.push(fontWeightBtns[i].value);
  }
  const settingArticle = document.querySelector('.header__setting_article')
  if (settingArticle) {
    for (let i = 0; i < fontSizeBtns.length; i++) {
      viewSettitgs.fontSizeArticle.push(fontSizeBtns[i].value);
    }
  } else {
    for (let i = 0; i < fontSizeBtns.length; i++) {
      viewSettitgs.fontSize.push(fontSizeBtns[i].value);
    }
  }
}
function syncTheme() {

  let savedTheme = getCookie('theme');
  if (!viewSettitgs.themes.includes(savedTheme)) {
    savedTheme = localStorage.getItem('theme');
  }

  if (themeLink.href.includes(savedTheme)) { // checking whether the saved Theme matches the href
    return;
  }

  if (viewSettitgs.themes.includes(savedTheme)) {

    setCookie('theme', savedTheme, exCookieDays);
    localStorage.setItem('theme', savedTheme);

    for (let i = 0; i < themeBtns.length; i++) {
      if (themeBtns[i].value == savedTheme) {
        themeBtns[i].checked = true;
        break;
      }
    }
  }
  else {
    let theme;
    for (let i = 0; i < themeBtns.length; i++) {
      if (themeBtns[i].checked) {
        theme = themeBtns[i].value;
        break;
      }
    }
    setCookie('theme', theme, exCookieDays);
    localStorage.setItem('theme', theme);
  }
  ChangeTheme();
}
function syncFontFamily() {

  let savedFontFamily = getCookie('fontFamily');
  if (!viewSettitgs.fontFamilies.includes(savedFontFamily)) {
    savedFontFamily = localStorage.getItem('fontFamily');
  }

  if (viewSettitgs.fontFamilies.includes(savedFontFamily)) {

    setCookie('fontFamily', savedFontFamily, exCookieDays);
    localStorage.setItem('fontFamily', savedFontFamily);

    for (let i = 0; i < fontFamilyBtns.length; i++) {
      if (fontFamilyBtns[i].value == savedFontFamily) {
        fontFamilyBtns[i].checked = true;
        break;
      }
    }
  }
  else {
    let fontFamily;
    for (let i = 0; i < fontFamilyBtns.length; i++) {
      if (fontFamilyBtns[i].checked) {
        fontFamily = fontFamilyBtns[i].value;
        break;
      }
    }
    localStorage.setItem('fontFamily', fontFamily);
    setCookie('fontFamily', fontFamily, exCookieDays);
  }
  ChangeFontFamily();
}
function syncFontWeight() {
  
  let savedFontWeight = getCookie('fontWeight');

  if (!viewSettitgs.themes.includes(savedFontWeight)) {
    savedFontWeight = localStorage.getItem('fontWeight');
  }

  if (viewSettitgs.fontWeights.includes(savedFontWeight)) {

    setCookie('fontWeight', savedFontWeight, exCookieDays);
    localStorage.setItem('fontWeight', savedFontWeight);

    for (let i = 0; i < fontWeightBtns.length; i++) {
      if (fontWeightBtns[i].value == savedFontWeight) {
        fontWeightBtns[i].checked = true;
        break;
      }
    }
  }
  else {
    let fontWeight;
    for (let i = 0; i < fontWeightBtns.length; i++) {
      if (fontWeightBtns[i].checked) {
        fontWeight = fontWeightBtns[i].value;
        break;
      }
    }
    localStorage.setItem('fontWeight', fontWeight);
    setCookie('fontWeight', fontWeight, exCookieDays);
  }
  ChangeFontWeight();
}
function syncFontSize() {
  let fontSizesKey;
  if (document.querySelector('.header__setting_article')){
    fontSizesKey = 'fontSizeArticle'
  }
  else {
    fontSizesKey = 'fontSize'
  }

  let savedFontSize = getCookie(fontSizesKey);
  if (!viewSettitgs.themes.includes(savedFontSize)) {
    savedFontSize = localStorage.getItem(fontSizesKey);
  }

  if (viewSettitgs[fontSizesKey].includes(savedFontSize)) {

    setCookie(fontSizesKey, savedFontSize, exCookieDays);
    localStorage.setItem(fontSizesKey, savedFontSize);

    for (let i = 0; i < fontSizeBtns.length; i++) {
      if (fontSizeBtns[i].value == savedFontSize) {
        fontSizeBtns[i].checked = true;
        break;
      }
    }
  }
  else {
    let fontSize;
    for (let i = 0; i < fontSizeBtns.length; i++) {
      if (fontSizeBtns[i].checked) {
        fontSize = fontSizeBtns[i].value;
        break;
      }
    }
    localStorage.setItem(fontSizesKey, fontSize);
    setCookie(fontSizesKey, fontSize, exCookieDays);
  }
  ChangeFontSize();
}
setTimeout(() => {
  document.querySelector('.page').style.transition = 'all 0.25s linear';
  //document.querySelector('.article__content').style.transition = 'all 0.25s linear';
  bootFonts();
  for (let i = 0; i < fontSizeEls.length; i++) {
    fontSizeEls[i].style.transition = 'all 0.25s linear';
  }
  for (let i = 0; i < fontFamilyEls.length; i++) {
    fontFamilyEls[i].style.transition = 'all 0.25s linear';
  }
  for (let i = 0; i < fontWeightEls.length; i++) {
    fontWeightEls[i].style.transition = 'all 0.25s linear';
  }
}, 2000);

if (themeBtns) {
  for (let i = 0; i < themeBtns.length; i++) {
  themeBtns[i].addEventListener('click', ChangeTheme);
}
}
if (fontFamilyBtns) {
  for (let i = 0; i < fontFamilyBtns.length; i++) {
    fontFamilyBtns[i].addEventListener('click', ChangeFontFamily);
  }
}
if (fontWeightBtns) {
  for (let i = 0; i < fontWeightBtns.length; i++) {
    fontWeightBtns[i].addEventListener('click', ChangeFontWeight);
  }
}
if (fontSizeBtns) {
  for (let i = 0; i < fontSizeBtns.length; i++) {
    fontSizeBtns[i].addEventListener('click', ChangeFontSize);
  }
}
function ChangeTheme() {

  if (themeLink) {
    
    let defaultTheme = themeLink.dataset.path || themeLink.href;
    let path = defaultTheme.lastIndexOf('/');
    path = defaultTheme.slice(0, path + 1);

    let theme = '';
    for (let i = 0; i < themeBtns.length; i++) {
      if (themeBtns[i].checked) {
        theme = themeBtns[i].value;
        break;
      }
    }
    localStorage.setItem('theme', theme);
    setCookie('theme', theme, exCookieDays);
    themeLink.setAttribute("href", path + theme + '.min.css');
  }
}
function ChangeFontFamily() {
  let fontFamily = '';
  for (let i = 0; i < fontFamilyBtns.length; i++) {
    if (fontFamilyBtns[i].checked) {
      fontFamily = fontFamilyBtns[i].value;
      break;
    }
  }
  for (let j = 0; j < fontFamilyEls.length; j++) {
    fontFamilyEls[j].style.fontFamily = fontFamily;
  }

  localStorage.setItem('fontFamily', fontFamily);
  setCookie('fontFamily', fontFamily, exCookieDays);
}
function ChangeFontWeight() {
  let fontWeight = '';
  for (let i = 0; i < fontWeightBtns.length; i++) {
    if (fontWeightBtns[i].checked) {
      fontWeight = fontWeightBtns[i].value;
      break;
    }
  }
  for (let j = 0; j < fontWeightEls.length; j++) {
    fontWeightEls[j].style.fontWeight = fontWeight;
  }
  localStorage.setItem('fontWeight', fontWeight);
  setCookie('fontWeight', fontWeight, exCookieDays);
}
function ChangeFontSize() {
  let blockFontSize;
  let fontSize;
  let mobFontSize;
  let minFontSize;

  for (let i = 0; i < fontSizeBtns.length; i++) {
    if (fontSizeBtns[i].checked) {
      blockFontSize = parseInt(fontSizeBtns[i].value.replace('px', ''));
      if (!blockFontSize) { blockFontSize = 14 }
      break;
    }
  }
  for (let j = 0; j < fontSizeEls.length; j++) {
    let block = fontSizeEls[j];
    let scale = parseFloat(block.getAttribute('data-fontscale')); 
    if (!scale) {
      scale = 1;
    } 
    minFontSize = parseFloat(block.getAttribute('data-minfontsize'));
    if (!minFontSize) {
      minFontSize = blockFontSize*scale;
    } 
    mobFontSize = parseFloat(block.getAttribute('data-mobfontsize'));
    if (!mobFontSize) {
      mobFontSize = blockFontSize;
    }

    if ((window.innerWidth < innerWidthPC) && (blockFontSize > mobFontSize)) {
      let k = (window.innerWidth - innerWidthMob) / (innerWidthPC - innerWidthMob);
      fontSize = mobFontSize * (1 - k) + blockFontSize * k;
      fontSize *= scale;
    }
    else {
      fontSize = blockFontSize * scale;
    }

    if (fontSize < minFontSize && scale != 1) {
      fontSize = minFontSize;
    }
    block.style.fontSize = fontSize + 'px';
  }

  let fontSizesKey;
  if (document.querySelector('.header__setting_article')) {
    fontSizesKey = 'fontSizeArticle'
  }
  else {
    fontSizesKey = 'fontSize'
  }
  localStorage.setItem(fontSizesKey, (blockFontSize + 'px'));
  setCookie(fontSizesKey, (blockFontSize + 'px'), exCookieDays);
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ';path=/';
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);

  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Changing the title of the article
let articleTitle = document.querySelector('.article__title');
if (articleTitle) {
  document.querySelector('title').textContent = articleTitle.textContent.trim();
}

// Loading all fonts
function bootFonts() {
  let timeout = 20000;
  let footer = document.querySelector('footer');
  for (let i = 0; i < fontWeightBtns.length; i++) {
    for (let j = 0; j <  fontFamilyBtns.length; j++) {
      let div = document.createElement('div');
      footer.appendChild(div);
      div.style.width = '0';
      div.style.height = '0';
      div.textContent = 'div' + i + j;
      div.style.fontWeight = fontWeightBtns[i].value;
      div.style.fontFamily = fontFamilyBtns[j].value;
      
      setTimeout(() => {
        footer.removeChild(div);
      }, timeout);
    }
  }
}

// Scroll simpleBar
let pageInnerSB
let pageInner = document.querySelector('.page__inner');
if (pageInner) {
  pageInnerSB = new SimpleBar(pageInner, {});
}
let settingBody = document.querySelector('.setting__body');
if (settingBody) {
  new SimpleBar(settingBody, {});
}

// Animation of search
let search = document.querySelector('.search');
let searchIcon = document.querySelector('.search__icon');
let searchInput = search.querySelector('input');
let searchClsBtn = document.querySelector('.search__cls-btn');
let searchSubmit = document.querySelector('.search__submit');// search__submit

searchIcon.addEventListener('click', ()=>{
  search.classList.toggle('_active');
  //searchInput.value = '';
  //searchInput.placeholder = searchInput.getAttribute('data-value');
  searchInput.focus(); 

});
searchClsBtn.addEventListener('click', () => {
  searchInput.value = '';
  search.classList.remove('_active');
});
searchSubmit.addEventListener('click', () => {
  //searchInput.value = '';
  search.classList.remove('_active');
});

let settingBtn = document.querySelector('.setting__icon');
let setting = document.querySelector('.setting');
settingBtn.addEventListener('click', () => {
  setting.classList.toggle('_active');
});

let menuLink = document.querySelectorAll('.menu__link');
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', ()=>{
    iconMenu.click();
  });
}

document.documentElement.addEventListener('click', function(e) {
  if (!e.target.closest('.setting')) {
    setting.classList.remove('_active')
  }
  if (!e.target.closest('.search')) {
    search.classList.remove('_active');
    search.querySelector('input').value = '';
  }
});

// Hover
const headerTitleContent = document.querySelector('.header__title-content');
const headerBackIcon = document.querySelector('.header__back-icon');
headerTitleContent.addEventListener('mouseenter', () => {
  if (headerBackIcon) headerBackIcon.classList.add('_active');
});
headerTitleContent.addEventListener('mouseleave', () => {
  if (headerBackIcon) headerBackIcon.classList.remove('_active');
});

let newsLink = document.querySelectorAll('.news__link a'); // news__line

for (let i = 0; i < newsLink.length; i++) {
  newsLink[i].addEventListener('mouseenter', ()=> {
    newsLink[i].closest('.news__line').classList.add('_hover');
  });
  newsLink[i].addEventListener('mouseleave', ()=> {
    newsLink[i].closest('.news__line').classList.remove('_hover');
  });
}

// hover end =====

window.addEventListener('storage', ()=>{
  syncTheme();
  syncFontFamily();
  syncFontWeight();
  syncFontSize();
});


// tippy
tippy('[data-tippy-content]');

// Для предотвращения мигания  меню 