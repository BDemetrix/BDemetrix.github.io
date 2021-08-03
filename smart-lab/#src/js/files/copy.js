// Искать ofz_type_id и sector_id 
// SumoSelect()

function getSelectedText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection();
  } else if (document.getSelection) {
    text = document.getSelection();
  } else if (document.selection) {
    text = document.selection.createRange().text;
  }
  return text;
}

jQuery.cachedScript = function (url, options) {
  // Allow user to set any option except for dataType, cache, and url
  options = $.extend(options || {},
    {
      dataType: "script",
      cache: true,
      url: url
    });
  // Use $.ajax() since it is more flexible than $.getScript
  // Return the jqXHR object so we can chain callbacks
  return jQuery.ajax(options);
};


jQuery(document).ready(function ($) {
  // графики TradingView
  if ($('#trading_view_container').length && $('#trading_view_container').attr('ticker')) {
    $.cachedScript('https://d33t3vvu2t2yu5.cloudfront.net/tv.js').done(function () {
      if ($('#trading_view_container').length && $('#trading_view_container').attr('ticker')) {
        if ($('#trading_view_container').attr('type')) {
          new TradingView.widget({
            'width': '100%',
            'height': 400,
            'symbol': $('#trading_view_container').attr('ticker').replace('.', ':'),
            'interval': $('#trading_view_container').attr('interval') ? $('#trading_view_container').attr('interval') : '60',
            'style': '1',
            'hideideas': true,
            'locale': 'ru',
            'enable_publishing': false,
            'timezone': 'Europe/Moscow',
            'range': '2m',
            'customer': 'smartlab-custom',
            'referral_id': '1339',
            'container_id': 'trading_view_container',
            'disabled_features': ['create_volume_indicator_by_default']
          });
        } else {
          new TradingView.widget({
            'width': '100%',
            'height': 400,
            'symbol': $('#trading_view_container').attr('ticker').replace('.', ':'),
            'interval': $('#trading_view_container').attr('interval') ? $('#trading_view_container').attr('interval') : '60',
            'style': '3',
            'hideideas': true,
            'locale': 'ru',
            'enable_publishing': false,
            'timezone': 'Europe/Moscow',
            'range': '6m',
            'customer': 'smartlab-custom',
            'referral_id': '1339',
            'container_id': 'trading_view_container'
          });
        }
      }
    });
  }

  if ($(window).width() < 700) {
    $('.flinks > div > span').on('click', function () {
      $('.flinks > div > a').hide();
      $(this).nextAll().slideToggle();
    });
  }

  function hideClickMenu(e) {
    if (e.target.nodeName == 'A') {
      $('body').off('click', hideClickMenu);
      $('.clickmenu').hide();
      $('.undermenu .more.open').removeClass('open');
      return;
    }

    var cm = $(e.target);
    if (!cm.hasClass('clickmenu') && !cm.hasClass('popupmenu')) cm = cm.parents('.clickmenu, .popupmenu');
    if (!cm.length) {
      $('body').off('click', hideClickMenu);
      $('.clickmenu').hide();
      $('.undermenu .more.open').removeClass('open');
    }
  }

  $('.undermenu').on('click', '.more a,.more span', function (e) {
    e.preventDefault();
    var menu = $(this).parents('li').attr('submenu');
    var bOpened = ($('#' + menu).css('display') == 'block');

    $('.clickmenu').hide();
    $('.undermenu .more.open').removeClass('open');
    hideallDropdowns();

    if (!bOpened) {
      var menuitem = $($(this).parents('li').get(0));
      var offset = menuitem.offset();

      $('#' + menu).css('left', offset.left + 'px');
      $('#' + menu).css('top', offset.top + menuitem.outerHeight() + 'px');
      $('#' + menu).show();

      menuitem.addClass('open');

      e.stopPropagation();
      $('body').on('click', hideClickMenu);
    }
  });

  // $('.undermenu_more_main').on('mouseover', '.popupmenu', function(e)
  // 	{
  // 		var menuItem = $(e.target).parents('.submenu');
  // 		if (!menuItem.hasClass('selected'))
  // 		{
  // 			menuItem.addClass('selected');
  // 			var subMenu = $(e.target);
  // 			if (!subMenu.hasClass('.popupmenu')) subMenu = subMenu.parents('.popupmenu');

  // 			subMenu.on('mouseleave', function(e)
  // 			{
  // 				subMenu.off('mouseleave');
  // 				menuItem.removeClass('selected');
  // 			});
  // 		}
  // });

  // эта хуйня для /q/Ticker/f/y поиска
  if ($('#kompanii_search_form').length) {
    $('input:text', '#kompanii_search_form').autocomplete({
      serviceUrl: '/forum/ajaxsearchticker/',
      type: 'POST',
      dataType: 'json',
      paramName: 'value',
      params: { 'reports': 1 },
      preventBadQueries: false,
      transformResult: function (response) {
        return { suggestions: response['results'] };
      },
      onSelect: function (suggestion) {
        document.location = '/q/' + encodeURIComponent(suggestion.company_url) + '/f/y/';
      }
    });

    $('#kompanii_search_form').on('submit', function (e) {
      var sTicker = encodeURIComponent($('input:text', '#kompanii_search_form').val().toUpperCase());
      if (sTicker) {
        document.location = '/q/' + sTicker + '/f/y/';
        return false;
      }
    });
  }

  // эта хуйня для поиска в фильтрах /q
  if ($('#stocks_search_form').length) {
    var oParams = {
      serviceUrl: '/q/ajax-stocks-search/',
      type: 'POST',
      dataType: 'json',
      paramName: 'value',
      params: { 'json': 1 },
      preventBadQueries: false,
      transformResult: function (response) {
        return { suggestions: response['results'] };
      },
      onSelect: function (suggestion) {
        document.location = suggestion.data;
      }
    };

    var nAutocomplete = $('input:text', '#stocks_search_form');
    if (nAutocomplete.length) {
      if (nAutocomplete.attr('source')) oParams['params']['source'] = nAutocomplete.attr('source');
      nAutocomplete.autocomplete(oParams);
    }
  }

  var lastMessagesBlock = $('#forum_last_posts').first();
  if (lastMessagesBlock.length) {
    function lastMessagesBlockReloader() {
      window.setTimeout(function () {
        $.ajax({

          url: '/forum/ajax_forum_last_messages' + '?JsHttpRequest=' + (new Date()).getTime() + '-xml',
          type: 'GET',
          data: { security_ls_key: LIVESTREET_SECURITY_KEY }

        }).then(function (result) {
          try {
            result = JSON.parse(result);
            if (result.js.bStateError) {
              msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
              return;
            }

          } catch (e) { }

          var block = $(result.js.sLastMessages);
          lastMessagesBlock.html(block.find('#forum_last_posts').html());
          lastMessagesBlockReloader();
        });

      }, 60000);
    }
    lastMessagesBlockReloader();
  }


  $('form[default]').on('submit', function (e) {
    var sDefault = $(this).attr('default');
    if (sDefault.length) {
      var oDefault = {};
      $.each(sDefault.split('&'), function (i, v) {
        if (!v) return;
        var p = v.split('=');
        oDefault[decodeURIComponent(p[0])] = (p.length > 1) ? decodeURIComponent(p[1]) : '';
      });

      var bNewUrl = false;
      var sNewParams = '';

      $.each($(this).serializeArray(), function (i, v) {
        if ((v['name'] in oDefault) && (v['value'] === oDefault[v['name']])) {
          bNewUrl = true;
        } else {
          if (sNewParams.length) sNewParams += '&';
          sNewParams += encodeURIComponent(v['name']) + '=' + encodeURIComponent(v['value']);
        }
      });

      if (bNewUrl) {
        e.preventDefault();

        var sUrl = $(this).attr('action') ? $(this).attr('action') : document.location.href.replace(document.location.search, '');
        if (sNewParams.length) sUrl += '?' + sNewParams;
        document.location.href = sUrl;
        return false;
      }
    }
  });


  if ($('#sharesButton').length) {
    $('#sharesButton').on('click', function (e) {
      e.preventDefault();
      $('.action__drop').slideToggle();
    });
  }

  if ($('#date').length) $('#date').datepicker();
  if ($('.title_block__filter--btn').length) $('.title_block__filter--btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.top_filter').fadeToggle(200);
    return false;
  });

  if ($('#sector_id').length) $('#sector_id').SumoSelect({ placeholder: 'Все сектора' });
  var f = $('#val_middle_gt, #val_middle_lt, #capitalization_gt, #capitalization_lt, #is_state_owned, #is_exporter, #year, #type, #quarter, #duration_lt_id, #duration_gt_id, #mat_years_lt_id, #mat_years_gt_id, #year_yield_lt_id, #year_yield_gt_id, #ofz_type_id');
  if (f.length) f.SumoSelect();


  if ($('#paramSelector').length) {
    $('#paramSelector').SumoSelect();
  }

  $('.SumoSelect').find('[title]').removeAttr('title');

  var htmlNotice = (typeof (CURRENT_USER_ID) !== 'undefined') ? '<div class="mistake_notice">Нашли ошибку? Выделите фрагмент, нажмите Ctrl+Enter на клавиатуре, чтобы сообщить нам о ней.<br /><span>Внимание! Данные могут содержать ошибки. Пожалуйста, перепроверяйте все цифры самостоятельно и сообщайте нам о найденных неточностях.<br/>Смартлаб не несёт ответственности за любые ошибки в данных.</span></div>' : '<div class="mistake_notice" style="height: 50px"></div>';
  $('.content .nocenter').after(htmlNotice);
  // if ($('.news-wrapper').length)
  // {
  // 	$('.news-wrapper').before(htmlNotice);
  // } else
  // {
  // 	$('.footer').before(htmlNotice);
  // }



  if ($('#wrld tr').length) {
    var symbols = [];
    function success(data) {
      var tr = $('#wrld tr[tkr="' + data.original_name.replace(':', '.') + '"]');
      if (tr.length) {
        if (!data.last_price) return;

        var chg = data.change_percent.toFixed(1);
        var val = data.last_price;
        var ac = tr.attr('accuracy') ? parseInt(tr.attr('accuracy')) : null;
        if (ac !== null) val = val.toFixed(ac);

        $($('td', tr)[2]).text(val.toString().replace('.', ','));
        $($('td', tr)[3]).text(((chg > 0) ? '+' : '') + chg.toString().replace('.', ',') + '%');
        if (chg < 0) {
          $($('td', tr)[3]).addClass('down');

        } else {
          $($('td', tr)[3]).removeClass('down');
        }
      }
    }

    $('#wrld tr[tkr]').each(function (i, el) {
      symbols.push({ 'symbol': $(el).attr('tkr').replace('.', ':'), success: success, error: function () { } });
    });

    $('#wrld').on('click', function (e) {
      if (e.target.nodeName == "TD") {
        var sTicker = $(e.target).parents('tr').attr('tkr');
        if (sTicker) {
          document.location.href = "/gr/" + encodeURIComponent(sTicker) + "/";
        }
      }
    });

    if (symbols.length) {
      new TradingView.QuotesProvider({ container_id: 'hif', symbols: symbols });
    };
  }



  // prev functionaloty
  function hideallDropdowns() {
    $('.clickmenu').hide();
    var aDropped = $('.drop-menu-main.dropped');
    if (aDropped.length) {
      aDropped.removeClass('dropped');
      aDropped.find('.drop-menu-main-sub').removeClass('showing');

      $('body').off('click', hideallDropdowns);
      return true;
    }
    return false;
  }

  $('body').on('click', '.drop-menu-main', function (e) {
    var t = $(this);
    if (!t.hasClass('dropped')) {
      e.preventDefault();
      hideallDropdowns();

      t.toggleClass('dropped');
      t.find('.drop-menu-main-sub').toggleClass('showing');

      e.stopPropagation();
      $('body').on('click', hideallDropdowns);
    }
  });


  function HidePortfolioMenu(e) {
    $('.tables_list__dropdown--menu').hide();
  }

  if ($('.tables_list__dropdown--toggle').length) {
    $('.tables_list__dropdown--toggle').on('click', function (e) {
      e.stopPropagation();
      $('.tables_list__dropdown--menu').slideToggle('fast', function () {
        $('body').on('click', HidePortfolioMenu);
      });
    });
  }


  $(document).on('click', '.sort-table th', function () {
    var table = $(this).parents('table.sort-table');
    var sortMode = !$(this).hasClass('asc');
    table.find('th').removeClass('active asc desc');
    $(this).addClass('active ' + (sortMode ? 'asc' : 'desc'));

    var col = table.find('th').index($(this));
    var headerRows = $(this).parents('tr').prevAll().addBack();
    headerRows.remove();

    var trs = table.find('tr').get();
    var exclude = (typeof ($(this).attr('exclude')) != 'undefined') ? $(this).attr('exclude').split(' ') : [];

    var fCompareFunction = function (a, b) { };

    $.each(trs, function (i, row) {
      var value = $.trim($($(row).find('td').get(col)).text());
      if (value.length) {
        if (exclude.length) {
          $.each(exclude, function (ewi, ews) {
            value = value.replace(ews, '');
          });
          value = $.trim(value);
        }

        if (value) {
          if (value.indexOf('%') !== -1) {
            fCompareFunction = function (a, b) {
              var a = parseFloat(a.replace('%', ''));
              var b = parseFloat(b.replace('%', ''));

              if (isNaN(a) || isNaN(b)) {
                if (isNaN(a) && !isNaN(b)) return sortMode ? -1 : 1;
                if (!isNaN(a) && isNaN(b)) return sortMode ? 1 : -1;
                return 0;

              } else {
                return sortMode ? a - b : b - a;
              }
            };
            return false;

          } else if (value.match(/^[-+]?\b[0-9]*(?:(?:\.|\,)[0-9]+)?\b$/)) {
            fCompareFunction = function (a, b) {
              var a = parseFloat(a);
              var b = parseFloat(b);

              if (isNaN(a) || isNaN(b)) {
                if (isNaN(a) && !isNaN(b)) return sortMode ? -1 : 1;
                if (!isNaN(a) && isNaN(b)) return sortMode ? 1 : -1;
                return 0;

              } else {
                return sortMode ? a - b : b - a;
              }
            };
            return false;

          } else if (value.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/)) {
            fCompareFunction = function (a, b) {
              var a = Date.parse(a.split('.').reverse().join('-'));
              var b = Date.parse(b.split('.').reverse().join('-'));

              if (isNaN(a) || isNaN(b)) {
                if (isNaN(a) && !isNaN(b)) return sortMode ? -1 : 1;
                if (!isNaN(a) && isNaN(b)) return sortMode ? 1 : -1;
                return 0;

              } else {
                return sortMode ? a - b : b - a;
              }
            };
            return false;
          } else {
            fCompareFunction = function (a, b) {
              //console.log(a,b);
              return sortMode ? a.localeCompare(b) : b.localeCompare(a);
            };
            return false;
          }
        }
      }
    });

    trs.sort(function (a, b) {
      var at = $($(a).find('td').get(col)).text();
      if (exclude.length) {
        $.each(exclude, function (ewi, ews) {
          at = at.replace(ews, '');
        });
      }

      var bt = $($(b).find('td').get(col)).text();
      if (exclude.length) {
        $.each(exclude, function (ewi, ews) {
          bt = bt.replace(ews, '');
        });
      }

      at = $.trim(at.replace(',', '.'));
      bt = $.trim(bt.replace(',', '.'));

      return fCompareFunction(at, bt);
    });

    table.empty();
    table.append(headerRows);

    $.each(trs, function (i, v) {
      $(v).appendTo(table);
    });
  });

  $('[title],span.tt').not('.portfolio_action, .watchlist_action').jBox('Tooltip', {
    maxWidth: '300px'
  });

  if (document.cookie.indexOf('nomobile=') != -1) {
    jQuery('body').prepend(jQuery('<div class="user_mobile"><i></i><a href="?mobile=1">Мобильная версия</a></div>'));
  }

});
