'use strict';

var i18n = {
  ru: {
    // Header
    'header.logo':      'DB',
    'nav.about':        'Обо мне',
    'nav.skills':       'Навыки',
    'nav.experience':   'Опыт',
    'nav.projects':     'Проекты',
    'nav.contacts':     'Контакты',

    // Hero
    'hero.location':    '📍 Санкт-Петербург · Remote',
    'hero.name':        'Дмитрий Богданов',
    'hero.subtitle':    'Frontend Developer · Vue.js · Flutter · 4+ лет коммерческого опыта',
    'hero.cta.download':'Скачать резюме PDF',
    'hero.cta.telegram':'Написать в Telegram',

    // About
    'about.title': 'Обо мне',
    'about.text1': 'Фронтенд-разработчик с 4+ годами коммерческого опыта. Специализируюсь на разработке интерфейсов для маркетплейсов, CRM и биллинговых систем на Vue.js. Руководил командой при создании кроссплатформенного мобильного приложения на Flutter (iOS/Android).',
    'about.text2': 'Применяю Clean Architecture, SOLID, DRY, KISS, YAGNI. Работаю в OOP и функциональной парадигмах. Участвовал в полном цикле разработки: от анализа бизнес-задач до деплоя в продакшн.',
    'about.text3': 'Интересна позиция Mid+/Senior Frontend Developer (remote) в продуктовой или аутсорс-компании с нетривиальными техническими задачами.',

    // Skills
    'skills.title':        'Навыки',
    'skills.cat.languages':'Языки',
    'skills.cat.frameworks':'Фреймворки',
    'skills.cat.arch':     'Архитектура',
    'skills.cat.state':    'Стейт-менеджеры',
    'skills.cat.build':    'Сборка',
    'skills.cat.api':      'HTTP / API',
    'skills.cat.infra':    'Инфраструктура',
    'skills.cat.native':   'Нативная разработка',
    'skills.cat.process':  'Процессы',

    // Experience
    'exp.title': 'Опыт работы',
    'exp.job1.role':    'Android-приложение',
    'exp.job1.company': 'Tech Lead / Android Developer',
    'exp.job1.period':  '2026 — настоящее время · Remote',
    'exp.job1.item1':   'Ведётся активная разработка нативного Android-приложения',
    'exp.job1.item2':   'UI на Jetpack Compose',

    'exp.job2.role':    'Кроссплатформенное Desktop-приложение',
    'exp.job2.company': 'Frontend Developer',
    'exp.job2.period':  '2026 · Remote',
    'exp.job2.item1':   'Уникальный UI для Windows/macOS/Linux на Electron.js',
    'exp.job2.item2':   'Оптимизация тяжёлых операций через Web Workers — убрал фризы UI',
    'exp.job2.item3':   'Переход на эффективные структуры данных: O(n²) → O(log n)',

    'exp.job3.role':    'Смарт Кард — мобильное приложение',
    'exp.job3.company': 'Tech Lead / Flutter Developer',
    'exp.job3.period':  '2023–2025 · Remote',
    'exp.job3.item1':   'Тимлид команды из 4 разработчиков',
    'exp.job3.item2':   'Проектировал архитектуру на Clean Architecture + SOLID',
    'exp.job3.item3':   'Выпуск в App Store и Google Play, довёл до бета-тестирования',

    'exp.job4.role':    'M16.TECH — Foodtech платформа',
    'exp.job4.company': 'Frontend Developer',
    'exp.job4.period':  '2021–2023 · Remote',
    'exp.job4.item1':   'Интерфейсы маркетплейса: каталог, карточки, CRM для агентов',
    'exp.job4.item2':   'Рефакторинг legacy — сократил объём компонентов на ~30%',
    'exp.job4.item3':   'Проектирование API-контрактов совместно с бэкенд-командой',

    'exp.job5.role':    'Sota — Биллинговая платформа',
    'exp.job5.company': 'Frontend Developer',
    'exp.job5.period':  '2023 · Remote',
    'exp.job5.item1':   'Управление тарифами, подписками, историей транзакций',
    'exp.job5.item2':   'Сложные таблицы с сортировкой, фильтрацией, пагинацией (десятки тысяч записей)',

    'exp.job6.role':    'Пкаско — Сервис автострахования',
    'exp.job6.company': 'Frontend Developer',
    'exp.job6.period':  '2022 · Remote',
    'exp.job6.item1':   'Рефакторинг пользовательских сценариев оформления КАСКО/ОСАГО',

    'exp.note': '* Все компании — заказчики ООО «Инлайн» (основное место работы)',

    // Projects
    'projects.title': 'Проекты',
    'projects.view':  'Смотреть →',

    'projects.flextable.title': 'FlexTable — плагин таблиц',
    'projects.flextable.desc':  'Кастомный JS-плагин для гибких адаптивных таблиц с сортировкой и фильтрацией',

    'projects.smartlab.title': 'smartlab.news — вёрстка',
    'projects.smartlab.desc':  'Полная пиксельная вёрстка новостного финансового портала',

    'projects.aod.title': 'AOD — лендинг велобренда',
    'projects.aod.desc':  'Анимированный лендинг для велосипедного бренда с параллакс-эффектами',

    'projects.mavic.title': 'Mavic — лендинг квадрокоптера',
    'projects.mavic.desc':  'Лендинг квадрокоптера DJI Mavic с анимациями и адаптивной вёрсткой',

    'projects.logo.title': 'Logo — интернет-магазин',
    'projects.logo.desc':  'Многостраничный интернет-магазин: каталог, карточка товара, оформление заказа',

    'projects.luxtrader.title': 'Luxtrader — онлайн-аукцион',
    'projects.luxtrader.desc':  'Платформа онлайн-аукциона предметов роскоши с интерактивными элементами',

    'projects.misocial.title': 'MISOCIAL — адаптивная верстка',
    'projects.misocial.desc':  'Адаптивный сайт социальной сети с мобильной навигацией',


    // Featured / main projects
    'projects.smartcard.title': 'Smart Card — Flutter (RuStore)',
    'projects.smartcard.desc':  'Мобильное приложение для умных визиток. Тимлид команды 4 разработчиков. Выпуск в RuStore, App Store и Google Play.',

    'projects.meatinfo.title': 'meatinfo.ru — Маркетплейс (M16)',
    'projects.meatinfo.desc':  'Листинг и карточки товаров foodtech-маркетплейса M16.TECH. Рефакторинг компонентов, проектирование API-контрактов с бэкендом.',

    'projects.smartlabmobile.title': 'smart-lab.ru/mobile',
    'projects.smartlabmobile.desc':  'Адаптивная мобильная версия финансового портала Smart-lab.',

    'projects.cert.title': 'Foodtech-платформа M16 — Гос. регистрация ПО',
    'projects.cert.desc':  'Свидетельство о гос. регистрации ПО №2023613075. Платформа автоматизации продаж продуктов питания и сельхозсырья. Соавтор: Богданов Д.Е.',
    'projects.cert.badge': '№2023613075',
    'projects.cert.open':  'Открыть свидетельство PDF →',

    // Journey block
    'projects.journey.title': 'От вёрстки к архитектуре',
    'projects.journey.text':  'Я начал с нуля — самостоятельно освоил HTML, CSS и JavaScript, верстал макеты и создавал первые коммерческие лендинги. Со временем задачи усложнялись: появились архитектурные паттерны, командная работа, нативная разработка. Сегодня я проектирую системы на Clean Architecture, SOLID и DDD — и передаю эти знания коллегам.',
    'projects.journey.link':  'Ранние работы ↓',

    // Early works section
    'projects.roots.title':    'Ранние работы',
    'projects.roots.subtitle': 'HTML/CSS/JS вёрстка — с чего началась карьера',

    // Education
    'edu.title':      'Образование',
    'edu.university': 'Донецкий национальный университет, факультет физики',
    'edu.degree':     'Магистр физики, преподаватель',
    'edu.period':     '2000–2005 · г. Донецк (Украина)',

    // Contacts
    'contacts.title':    'Контакты',
    'contacts.subtitle': 'Открыт к новым проектам и интересным предложениям',
    'contacts.telegram': 'Написать в Telegram',
    'contacts.email':    'Написать на email',
    'contacts.github':   'GitHub профиль',
    'contacts.phone':    '+7 911 257 35 86',

    // Footer
    'footer.copy': '© 2026 Дмитрий Богданов',
    'footer.made': 'Frontend Developer · Открыт к предложениям'
  },

  en: {
    // Header
    'header.logo':      'DB',
    'nav.about':        'About',
    'nav.skills':       'Skills',
    'nav.experience':   'Experience',
    'nav.projects':     'Projects',
    'nav.contacts':     'Contacts',

    // Hero
    'hero.location':    '📍 Saint Petersburg · Remote',
    'hero.name':        'Dmitry Bogdanov',
    'hero.subtitle':    'Frontend Developer · Vue.js · Flutter · 4+ years of experience',
    'hero.cta.download':'Download Resume PDF',
    'hero.cta.telegram':'Message on Telegram',

    // About
    'about.title': 'About Me',
    'about.text1': 'Frontend developer with 4+ years of commercial experience. I specialize in building interfaces for marketplaces, CRM, and billing systems with Vue.js. Led a team while developing a cross-platform mobile application in Flutter (iOS/Android).',
    'about.text2': 'I apply Clean Architecture, SOLID, DRY, KISS, and YAGNI principles. I work in both OOP and functional paradigms. I\'ve participated in the full development cycle: from business requirements analysis to production deployment.',
    'about.text3': 'I\'m looking for a Mid+/Senior Frontend Developer position (remote) at a product or outsourcing company with non-trivial technical challenges.',

    // Skills
    'skills.title':        'Skills',
    'skills.cat.languages':'Languages',
    'skills.cat.frameworks':'Frameworks',
    'skills.cat.arch':     'Architecture',
    'skills.cat.state':    'State Management',
    'skills.cat.build':    'Build Tools',
    'skills.cat.api':      'HTTP / API',
    'skills.cat.infra':    'Infrastructure',
    'skills.cat.native':   'Native Development',
    'skills.cat.process':  'Processes',

    // Experience
    'exp.title': 'Work Experience',
    'exp.job1.role':    'Android Application',
    'exp.job1.company': 'Tech Lead / Android Developer',
    'exp.job1.period':  '2026 — present · Remote',
    'exp.job1.item1':   'Active development of a native Android application',
    'exp.job1.item2':   'UI built with Jetpack Compose',

    'exp.job2.role':    'Cross-platform Desktop Application',
    'exp.job2.company': 'Frontend Developer',
    'exp.job2.period':  '2026 · Remote',
    'exp.job2.item1':   'Unique UI for Windows/macOS/Linux using Electron.js',
    'exp.job2.item2':   'Optimized heavy operations via Web Workers — eliminated UI freezes',
    'exp.job2.item3':   'Migrated to efficient data structures: O(n²) → O(log n)',

    'exp.job3.role':    'Smart Card — Mobile Application',
    'exp.job3.company': 'Tech Lead / Flutter Developer',
    'exp.job3.period':  '2023–2025 · Remote',
    'exp.job3.item1':   'Team lead for a team of 4 developers',
    'exp.job3.item2':   'Designed architecture with Clean Architecture + SOLID',
    'exp.job3.item3':   'Released to App Store and Google Play, reached beta testing',

    'exp.job4.role':    'M16.TECH — Foodtech Platform',
    'exp.job4.company': 'Frontend Developer',
    'exp.job4.period':  '2021–2023 · Remote',
    'exp.job4.item1':   'Marketplace interfaces: catalog, product cards, CRM for agents',
    'exp.job4.item2':   'Legacy refactoring — reduced component volume by ~30%',
    'exp.job4.item3':   'API contract design in collaboration with the backend team',

    'exp.job5.role':    'Sota — Billing Platform',
    'exp.job5.company': 'Frontend Developer',
    'exp.job5.period':  '2023 · Remote',
    'exp.job5.item1':   'Tariff, subscription, and transaction history management',
    'exp.job5.item2':   'Complex tables with sorting, filtering, and pagination (tens of thousands of records)',

    'exp.job6.role':    'Pkasko — Car Insurance Service',
    'exp.job6.company': 'Frontend Developer',
    'exp.job6.period':  '2022 · Remote',
    'exp.job6.item1':   'Refactored user flows for KASKO/OSAGO insurance registration',

    'exp.note': '* All companies are clients of LLC «Inline» (primary employer)',

    // Projects
    'projects.title': 'Projects',
    'projects.view':  'View →',

    'projects.flextable.title': 'FlexTable — Table Plugin',
    'projects.flextable.desc':  'Custom JS plugin for flexible responsive tables with sorting and filtering',

    'projects.smartlab.title': 'smartlab.news — Layout',
    'projects.smartlab.desc':  'Pixel-perfect layout of a financial news portal',

    'projects.aod.title': 'AOD — Cycling Brand Landing',
    'projects.aod.desc':  'Animated landing page for a cycling brand with parallax effects',

    'projects.mavic.title': 'Mavic — Drone Landing Page',
    'projects.mavic.desc':  'DJI Mavic drone landing page with animations and responsive layout',

    'projects.logo.title': 'Logo — Online Store',
    'projects.logo.desc':  'Multi-page online store: catalog, product card, checkout',

    'projects.luxtrader.title': 'Luxtrader — Online Auction',
    'projects.luxtrader.desc':  'Luxury goods online auction platform with interactive elements',

    'projects.misocial.title': 'MISOCIAL — Responsive Layout',
    'projects.misocial.desc':  'Responsive social network website with mobile navigation',


    // Featured / main projects
    'projects.smartcard.title': 'Smart Card — Flutter (RuStore)',
    'projects.smartcard.desc':  'Smart business card mobile app. Led a team of 4 developers. Released on RuStore, App Store and Google Play.',

    'projects.meatinfo.title': 'meatinfo.ru — Marketplace (M16)',
    'projects.meatinfo.desc':  'Product listing and cards for M16.TECH foodtech marketplace. Component refactoring, API contract design with backend.',

    'projects.smartlabmobile.title': 'smart-lab.ru/mobile',
    'projects.smartlabmobile.desc':  'Responsive mobile version of the Smart-lab financial portal.',

    'projects.cert.title': 'M16 Foodtech Platform — State Software Registration',
    'projects.cert.desc':  'Certificate of State Software Registration №2023613075. Platform for automating food and agricultural produce sales. Co-author: D. Bogdanov.',
    'projects.cert.badge': '№2023613075',
    'projects.cert.open':  'Open Certificate PDF →',

    // Journey block
    'projects.journey.title': 'From Layout to Architecture',
    'projects.journey.text':  'I started from scratch — taught myself HTML, CSS, and JavaScript, built pixel-perfect layouts and first commercial landing pages. Over time the challenges grew: architectural patterns, team leadership, native development. Today I design systems using Clean Architecture, SOLID, and DDD — and mentor colleagues on the principles I learned on my own.',
    'projects.journey.link':  'Early Works ↓',

    // Early works section
    'projects.roots.title':    'Early Works',
    'projects.roots.subtitle': 'HTML/CSS/JS layouts — where the journey began',

    // Education
    'edu.title':      'Education',
    'edu.university': 'Donetsk National University, Faculty of Physics',
    'edu.degree':     'Master of Physics, Teacher',
    'edu.period':     '2000–2005 · Donetsk, Ukraine',

    // Contacts
    'contacts.title':    'Contacts',
    'contacts.subtitle': 'Open to new projects and interesting opportunities',
    'contacts.telegram': 'Message on Telegram',
    'contacts.email':    'Send an Email',
    'contacts.github':   'GitHub Profile',
    'contacts.phone':    '+7 911 257 35 86',

    // Footer
    'footer.copy': '© 2026 Dmitry Bogdanov',
    'footer.made': 'Frontend Developer · Open to opportunities'
  }
};

/**
 * Apply translations for the given language to all [data-i18n] elements.
 */
function applyLang(lang) {
  var dict = i18n[lang];
  if (!dict) return;

  var elements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      // Preserve child elements (SVG icons, spans) — only update text nodes
      var hasChildElements = el.children.length > 0;
      if (hasChildElements) {
        // Find and update text nodes only
        for (var j = 0; j < el.childNodes.length; j++) {
          if (el.childNodes[j].nodeType === 3) { // TEXT_NODE
            var trimmed = el.childNodes[j].textContent.trim();
            if (trimmed.length > 0) {
              el.childNodes[j].textContent = ' ' + dict[key] + ' ';
              break;
            }
          }
        }
      } else {
        el.textContent = dict[key];
      }
    }
  }

  // Update html lang attribute
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // Update lang button label
  var langLabel = document.querySelector('[data-lang-label]');
  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }
}

/**
 * Toggle between ru and en.
 */
function toggleLang() {
  var current = localStorage.getItem('lang') ||
    document.documentElement.getAttribute('data-lang') || 'ru';
  var next = current === 'ru' ? 'en' : 'ru';
  localStorage.setItem('lang', next);
  applyLang(next);
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  var savedLang = localStorage.getItem('lang') ||
    document.documentElement.getAttribute('data-lang') || 'ru';
  applyLang(savedLang);

  // Bind lang toggle button
  var langBtn = document.querySelector('.lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLang);
  }
});
