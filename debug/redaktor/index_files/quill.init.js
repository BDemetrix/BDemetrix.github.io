var c_top; /*window.addEventListener('click', (ev) => {c_top = ev.clientY;editor_e = $('.ql-editor'); offset_editor_e = editor_e.offset();$('#editor-plus').css('top', c_top+'px');offset_editor_e.left = offset_editor_e.left-20;$('#editor-plus').css('left', offset_editor_e.left+'px');$('#editor-plus').show();});*/
var bindings = {
	custom: {
		key: 'enter',
		handler: function (e) { /*editor_e = $('.ql-editor'); offset_editor_e = editor_e.offset();c_top = c_top+12;$('#editor-plus').css('top', c_top+'px');offset_editor_e.left = offset_editor_e.left-20;$('#editor-plus').css('left', offset_editor_e.left+'px');$('#editor-plus').show();*/
			return true;
		}
	}
};
var Tooltip = Quill.import('ui/tooltip');
var Delta = Quill.import('delta');
var quill = new Quill('#quill-container', {
	modules: {
		toolbar: [
			[{
				header: [1, 2, false]
			}],
			['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', {
				'color': []
			}],
			[{
				'list': 'ordered'
			}, {
				'list': 'bullet'
			}],
			['link', 'image']
		],
		keyboard: {
			bindings: bindings
		}
	},
	scrollingContainer: '#scrolling-container',
	placeholder: 'Начните писать текст...',
	theme: 'bubble'
}); 
//let myTooltip = new Tooltip(quill);
saved_doc = '';
if (saved_doc != '') {
	quill.setContents();
} else {
	quill.setContents({
		"ops": [{
			"insert": "Продажи недвижки по СПб основными девелоперами."
		}, {
			"attributes": {
				"header": 1
			},
			"insert": "\n"
		}, {
			"insert": "Средняя цена квадрата СПб 2020 +14% до 113 тыс рублей за метр.\nЕсли брать чисто СПб без алгомерации, и только первичку, то ср. цена метра 156,6 тыр (+12,6%)\nПредложение 2020 составило по СПб 6,7 млн м2, что на 16% ниже 2019.\nОбъем спроса составил 4,27 млн м2.\nАжиотаж пришелся на август-октябрь, ноябрь-декабрь продажи выровнялись на значения предыдущих лет.\nДоля ипотечных сделок достигла рекордных 63%, в ажиотажные месяцы доходила до 70-74%.\nНовых проектов, которые стартовали в 20 г, стало меньше: 4,7 млн м2 против 8,7 млн2 в 2019.\n\n"
		}, {
			"attributes": {
				"bold": true
			},
			"insert": "ЛСР"
		}, {
			"insert": " по СПб: \n54 млрд (+27%) (продажи по группе 95 млрд, +12%)\nв метрах +12%\n\n"
		}, {
			"attributes": {
				"bold": true
			},
			"insert": "Setl Group"
		}, {
			"insert": " по СПб:\n112,3 млрд (+6%)\n\n"
		}, {
			"attributes": {
				"bold": true
			},
			"insert": "Эталон"
		}, {
			"insert": " по СПб:\n33 млрд (-4%) (по группе 80 млрд +3%)\n\nВсе данные по 20 году.\nНа ЛСР, Сетл и Эталон приходится 1/3 строительного рынка СПб.\nИнтересно, почему Setl еще не вышел на биржу с IPO?\n\nВот слайдик по СПб продажам в "
		}, {
			"attributes": {
				"link": "http://spb.urbanus.ru"
			},
			"insert": "одном из источников"
		}, {
			"insert": "\n"
		}, {
			"attributes": {
				"link": "/uploads/images/00/00/16/2021/02/01/20ec4a.png"
			},
			"insert": {
				"image": "https://smart-lab.ru/uploads/images/00/00/16/2021/02/01/7ea7bc.png"
			}
		}, {
			"insert": "\n"
		}]
	});
}
var change = new Delta();
quill.on('text-change', function (delta, oldDelta, source) {
	$('#editor_autosave').css('fill', '#4e92ff');
	$('#editor-plus').hide();
	change = change.compose(delta); /*quill.root.innerHTML = '<p>Youtub</p>';*/ /*alert(quill.root.innerHTML);*/
	stringify = JSON.stringify(delta.ops);
	var youtube_match = delta.ops[1].insert.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || delta.ops[1].insert.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
	if (youtube_match) {
		delta.ops[1].insert = youtube_match;
		youtube_url = '<iframe width="100%" height="400" class="ql-video" allowfullscreen="true" src="https://www.youtube.com/embed/' + youtube_match[2] + '?showinfo=0" frameborder="0"></iframe>';
		result = quill.root.innerHTML.replaceAll(youtube_match[0], youtube_url);
		quill.root.innerHTML = result;
	}
});
var open_tooltip;
// edited ===============
quill.on('selection-change', function (range) {
	//console.log('immediate', quill.getBounds(range));
	if (range.length == 0) {
		p_top = quill.getBounds(range).top;
		p_bottom = quill.getBounds(range).bottom;
		p_y = (p_bottom + p_top)/2 - $('#editor-plus').width()/2;
		$('#editor-plus').css('top', p_y + 'px');
		$('#editor-plus').css('left', 'calc(30% - 35px)'); 
		$('#editor-plus').show();
	} else {
		$('#editor-plus').hide();
	}
});
$('#editor-plus').click(function () {

	$('.ql-tooltip').css('left', 'calc(30% - 47px)'); 

	if($('.ql-tooltip').hasClass('ql-flip')){
		$('.ql-tooltip').css('top', p_top - $('.ql-tooltip').height()+ 'px'); 
	}
	else{
		$('.ql-tooltip').css('top', p_bottom  + 'px');
	}
	$('.ql-tooltip').children('.ql-tooltip-arrow').css('left', '30px');
	$('.ql-tooltip').removeClass('ql-hidden');
	$('#editor-plus').hide();	
});

$(document).on('click', function(e){ 
	if ($(e.target)[0] !== $('#editor-plus')[0]) {
		$('.ql-tooltip').children('.ql-tooltip-arrow').css('left', '');
	}
});
//====================
setInterval(function () {
	if (change.length() > 0) {
		sendSaveDoc('auto');
		change = new Delta();
	}
}, 3 * 1000);

function sendSaveDoc(t) {
	$.post('/redaktor-2-save', {
		doc: JSON.stringify(quill.getContents())
	});
	if (t == 'auto') {
		$('#editor_autosave').css('fill', '#ccc');
	} else {
		$('#editor_autosave').css('fill', '#ccc');
	}
}
window.onbeforeunload = function () {
	if (change.length() > 0) {
		return 'Имеются несохраненные данные статьи. Вы уверены, что хотите покинуть страницу?';
	}
}