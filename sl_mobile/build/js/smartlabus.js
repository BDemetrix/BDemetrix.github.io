document.body.addEventListener('keyup', function(e)
{
	if (e.key === 'Escape')
	{
		const aCustomPopups = Array.from(document.querySelectorAll('.custom-pop-up--open'));
		if (aCustomPopups.length)
		{
			aCustomPopups.sort(function(a,b)
			{
				return b.style.zIndex - a.style.zIndex;
			});

			aCustomPopups[0].querySelector('.custom-pop-up__close').dispatchEvent(new Event('click', {
				'bubbles': true,
				'cancelable': false
			}));
		}
	}

}, false);

document.body.addEventListener('open-custom-pop-up', function(e)
{
	if (typeof(blockOverflow) === 'function') blockOverflow();

}, false);

document.body.addEventListener('close-custom-pop-up', function(e)
{
	const nOpenedCustomPopups = document.querySelectorAll('.custom-pop-up--open');
	if (!nOpenedCustomPopups.length && (typeof(unBlockOverflow) === 'function')) unBlockOverflow();

}, false);


class ModalDialog
{
	options = {
		id: null,
		class: null,
		title: null,
		content: null,
		onOpen: function(){},
		onClose: function(){},
	};

	dialog = null;

	constructor(options)
	{
		if (typeof(options) === 'object')
		{
			for (var name in options)
			{
				if (options.hasOwnProperty(name) && (options[name] !== undefined))
				{
					if ( name === '__proto__' || this.options[name] === options[name] ) continue;
					this.options[name] = options[name];
				}
			}
		}

		this.dialogEvents = this._dialogEvents.bind(this);
	}

	setContent(content)
	{
		if (content !== null)
		{
			var sContent = (typeof(content) !== 'function') ? content : content(params);
			if (typeof(sContent) === 'string') this.dialog.querySelector('.custom-pop-up__inner').insertAdjacentHTML('afterbegin', sContent);
			if ((typeof(sContent) === 'object') && ('nodeType' in sContent) && ((sContent.nodeType === 1) || (sContent.nodeType === 11))) this.dialog.querySelector('.custom-pop-up__inner').appendChild(sContent);
		} else
		{
			const nContent = this.dialog.querySelector('.custom-pop-up__inner');
			if (nContent)
			{
				while (nContent.hasChildNodes())
				{
					nContent.removeChild(nContent.firstChild);
				}
			}
		}
	}

	open(params)
	{
		this.dialog = document.createElement('div');
		this.dialog.classList.add('custom-pop-up');

		this.dialog.insertAdjacentHTML('afterbegin', '\
		<div class="custom-pop-up__body">\
			<div class="custom-pop-up__cover"></div>\
			<div class="custom-pop-up__content">\
				<button class="custom-pop-up__close"></button>\
				<div class="custom-pop-up__title"></div>\
				<div class="custom-pop-up__inner"></div>\
			</div>\
		</div>');

		if (this.options.id !== null)
		{
			var sId = (typeof(this.options.id) !== 'function') ? this.options.id : this.options.id(params);
			if (typeof(sId) === 'string') this.dialog.setAttribute('id', sId);
		}

		if (this.options.class !== null)
		{
			var sClasses = (typeof(this.options.class) !== 'function') ? this.options.class : this.options.class(params);
			if (typeof(sClasses) === 'string')
			{
				const nContent = this.dialog.querySelector('.custom-pop-up__content');
				const nBody = this.dialog.querySelector('.custom-pop-up__body');
				const nInner = this.dialog.querySelector('.custom-pop-up__inner');
				sClasses.split(' ').forEach(function(e,i,a)
				{
					this.dialog.classList.add(e);
					nContent.classList.add(e + '__content');
					nBody.classList.add(e + '__body');
					nInner.classList.add(e + '__inner');

				}, this);
			}
		}

		if (this.options.title !== null)
		{
			var sTitle = (typeof(this.options.title) !== 'function') ? this.options.title : this.options.title(params);
			if (typeof(sTitle) === 'string') this.dialog.querySelector('.custom-pop-up__title').textContent = sTitle;
		}

		if (this.options.content !== null) this.setContent(this.options.content);

		document.body.appendChild(this.dialog);
		this.dialog.addEventListener('click', this.dialogEvents, false);

		var zIndex = 1000;
		const nOpenedCustomPopups = Array.from(document.querySelectorAll('.custom-pop-up--open'));
		const zIndexes = nOpenedCustomPopups.map((n) => n.style.zIndex).filter((i) => i != 'auto');
		if (zIndexes.length) zIndex = Math.max.apply(null, zIndexes);

		this.dialog.style.zIndex = zIndex + 1;
		
		this._onOpen(params);	
		
		this.dialog.dispatchEvent(new Event('open-custom-pop-up', {
			'bubbles': true,
			'cancelable': false
		}));

		setTimeout(function()
		{
			this.dialog.classList.add('custom-pop-up--open', '_open');

		}.bind(this), 1); // кастылечик для transition
	}

	close()
	{
		this.dialog.classList.remove('custom-pop-up--open', '_open');

		setTimeout(function()
		{
			this.dialog.dispatchEvent(new Event('close-custom-pop-up', {
				'bubbles': true,
				'cancelable': false
			}));		

			this._onClose();

			this.dialog.removeEventListener('click', this.dialogEvents, false);
			document.body.removeChild(this.dialog);
		
		}.bind(this), 300); // делаем задержку для transition
	}

	_onOpen(params)
	{
		this.options.onOpen.call(this, params);
	}

	_onClose()
	{
		this.options.onClose.call(this);
	}

	_dialogEvents(e)
	{
		if (e.type === 'click')
		{
			if (e.target.classList.contains('custom-pop-up__close') || e.target.classList.contains('custom-pop-up__cover'))
			{
				e.stopPropagation();
				this.close();
				return true;
			}
		}
		return false;
	}
}

class ConfirmDialog extends ModalDialog
{
	confirmBtn = null;

	constructor(options)
	{
		if (typeof(options.class) !== 'string') options.class = 'warning-popup';
		if (typeof(options.onConfirm) !== 'function') options.onConfirm = function(){};

		super(options);
	}

	setContent(content)
	{
		const nContent = document.createElement('template');
		nContent.innerHTML = '\
		<div class="warning-popup__text"></div>\
		<div class="warning-popup__btns">\
			<button class="warning-popup__cancel-btn cancel-btn">Отмена</button>\
			<button class="warning-popup__ok-btn blue-btn">ОК</button>\
		</div>';

		nContent.content.querySelector('.warning-popup__text').insertAdjacentHTML('afterbegin', this.options.content);
		nContent.content.querySelector('.warning-popup__ok-btn').textContent = this.options.confirmText ? this.options.confirmText : 'OK';
		super.setContent(nContent.content);
	}

	open(params)
	{
		super.open(params);
		
		// выглядит все это какахой, но поскольку transition - фокус можно поставить не сразу
		setTimeout(function()
		{
			this.dialog.querySelector('.warning-popup__ok-btn').focus();
		
		}.bind(this), 100);
	}

	_onOpen(params)
	{
		this.confirmBtn = this.dialog.querySelector('.warning-popup__ok-btn');
		super._onOpen(params);
	}

	_dialogEvents(e)
	{
		if (super._dialogEvents(e)) return true;
		if (e.type === 'click')
		{
			if (e.target.classList.contains('warning-popup__ok-btn')) this.options.onConfirm.call(this);
			if (e.target.classList.contains('warning-popup__cancel-btn'))
			{
				e.stopPropagation();
				this.close();
				return true;
			}
		}
		return false;
	}
}

function Confirm(text, title, confirmText = null)
{
	return new Promise(function(resolve, reject)
	{
		var bConfirm = false;
		const oConfirm = new ConfirmDialog({
			class: 'warning-popup',
			title: title,
			content: text,
			confirmText: confirmText,
			onConfirm: function()
			{
				this.confirmBtn.disabled = true;
				bConfirm = true;
				this.close();
			},
			onClose: function()
			{
				return bConfirm ? resolve() : reject();
			}
		});
		oConfirm.open();
	});
}


(function()
{
	const nAside = document.createElement('aside');
	nAside.classList.add('system-messages');
	document.body.appendChild(nAside);
	nAside.addEventListener('click', function(e)
	{
		const nNotice = e.target.closest('.system-messages__item');
		if (nNotice)
		{
			nNotice.style.height = '';
			nNotice.classList.remove('system-messages__item--visible');
			setTimeout(function()
			{
				nAside.removeChild(nNotice);

			}, 1000);
		}

	}, false);


	const makeNotice = function(options)
	{
		const nNotice = document.createElement('div');
		nNotice.classList.add('system-messages__item');
		nNotice.classList.add('system-messages__item--' + options.type);

		nNotice.insertAdjacentHTML('afterbegin', '\
		<div class="system-messages__item-inner">\
			<div class="system-messages__title"></div>\
			<div class="system-messages__text"></div>\
		</div>');

		const nTitle = nNotice.querySelector('.system-messages__title');
		if (nTitle)
		{
			if (typeof(options.title) === 'string')
			{
				nTitle.textContent = options.title;
			} else
			{
				nTitle.parentNode.removeChild(nTitle);
			}
		}

		const nContent = nNotice.querySelector('.system-messages__text');
		if (nContent)
		{
			if (typeof(options.content) === 'string')
			{
				nContent.insertAdjacentHTML('afterbegin', options.content);
			} else
			{
				nContent.parentNode.removeChild(nContent);
			}
		}

		nAside.appendChild(nNotice);
		nNotice.style.height = nNotice.querySelector('.system-messages__item-inner').offsetHeight + 'px';
		nNotice.classList.add('system-messages__item--visible');

		if (('timeout' in options) && (options.timeout !== null))
		{
			setTimeout(function()
			{
				nNotice.dispatchEvent(new Event('click', {
					'bubbles': true,
					'cancelable': false
				}));
			
			}, options.timeout);
		}
	};

	window.msgErrorBox = {
		alert : function(title, message)
		{
			makeNotice({
				title: title ? title : 'Ошибка!',
				content: message,
				type: 'error',
				timeout: 5000
			});
		}
	};

	window.msgNoticeBox = {
		alert : function(title, message)
		{
			makeNotice({
				title: title ? title : 'Внимание!',
				content: message,
				type: 'success',
				timeout: 5000
			});
		}
	};

})();