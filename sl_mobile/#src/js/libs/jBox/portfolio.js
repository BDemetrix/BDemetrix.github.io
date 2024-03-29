var $ = jQuery;
var oCurrenciesMap = {

	'SUR' : '₽',
	'RUB' : '₽',
	'RUR' : '₽',
	'USD' : '$',
	'AUD' : '$',
	'CAD' : '$',
	'HKD' : '$',
	'EUR' : '€',
	'GBP' : '£',
	'SEK' : 'kr',
	'TRY' : '₺',
	'CHF' : '₣',
	'THB' : '฿',
	'KZT' : '₸',
	'CNY' : '¥',
	'JPY': '¥'
};


function ClearPortfolioEvent(action, id, type, message)
{
	var clearDialog = new jBox('Confirm', 
	{
		id: 'clearDialog',
		title: 'Внимание!',
		confirmButton: 'ОК',
		cancelButton: 'Отмена',
		content: message,
		confirm: function()
		{
			var data = {action: action, id: id, type:type, security_ls_key: LIVESTREET_SECURITY_KEY}

			$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
			{
				if (!result)
				{
					msgErrorBox.alert('Error', 'Please try again later');
				}

				if (result.bStateError)
				{
					msgErrorBox.alert(result.sMsgTitle, result.sMsg);
				} else
				{
					msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
					var m = document.location.pathname.match(/^\/q\/portfolio\/([^\/]+)\//);
					if (m != null)
					{
						if (action != 'delete_list')
						{
							setTimeout(function(e)
							{
								document.location.reload();

							}, 1000);
						} else
						{
							document.location.href = '/q/portfolio/' + m[1] + '/';
						}
					}
				}
			});


		}, onCloseComplete: function()
		{
			this.destroy();
		}
	});
	clearDialog.open();
}

function AddPortfolioEvent(dialogTitle, action, id)
{
	var d = $.Deferred();

	function dialogOpen(title, hidden)
	{
		var addDialog = new jBox('Confirm', 
		{
			id: 'buySharesDialog',
			title: dialogTitle,
			confirmButton: 'Сохранить',
			cancelButton: 'Отмена',

			content: '<label for="list_title">Название портфеля:</label><br /><input id="list_title" type="text" name="title" style="width: 100%; box-sizing: border-box" /><br /><br /><label><input type="checkbox" name="hidden" />скрытый портфель</label>',

			confirm: function()
			{
				var data = {action:action, title: addDialog.wrapper.find('input[name="title"]').val(), security_ls_key: LIVESTREET_SECURITY_KEY};
				if (addDialog.wrapper.find('input[name="hidden"]').is(':checked')) data['hidden'] = 1;
				if (typeof(id) != 'undefined') data['id'] = id;

				$.ajax({
					type: 'POST',
					url: aRouter['q'] + 'portfolio-ajax/',
					data: data}).then(function(result)
					{
						if (!result)
						{
							d.reject('Error', 'Please try again later');
							return;
						}

						if (result.bStateError)
						{
							d.reject(result.sMsgTitle, result.sMsg);
						} else
						{
							d.resolve(result.sMsgTitle, result.sMsg, ('id' in result) ? result.id : null, ('title' in result) ? result.title : null);
						}
					});
			},

			onOpen: function()
			{
				this.wrapper.find('input[name="title"]').val(title);
				this.wrapper.find('input[name="hidden"]').prop('checked', hidden);
			},

			onCloseComplete: function()
			{
				this.destroy();
			}
		});

		addDialog.open();
	}

	function loadList(id)
	{
		var lld = $.Deferred();
		var data = {action:'get_list', id: id, security_ls_key: LIVESTREET_SECURITY_KEY}
		$.ajax({
			type: 'POST',
			url: aRouter['q'] + 'portfolio-ajax/',
			data: {action:'get_list', id: id, security_ls_key: LIVESTREET_SECURITY_KEY}
		}).then(function(result)
		{
			if (!result)
			{
				lld.reject('Error', 'Please try again later');
				return;
			}

			if (result.bStateError)
			{
				lld.reject(result.sMsgTitle, result.sMsg);
			} else
			{
				lld.resolve(result.title, result.hidden);
			}
		});
		return lld;
	}

	if (typeof(id) != 'undefined')
	{
		loadList(id).then(
			function(title, hidden)
			{
				dialogOpen(title, hidden);
			},

			function(sMsgTitle, sMsg)
			{
				d.reject(sMsgTitle, sMsg);
			}
		);
	} else
	{
		dialogOpen('', false);
	}

	return d;
}

function CommentPortfolioStockEvent(sec_title, symbol, sec_type, list_id, investment_id, node)
{
	var dialogTitle = 'Комментарий к позиции по';
	if (typeof(sec_title) != 'undefined') dialogTitle += ' ' + sec_title;
	if (typeof(symbol) != 'undefined') dialogTitle += ' (' + symbol + ')';

	var sTextComment = '';
	var data = {action: 'set_comment', portfolio_id: list_id, security_ls_key: LIVESTREET_SECURITY_KEY};
	if (typeof(investment_id) == 'undefined')
	{
		data['symbol'] = symbol;
		data['sec_type'] = sec_type;
	} else
	{
		data['investment_id'] = investment_id;
	}

	var commentStockDialog = new jBox('Confirm', 
	{
		id: 'commentSharesDialog',
		title: dialogTitle,
		confirmButton: 'Сохранить',
		deleteButton: 'Удалить',
		cancelButton: 'Отмена',
		closeOnConfirm: true,
		content:'<textarea></textarea>',

		_onCreated: function ()
		{
			// Add a footer to the jBox container
			this.footer = jQuery('<div class="jBox-Confirm-footer"/>');
			jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>').html(this.options.cancelButton).click(function () { this.options.cancel && this.options.cancel(); this.close(); }.bind(this)).appendTo(this.footer);
			this.deleteButton = jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-delete"/>').html(this.options.deleteButton).click(function() { this.options.delete(); this.close()}.bind(this)).appendTo(this.footer);
			this.submitButton = jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>').html(this.options.confirmButton).appendTo(this.footer);
			this.footer.appendTo(this.container);
		},

		update: function()
		{
			$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
			{
				if (!result)
				{
					msgErrorBox.alert('Error', 'Please try again later');
				}

				if (result.bStateError)
				{
					msgErrorBox.alert(result.sMsgTitle, result.sMsg);

				} else
				{
					node.attr('comment', result.sCommentText);
					if (result.sCommentText)
					{
						$(node).data('jBox-getContent',result.sCommentText);
						node.removeClass('empty');
					} else
					{
						node.addClass('empty');
						$(node).data('jBox-getContent', 'Оставить заметку к позиции');
					}

					if (result.sMsg) msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
				}
			});
		},

		delete: function()
		{
			data['action'] = 'delete_comment';
			this.update();
		},

		confirm: function()
		{
			data['text'] = commentStockDialog.wrapper.find('textarea').val();
			this.update();
		},

		onOpen: function()
		{
			var that = this;
			setTimeout(function()
			{
				if (!node.hasClass('empty')) that.wrapper.find('textarea').val(node.attr('comment').replace(/<br\/>/g, "\r\n"));
				that.wrapper.find('textarea').focus();
			}, 1);
		},
		onClose: function()
		{
			// do nothing loop %)

		}, onCloseComplete: function()
		{
			this.destroy();
		}
	});
	commentStockDialog.open();
}


function EditPortfolioStockEvent(symbol, list_id, investment_id)
{
	function editMoneyDialogOpen(investment, portfolios, with_futures_ids)
	{
		var dialogTitle = 'Редактирование ' + investment.short_name + '(' +  investment.symbol + ')';
		var stockDialog = new jBox('Confirm', 
		{
			id: 'buySharesDialog',
			title: dialogTitle,
			confirmButton: 'ОК',
			closeOnConfirm: false,
			cancelButton: 'Отмена',
			content:'<table>\
						<tr>\
							<td><label>Список бумаг:</label></td>\
							<td><select name="portfolio_id"></select></td>\
						</tr>\
						<tr>\
							<td><label>Тип денег:</label></td>\
							<td>\
								<select name="symbol">\
									<option value="RUB">Рубли (₽)</option>\
									<option value="USD">Доллары США ($)</option>\
									<option value="EUR">Евро (€)</option>\
									<option value="CNY">Юани (¥)</option>\
								</select>\
							</td>\
						</tr>\
						<tr>\
							<td><label>Количество денег:</label></td>\
							<td><input type="text" name="quantity" autocomplete="off" /></td>\
						</tr>\
						<tr>\
							<td>&nbsp;</td>\
							<td><label><input type="checkbox" name="all" />убрать все</label></td>\
						</tr>\
					</table>\
					<div class="money_add_futures">\
						ВНИМАНИЕ! У вас открыты позиции на срочном рынке!<br/>\
						Сумму денег на брокерском счете необходимо указывать по состоянию до открытия позиций на срочном рынке.<br/>\
						Брокер, как правило, динамически пересчитывает сумму на вашем счете с учетом постоянно меняющейся вар.маржи.<br/>\
						У брокера вы не можете редактировать количество денег в любой момент времени, поэтому для избежания коллизий, мы просим учитывать этот момент.\
					</div>\
					',

			confirm: function()
			{
				var data = {action: 'set_investment', sec_type: 'MONEY', symbol: stockDialog.wrapper.find('select[name="symbol"]').val(), quantity: stockDialog.wrapper.find('input[name="quantity"]').val(), portfolio_id: stockDialog.wrapper.find('select[name="portfolio_id"]').val(), investment_id: investment.investment_id, security_ls_key: LIVESTREET_SECURITY_KEY};
				if (stockDialog.wrapper.find('input[name="all"]').length && stockDialog.wrapper.find('input[name="all"]').is(':checked'))
				{
					data['all'] = 1;
				}

				$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
				{
					if (!result)
					{
						msgErrorBox.alert('Error', 'Please try again later');
					}

					if (result.bStateError)
					{
						msgErrorBox.alert(result.sMsgTitle, result.sMsg);

					} else
					{
						stockDialog.close();
						msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
						if (document.location.pathname.match(/^\/q\/portfolio\/?/))
						{
							setTimeout(function(e)
							{
								document.location.reload();

							}, 1000);
						}
					}
				});
			},

			onOpen: function()
			{
				var that = this;
			
				var wl = this.wrapper.find('select[name="portfolio_id"]');
				if (wl.length)
				{
					wl.empty();
					if (typeof(portfolios) != 'undefined')
					{
						for (i in portfolios)
						{
							var o = $('<option value="' + i + '"></option>');
							o.text(portfolios[i]);
							wl.append(o);
						}
						wl.val(investment.portfolio_id);
					}

					wl.on('change', function()
					{
						if (typeof(with_futures_ids) != 'undefined')
						{
							var warning = that.wrapper.find('.money_add_futures');
							if (with_futures_ids.indexOf( parseInt(wl.val()) ) != -1)
							{
								warning.show();
							} else
							{
								warning.hide();
							}
						}

					}).trigger('change');
				}

				this.wrapper.find('select[name="symbol"]').val(investment.symbol);
				this.wrapper.find('input[name="quantity"]').val(investment.quantity).on('keypress', function(e)
				{
					var digits = '1234567890-';
					if (digits.indexOf(e.key) == -1) e.preventDefault();
				});

				this.wrapper.find('input[name="all"]').prop('checked', true).on('click', function(e)
				{
					if (this.checked)
					{
						that.wrapper.find('input[name="quantity"]').val('Все').attr('disabled', true);
					} else
					{
						that.wrapper.find('input[name="quantity"]').val(investment.quantity).removeAttr('disabled');
					}
				}).trigger('click');
			},
			onClose: function()
			{
				if (this.wrapper.find('select[name="portfolio_id"]')) this.wrapper.find('select[name="portfolio_id"]').off('change');
				if (this.wrapper.find('input[name="all"]').length) this.wrapper.find('input[name="all"]').off('click');
				this.wrapper.find('select[name="symbol"]').off('change');
				this.wrapper.find('input[name="quantity"]').off('keypress');

			}, onCloseComplete: function()
			{
				this.destroy();
			}
		});

		stockDialog.open();
	}

	function editInvestmentDialogOpen(investment, portfolios)
	{
		var dialogTitle = 'Редактирование позиции по ' + investment.short_name + ' (' + investment.symbol + ')';

		var face_unit = null;
		var face_value = null;
		var currency_id = null;
		var stockDialog = new jBox('Confirm', 
		{
			id: 'buySharesDialog',
			title: dialogTitle,
			confirmButton: 'Сохранить',
			closeOnConfirm: false,
			cancelButton: 'Отмена',
			content:'<div class="poza">\
						<input type="radio" name="poza" value="buy" id="poza_buy" />\
						<label for="poza_buy" title="Купить актив (открыть длинную позицию - long)">КУПИТЬ</label>\
						<input type="radio" name="poza" value="sell" id="poza_sell" />\
						<label for="poza_sell" title="Продать актив (открыть короткую позицию - short)">ПРОДАТЬ</label>\
					</div>\
					<table>\
						<tr>\
							<td><label>Список бумаг:</label></td>\
							<td><select name="portfolio_id"></select></td>\
						</tr>\
						<tr>\
							<td><label>Дата и время:</label></td>\
							<td id="datetime"><input type="text" name="date" placeholder="Дата" autocomplete="off" /><input type="text" name="time" placeholder="Время" autocomplete="off" /></td>\
						</tr>\
						<tr>\
							<td><label>Тикер/Название:</label></td>\
							<td>\
								<input type="text" name="symbol" />\
								<input type="hidden" name="sec_type" />\
							</td>\
						</tr>\
						<tr>\
							<td><label>Количество бумаг:</label></td>\
							<td><input type="text" name="quantity" /></td>\
						</tr>\
						<tr>\
							<td>&nbsp;</td>\
							<td><label><input type="checkbox" name="all" />закрыть эту позу</label></td>\
						</tr>\
						<tr>\
							<td><label>Цена бумаги:</label></td>\
							<td><input type="text" name="price" /><span id="vprocentax">в % от номинала</span></td>\
						</tr>\
						<tr>\
							<td>Сумма:</td>\
							<td><span id="total_sum">0</span><span id="total_currency">₽</span></td>\
						</tr>\
					</table>',

			confirm: function()
			{
				var date = stockDialog.wrapper.find('input[name="date"]').val().split('.').reverse().join('-') + ' ' + stockDialog.wrapper.find('input[name="time"]').inputmask('unmaskedvalue');
				var data = {action: 'set_investment', type:stockDialog.wrapper.find('input:radio:checked').val(), date:date, quantity: stockDialog.wrapper.find('input[name="quantity"]').val(), price: stockDialog.wrapper.find('input[name="price"]').val(), portfolio_id: stockDialog.wrapper.find('select[name="portfolio_id"]').val(), investment_id: investment.investment_id, security_ls_key: LIVESTREET_SECURITY_KEY};
				data['symbol'] = stockDialog.wrapper.find('input[name="symbol"]').val();
				data['sec_type'] = stockDialog.wrapper.find('input[name="sec_type"]').val();

				if (stockDialog.wrapper.find('input[name="all"]').length && stockDialog.wrapper.find('input[name="all"]').is(':checked'))
				{
					data['all'] = 1;
				}

				$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
				{
					if (!result)
					{
						msgErrorBox.alert('Error', 'Please try again later');
					}

					if (result.bStateError)
					{
						msgErrorBox.alert(result.sMsgTitle, result.sMsg);

					} else
					{
						stockDialog.close();
						msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
						if (document.location.pathname.match(/^\/q\/portfolio\/?/))
						{
							setTimeout(function(e)
							{
								document.location.reload();

							}, 1000);
						}
					}
				});
			},

			onOpen: function()
			{
				var that = this;
				var face_unit = investment.face_unit;
				var face_value = parseFloat(investment.face_value);
				var currency_id = investment.currency_id;

				var updateSumm = function()
				{
					setTimeout(function()
					{
						var current_sec_type = stockDialog.wrapper.find('input[name="sec_type"]').length ? stockDialog.wrapper.find('input[name="sec_type"]').val() : investment.sec_type;
						var q = parseInt(this.wrapper.find('input[name="quantity"]').val());
						var p = parseFloat(this.wrapper.find('input[name="price"]').val().replace(',', '.'));
						var sf = '0';

						if (!(isNaN(q) || isNaN(p)))
						{
							if (current_sec_type !== 'BONDS')
							{
								var s = Math.round(q*p).toString();
							} else
							{
								var s = Math.round(q*p*face_value/100).toString();
							}


							var sf = '';
							for (var i = s.length - 1, j = 0, k = 0; i>=j; i--, k++)
							{
								if (k == 3)
								{
									k = 0;
									sf = ' ' + sf;
								}
								sf = s[i] + sf;
							}
						}
					
						this.wrapper.find('#total_sum').text(sf);

						var sCurrencyField = (current_sec_type !== 'BONDS') ? currency_id : face_unit;
						this.wrapper.find('#total_currency').text((sCurrencyField in oCurrenciesMap) ? oCurrenciesMap[sCurrencyField] : '₽');
						
					}.bind(this), 100);

				}.bind(this);
				updateSumm();

				var tr = this.wrapper.find('tr');
				var type = investment.type;
				this.wrapper.find('input:radio').on('change', function()
				{
					type = $(this).val();
				});

				var wl = this.wrapper.find('select[name="portfolio_id"]');
				if (wl.length)
				{
					wl.empty();
					if (typeof(portfolios) != 'undefined')
					{
						for (i in portfolios)
						{
							var o = $('<option value="' + i + '"></option>');
							o.text(portfolios[i]);
							wl.append(o);
						}
						wl.val(investment.portfolio_id);
					}
				}

				this.wrapper.find('#vprocentax').css('visibility', (investment.sec_type == 'BONDS') ? 'visible' : 'hidden');

				var dt = investment.date.split(' ');
				this.wrapper.find('input[name="date"]').val(dt[0].split('-').reverse().join('.')).datepicker({

					format: 'dd.mm.yyyy'

				}).on('hide', function(e)
				{
					e.preventDefault();
				});

				Inputmask.extendAliases({
					mytime: {
						placeholder: '',
						alias: 'datetime',
						inputFormat: 'HH:MM:ss'
					}
				});

				this.wrapper.find('input[name="time"]').val(dt[1]).inputmask({alias: 'mytime'});

				this.wrapper.find('input[name="all"]').prop('checked', true);
				this.wrapper.find('input[name="symbol"]').val(investment.symbol);
				this.wrapper.find('input[name="sec_type"]').val(investment.sec_type);
				this.wrapper.find('input[name="quantity"]').val(investment.quantity).on('keypress', function(e)
				{
					var digits = '1234567890';
					if (digits.indexOf(e.key) == -1) e.preventDefault();
				}).on('keyup change', updateSumm);

				this.wrapper.find('input[name="price"]').val(investment.price).on('keypress', function(e)
				{
					var digits = '1234567890,.';
					if (digits.indexOf(e.key) == -1) e.preventDefault();
					if ((e.key == ',') || (e.key == '.'))
					{
						if (($(this).val().indexOf('.') !== -1) || ($(this).val().indexOf(',') !== -1)) e.preventDefault();
					}
				}).on('keyup change', updateSumm);

				this.wrapper.find('input[name="quantity"]').val('Все').attr('disabled', true);
				this.wrapper.find('input[name="all"]').on('click', function(e)
				{
					if (this.checked)
					{
						that.wrapper.find('input[name="quantity"]').val('Все').attr('disabled', true);
					} else
					{
						that.wrapper.find('input[name="quantity"]').val(investment.quantity).removeAttr('disabled');
					}
				}).trigger('click');

				that.wrapper.find('input:radio[value="' + type + '"]').prop('checked', true);
				that.wrapper.find('input:radio[value="' + type + '"]').trigger('change');

				if (that.wrapper.find('input[name="symbol"]').length)
				{
					that.wrapper.find('input[name="symbol"]').autocomplete({
						serviceUrl: '/q/portfolio-autocomplete-ajax/',
						type: 'POST',
						dataType: 'json',
						paramName: 'value',
						params: {'json': 1},
						preventBadQueries: false,
						zIndex: 99999,
						//width: 'flex',
						beforeRender: function(container, suggestions)
						{
							$.each(suggestions, function(i,v)
							{
								var aComment = [v['symbol']];
								var sCurrencyField = 'currency_id' in v ? v['currency_id'] : null;
								if (sCurrencyField != null) aComment.push ((sCurrencyField in oCurrenciesMap) ? oCurrenciesMap[sCurrencyField] : '₽');
								if (aComment.length) container.find('.autocomplete-suggestion[data-index="' + i + '"]').append('(' + aComment.join(', ') + ')');
							});
						},
						transformResult: function(response)
						{
							return { suggestions: response };
						},
						onSelect: function (suggestion)
						{
							face_unit = suggestion.face_unit;
							face_value = parseFloat(suggestion.face_value);
							currency_id = suggestion.currency_id;

							that.wrapper.find('input[name="symbol"]').val(suggestion.symbol);
							that.wrapper.find('input[name="sec_type"]').val(suggestion.sec_type);
							that.wrapper.find('input[name="price"]').val(suggestion.last);
							that.wrapper.find('#vprocentax').css('visibility', (suggestion.sec_type == 'BONDS') ? 'visible' : 'hidden');

							updateSumm();
						}
					});
				}
			},
			onClose: function()
			{
				if (this.wrapper.find('input[name="all"]').length) this.wrapper.find('input[name="all"]').off('click');

				this.wrapper.find('input[name="price"]').off('keypress keyup change');
				this.wrapper.find('input[name="quantity"]').off('keypress keyup change');
				this.wrapper.find('input:radio').off('change');

			}, onCloseComplete: function()
			{
				this.destroy();
			}
		});

		stockDialog.open();
	}

	function getInvestmentInfo(investment_id)
	{
		var d = $.Deferred();

		var investmeniInfo = null;
		var list = null;
		var futures = null;

		var data = {action: 'get_investment', investment_id: investment_id, portfolio_id: list_id, security_ls_key: LIVESTREET_SECURITY_KEY};
		var xhr = $.ajax({type: 'POST', url: aRouter['q'] + 'portfolio-ajax/?r=' + Math.random(), data: data});
		xhr.then(function(result)
		{
			if (!result)
			{
				d.reject('Error', 'Please try again later');
				return;

			} else if (result.bStateError)
			{
				d.reject(result.sMsgTitle, result.sMsg);

			} else
			{
				investmeniInfo = result.investment;
			}

		}).then(function()
		{
			$.ajax({type:'POST', url: aRouter['q'] + 'portfolio-ajax/?r=' + Math.random(), data: {action: 'get_lists', security_ls_key: LIVESTREET_SECURITY_KEY}}).then(function(result)
			{
				if (!result)
				{
					d.reject('Error', 'Please try again later');
					return;
				
				} else if (result.bStateError)
				{
					d.reject(result.sMsgTitle, result.sMsg);

				} else
				{
					list = result.list;
					futures = ('with_futures' in result) ? result.with_futures : [];
				}
			}).then(function()
			{
				if (investmeniInfo !== null)
				{
					if (list !== null)
					{
						d.resolve(investmeniInfo, list, futures);
					} else
					{
						d.reject('Ошибка', 'Нет ни одного доступного портфеля');
					}

				} else
				{
					d.reject('Ошибка', 'Нет информации об операции');
				}
			});
		});

		return d;
	}

	function chooseInvestmentDialogOpen(sec_title, symbol, stocks)
	{
		var d = $.Deferred();

		var chooseDialog = new jBox('Confirm', 
		{
			id: 'chooseSharesDialog',
			title: 'Редактирование для ' + sec_title + ' (' + symbol + ')',
			confirmButton: 'ОК',
			closeOnConfirm: false,
			cancelButton: 'Отмена',
			content:'<span>Выберите одну из операций:</span>\
					<table class="simple-little-table trades-table" cellspacing="0" style="width: 100%">\
						<tr>\
							<th>Дата</th>\
							<th>Кол-во</th>\
							<th>Цена</th>\
						</tr>\
					</table>',

			confirm: function()
			{
				if (chooseDialog.wrapper.find('table tr.selected').length)
				{
					var investmentId = chooseDialog.wrapper.find('table tr.selected').attr('investment-id');
					chooseDialog.close();
					d.resolve(investmentId);
				} else
				{
					d.reject('Ошибка', 'Выберите один из вариантов');
				}
			},

			onOpen: function()
			{
				var that = this;

				var table = this.wrapper.find('table');
				table.on('click', 'tr', function(e)
				{
					table.find('tr').removeClass('selected');
					$(this).addClass('selected');
				});

				$.each(stocks, function(i, v)
				{
					var tr = $('<tr/>');
					tr.attr('investment-id', v.investment_id)
					$('<td/>').text(v.date).appendTo(tr);
					$('<td/>').text(v.quantity).appendTo(tr);
					$('<td/>').text(v.price).appendTo(tr);
					table.append(tr);
				});
			},
			onClose: function()
			{
				this.wrapper.find('table').off('click');
				if (d.state() == 'pending') d.reject('Ошибка', 'Не выбран вариант');

			}, onCloseComplete: function()
			{
				this.destroy();
			}
		});
		chooseDialog.open();

		return d;
	}

	function getInvestmentId()
	{
		var d = $.Deferred();

		if (typeof(investment_id) == 'undefined')
		{
			$.ajax({

				type: 'POST',
				url: aRouter['q'] + 'portfolio-ajax/?r=' + Math.random(),
				data: {action: 'get_stocks', portfolio_id: list_id, symbol: symbol, security_ls_key: LIVESTREET_SECURITY_KEY}

			}).then(function(result)
			{
				if (!result)
				{
					d.reject('Error', 'Please try again later');
					return;
				}

				if (result.bStateError)
				{
					d.reject(result.sMsgTitle, result.sMsg);
				} else
				{
					if (result.stocks.length == 1)
					{
						d.resolve(result.stocks[0].investment_id);

					} else
					{
						chooseInvestmentDialogOpen(result.info.short_name, result.info.symbol, result.stocks).then(function(investment_id)
						{
							d.resolve(investment_id);

						}, function(sMsgTitle, sMsg)
						{
							d.reject(sMsgTitle, sMsg);
						});
					}
				}
			});

		} else
		{
			d.resolve(investment_id);
		}
		return d;
	}

	getInvestmentId().then(function(iInvestmentId)
	{
		getInvestmentInfo(iInvestmentId).then(function(info, lists, with_futures)
		{
			if (info['sec_type'] == 'MONEY')
			{
				editMoneyDialogOpen(info, lists, with_futures);
			} else
			{
				editInvestmentDialogOpen(info, lists);
			}

		}, function(sMsgTitle, sMsg)
		{
			msgErrorBox.alert(sMsgTitle, sMsg);
		});
		
	}, function(sMsgTitle, sMsg)
	{
		msgErrorBox.alert(sMsgTitle, sMsg);
	});
}

function RemovePortfolioDividendEvent(action, symbol, list_id, dividend_id)
{
	var removeDialog = new jBox('Confirm', 
	{
		id: 'clearDialog',
		title: 'Внимание!',
		confirmButton: 'ОК',
		cancelButton: 'Отмена',
		content: 'Удалить дивиденд ' + symbol + '?',
		confirm: function()
		{
			var data = {action: action, portfolio_dividend_id: dividend_id, security_ls_key: LIVESTREET_SECURITY_KEY}

			$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
			{
				if (!result)
				{
					msgErrorBox.alert('Error', 'Please try again later');
				}

				if (result.bStateError)
				{
					msgErrorBox.alert(result.sMsgTitle, result.sMsg);
				} else
				{
					msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
					var m = document.location.pathname.match(/^\/q\/portfolio\/([^\/]+)\//);
					if (m != null)
					{
						if (action != 'delete_list')
						{
							setTimeout(function(e)
							{
								document.location.reload();

							}, 1000);
						} else
						{
							document.location.href = '/q/portfolio/' + m[1] + '/';
						}
					}
				}
			});


		}, onCloseComplete: function()
		{
			this.destroy();
		}
	});
	removeDialog.open();
}

function AddPortfolioDividendEvent(action, symbol, list_id)
{
	function dialogOpen(portfolios, info)
	{
		var dialogTitle = (action == 'div_add') ? 'Добавить дивиденд' : 'Редактировать дивиденд';
		var stockDialog = new jBox('Confirm', 
		{
			id: 'addDividendDialog',
			title: dialogTitle,
			confirmButton: 'ОК',
			closeOnConfirm: false,
			cancelButton: 'Отмена',
			minWidth: '700px',
			maxWidth: '100%',
			content:'<table class="empty">\
						<tr>\
							<td style="width: 150px"><label>Список бумаг:</label></td>\
							<td><select name="portfolio_id"></select></td>\
						</tr>\
						<tr>\
							<td><label>Компания:</label></td>\
							<td>\
								<input type="text" name="symbol" />\
							</td>\
						</tr>\
						<tr>\
							<td colspan="2">\
								<div id="portfolio_div_table_wrapper"></div>\
							</td>\
						</tr>\
						<tr>\
							<td><label>Количество акций:</label></td>\
							<td><input type="text" name="quantity" autocomplete="off" /></td>\
						</tr>\
						<tr>\
							<td><label>Дата получения:</label></td>\
							<td><input type="text" name="receiving_date" autocomplete="off" /></td>\
						</tr>\
					</table>\
					',

			confirm: function()
			{

				var receiving_date = stockDialog.wrapper.find('input[name="receiving_date"]').val();
				var quantity = stockDialog.wrapper.find('input[name="quantity"]').inputmask('unmaskedvalue');

				var data = {
					action: action,
					portfolio_id: stockDialog.wrapper.find('select[name="portfolio_id"]').val(),
					security_ls_key: LIVESTREET_SECURITY_KEY,
					quantity : quantity,
					receiving_date: receiving_date
				};

				var tr = stockDialog.wrapper.find('#portfolio_div_table_wrapper').find('tr.selected');
				if (!tr.length) return msgErrorBox.alert('Ошибка!', 'Необходимо выбрать дивиденд, указать ваше количество акций и дату получения.');

				var dividend_id = tr.attr('dividend_id');
				if (dividend_id)
				{
					data['dividend_id'] = dividend_id;
					if (!(quantity && receiving_date)) return msgErrorBox.alert('Ошибка!', 'Необходимо указать ваше количество акций и дату получения.');
				} else
				{
					var symbol = tr.find('[name="symbol"]').text();
					var cut_off_date = tr.find('input[name="cut_off_date"]').val();
					var year = tr.find('input[name="year"]').val();
					var quarter = tr.find('select[name="quarter"]').val();
					var dividend = tr.find('input[name="dividend"]').inputmask('unmaskedvalue');

					if (!(symbol && cut_off_date && year && quarter && dividend && quantity && receiving_date)) return msgErrorBox.alert('Ошибка!', 'Необходимо указать дивиденд, дату отсечки, период начисления, а так же указать ваше количество акций и дату получения.');
					data['symbol'] = symbol;
					data['cut_off_date'] = cut_off_date;
					data['year'] = year;
					data['quarter'] = quarter;
					data['dividend'] = dividend;
				}

				$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
				{
					if (!result)
					{
						msgErrorBox.alert('Error', 'Please try again later');
					}

					if (result.bStateError)
					{
						msgErrorBox.alert(result.sMsgTitle, result.sMsg);

					} else
					{
						stockDialog.close();
						msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
						if (document.location.pathname.match(/^\/q\/portfolio\/?/))
						{
							setTimeout(function(e)
							{
								document.location.reload();

							}, 1000);
						}
					}
				});
			},

			onOpen: function()
			{
				var that = this;
				
				var wl = this.wrapper.find('select[name="portfolio_id"]');
				if (wl.length)
				{
					wl.empty();
					if (typeof(portfolios) != 'undefined')
					{
						for (i in portfolios)
						{
							var o = $('<option value="' + i + '"></option>');
							o.text(portfolios[i]);
							wl.append(o);
						}
						if (typeof(list_id) != 'undefined') wl.val(list_id);
					}
				}

				if (typeof(symbol) !== 'undefined') this.wrapper.find('select[name="symbol"]').val(symbol);

				Inputmask.extendAliases({
				quantity: {
					alias: 'numeric',
					placeholder: '0',
					prefix: '',
					groupSeparator: ' ',
					autoGroup: true,
					digits: 0,
					digitsOptional: false,
					clearMaskOnLostFocus: false
				},
				money:{

					alias: 'numeric', 
					placeholder: '0',
					groupSeparator: ' ',
					autoGroup: true,
					allowMinus: false
				}});

				this.wrapper.find('input[name="quantity"]').inputmask({alias : 'quantity'}).attr('disabled', true);
				this.wrapper.find('input[name="receiving_date"]').datepicker().attr('disabled', true);
				this.wrapper.on('hide', 'input[name="cut_off_date"], input[name="receiving_date"], input[name="year"]', function(e)
				{
				 	e.preventDefault();
				
				});


				function loadDividendsCurrency(symbol)
				{
					var d = $.Deferred();
					$.ajax({
						
						type: 'POST',
						url: aRouter['q'] + 'portfolio-autocomplete-ajax/',
						data: {json: '1', value: symbol, portfolio_id: wl.val(), shares_quantity: 1, security_ls_key: LIVESTREET_SECURITY_KEY}

					}).then(function(result)
					{
						var aSymbol = result.filter(function(el,i,a)
						{
							return ((symbol == el.symbol) && (el.sec_type == 'SHARES'));
						});

						if (aSymbol.length)
						{
							d.resolve(aSymbol[0]);
						} else
						{
							d.reject('Внимание!', 'Акция не найдена');
						}

					}, function()
					{
						d.reject('Внимание!', 'Неизвестная ошибка');
					});
					return d;					
				}

				function loadDividendsTable(symbol)
				{
					var d = $.Deferred();
					$.ajax({
						
						type: 'POST',
						url: aRouter['q'] + 'portfolio-ajax/',
						data: {action: 'div_list', symbol: symbol, security_ls_key: LIVESTREET_SECURITY_KEY}

					}).then(function(result)
					{
						if (result.bStateError)
						{
							d.reject(result.sMsgTitle, result.sMsg);
						} else
						{
							d.resolve(result.sMsgTitle, result.sMsg, result.dividends);
						}

					}, function()
					{
						d.reject('Внимание!', 'Неизвестная ошибка');
					});
					return d;
				}

				var nTableConiainer = this.wrapper.find('#portfolio_div_table_wrapper');

				function fillDividendsTable(sSymbol, oSymbolInfo, aData)
				{
					var nContainer = nTableConiainer.empty();
					var sDividendCurrency = (oSymbolInfo.currency_id in oCurrenciesMap) ? oCurrenciesMap[oSymbolInfo.currency_id] : 'руб';
					var nTable = $('<table class="simple-little-table financials dividends sort-table data-loaded" cellspacing="0" />');
					var oFieldsMap = {
						
						'symbol' : 'Тикер',
						't2_date' : 'Дата T-2',
						'cut_off_date' : 'Дата отсечки',
						'year' : 'Год',
						'quarter' : 'Период',
						'dividend' : 'Дивиденд, ' + sDividendCurrency,
						'price' : 'Цена акции'
					};

					var aExcludeSortSymbolFor = ['t2_date', 'cut_off_date', 'price'];
					var aFieldsSequence = ['symbol', 't2_date', 'cut_off_date', 'year', 'quarter', 'dividend', 'price'];
					var aInputFieldsAvailable = ['symbol', 'cut_off_date', 'year', 'quarter', 'dividend'];
					var nHeader = $('<tr/>');

					$.each(aFieldsSequence, function(i,v)
					{
						if (v in oFieldsMap)
						{
							var nTh = $('<th/>');
							nTh.html(oFieldsMap[v])
							if (aExcludeSortSymbolFor.indexOf(v) !== -1) nTh.attr('exclude', 'П');
							if (v == 'cut_off_date') nTh.addClass('active desc');
							nHeader.append(nTh);
						}
					});

					nTable.append(nHeader);
					
					$.each(aData, function(i,aRow)
					{
						var nTr = $('<tr />');
						nTr.attr('dividend_id', aRow['dividend_id']);

						$.each(aFieldsSequence, function(ii, v)
						{
							if (v in aRow)
							{
								$('<td/>').text(aRow[v]).appendTo(nTr);
							}
						});
						nTable.append(nTr);
					});

					var nTr = $('<tr />');
					$.each(aFieldsSequence, function(ii, v)
					{
						var input = null;
						switch (v)
						{
							case 'symbol':
							{
								// span
								input = $('<span/>').attr('name', v).text(sSymbol);
								break;
							}

							case 'quarter':
							{
								// select
								var oQuarter = {'Y': 'Год', 'N': 'Н/расп. прибыль', '1': '1 квартал', '2': '2 квартал', '3': '3 квартал', '4': '4 квартал'};
								input = $('<select/>').attr({'name': v});

								$.each(oQuarter, function(i,v)
								{
									$('<option/>').attr('value', i).text(v).appendTo(input);
								});
								break;
							}

							case 'dividend':
							{
								input = $('<input/>').attr({'type':'text', 'name': v, 'autocomplete' : 'off'});
								input.inputmask({alias : 'money'});
								break;
							}

							case 'cut_off_date':
							{
								input = $('<input/>').attr({'type':'text', 'name': v, 'autocomplete' : 'off'});
								input.datepicker();
								break;
							}

							case 'year':
							{
								input = $('<input/>').attr({'type':'text', 'name': v, 'autocomplete' : 'off'});
								input.datepicker({format: "yyyy", startView: 'years', minViewMode: 'years', maxViewMode: 'years', autoclose: true});
								break;
							}

							default:
							{
								if (aInputFieldsAvailable.indexOf(v) !== -1) input = $('<input/>').attr({'type':'text', 'name': v, 'autocomplete' : 'off'});
								break;
							}
						}
						$('<td/>').append(input).appendTo(nTr);
					});
					nTable.append(nTr);
					nContainer.append(nTable);
				}

				var acv = null;
				var ac = this.wrapper.find('input[name="symbol"]');
				ac.autocomplete({
					serviceUrl: '/forum/ajaxsearchtickers/',
					type: 'POST',
					dataType: 'json',
					paramName: 'value',
					preventBadQueries: false,
					zIndex: 99999,
					
					beforeRender: function(container, suggestions)
					{
						$.each(suggestions, function(i,v)
						{
							var aComment = [v['symbol']];
							var sCurrencyField = 'currency_id' in v ? v['currency_id'] : null;
							if (sCurrencyField != null) aComment.push ((sCurrencyField in oCurrenciesMap) ? oCurrenciesMap[sCurrencyField] : '₽');
							if (aComment.length) container.find('.autocomplete-suggestion[data-index="' + i + '"]').append('(' + aComment.join(', ') + ')');
						});
					},

					transformResult: function(response)
					{
						return { suggestions: response['results'] };
					},

					onSelect: function (suggestion)
					{
						ac.trigger('change');
					}

				}).on('change', function(e)
				{
					var nAc = $(this).autocomplete();
					var sVal = nAc.currentValue.toLowerCase();
					var sSymbol = null;

					if (acv !== sVal)
					{
						ac.blur();
						acv = sVal;
					}

					if (nAc.selection == null)
					{
						if (nAc.suggestions.length)
						{
							$.each(nAc.suggestions, function(i,v)
							{
								if ((v.value.toLowerCase() == sVal) || (v.symbol.toLowerCase() == sVal) || (v.ticker.toLowerCase() == sVal))
								{
									sSymbol = v.symbol;
									return false;
								}
							});
						}
					} else
					{
						sSymbol = nAc.selection.symbol;
					}

					loadDividendsTable(sSymbol).then(function(sMsgTitle, $sMsg, aData)
					{
						if (aData)
						{
							var sCurrencySymbol = sSymbol;
							if (aData.length) sCurrencySymbol = aData[0].symbol; // первый символ из таблицы дивидендов
							
							loadDividendsCurrency(sCurrencySymbol).then(function(oSymbolInfo)
							{
								fillDividendsTable(sSymbol, oSymbolInfo, aData);
								that.wrapper.find('input[name="quantity"]').val(oSymbolInfo['quantity']).attr('disabled', true);
								that.content.find(' > table').removeClass('empty');
								that.position();								

							}, function(sMsgTitle, $sMsg)
							{
								// информация о символе не найдена - не торгуется
								that.content.find(' > table').addClass('empty');
								that.position();
							});
						} else
						{
							that.content.find(' > table').addClass('empty');
						}
						that.position();

					}, function(sMsgTitle, $sMsg)
					{
						msgErrorBox.alert(result.sMsgTitle, result.sMsg);
						fillDividendsTable(sSymbol, []);
						that.wrapper.find('input[name="quantity"]').val(0).attr('disabled', true);
						that.wrapper.find('input[name="receiving_date"]').attr('disabled', true);
						
						that.content.find(' > table').addClass('empty');
						that.position();
					});
				});


				nTableConiainer.on('click', 'tr', function(e)
				{
					if ($(this).is(':first')) return;

					nTableConiainer.find('tr').removeClass('selected');
					$(this).addClass('selected');

					that.wrapper.find('input[name="quantity"]').removeAttr('disabled');
					that.wrapper.find('input[name="receiving_date"]').removeAttr('disabled');

					if ($(this).attr('dividend_id')) that.wrapper.find('input[name="quantity"]').focus();
				});

				that.content.find(' > table').addClass('empty');
				that.position();
			},
			onClose: function()
			{
				this.wrapper.find('select[name="symbol"]').off('change').autocomplete('dispose');
				this.wrapper.find('#portfolio_div_table_wrapper').off('click');
				this.wrapper.off('hide');
				this.wrapper.find('input[name="quantity"]').inputmask('remove');

			}, onCloseComplete: function()
			{
				this.destroy();
			}
		});

		stockDialog.open();
	}

	function loadLists()
	{
		var d = $.Deferred();

		$.ajax({

			url: aRouter['q'] + 'portfolio-ajax/',
			type: 'POST',
			data: { action: 'get_lists', security_ls_key: LIVESTREET_SECURITY_KEY }

		}).then(function(result)
		{
			if (!result)
			{
				d.reject('Error', 'Please try again later');
				return;
			}

			if (result.bStateError)
			{
				if (('errorCode' in result) && (result.errorCode == 1))
				{
					d.resolve([]);
				} else
				{

					d.reject(result.sMsgTitle, result.sMsg);
				}

			} else
			{
				d.resolve(result.list);
			}
		});

		return d;
	}

	loadLists().then(function(lists)
	{
		if (!$.isEmptyObject(lists))
		{
			dialogOpen(lists);

		} else
		{
			AddPortfolioEvent('Создание нового портфеля', 'add_list').then(function(sMsgTitle, sMsg, list_id, list_title)
			{
				msgNoticeBox.alert(sMsgTitle, sMsg);
				AddPortfolioMoneyEvent(action, symbol, list_id);

			}, function(sMsgTitle, sMsg)
			{
				msgErrorBox.alert(sMsgTitle, sMsg);
			});
		}

	}, function(sMsgTitle, sMsg)
	{
		msgErrorBox.alert(sMsgTitle, sMsg);
	});
}


function AddPortfolioMoneyEvent(action, symbol, list_id)
{
	function dialogOpen(portfolios, with_futures_ids)
	{
		var dialogTitle = (action == 'add') ? 'Добавить деньги' : 'Убрать деньги';
		var stockDialog = new jBox('Confirm', 
		{
			id: 'buySharesDialog',
			title: dialogTitle,
			confirmButton: 'ОК',
			closeOnConfirm: false,
			cancelButton: 'Отмена',
			content:'<table>\
						<tr>\
							<td><label>Список бумаг:</label></td>\
							<td><select name="portfolio_id"></select></td>\
						</tr>\
						<tr>\
							<td><label>Тип денег:</label></td>\
							<td>\
								<select name="symbol">\
									<option value="RUB">Рубли (₽)</option>\
									<option value="USD">Доллары США ($)</option>\
									<option value="EUR">Евро (€)</option>\
									<option value="CNY">Юани (¥)</option>\
								</select>\
							</td>\
						</tr>\
						<tr>\
							<td><label>Количество денег:</label></td>\
							<td><input type="text" name="quantity" autocomplete="off" /></td>\
						</tr>\
						<tr>\
							<td>&nbsp;</td>\
							<td><label><input type="checkbox" name="all" />убрать все</label></td>\
						</tr>\
					</table>\
					<div class="money_add_futures">\
						ВНИМАНИЕ! У вас открыты позиции на срочном рынке!<br/>\
						Сумму денег на брокерском счете необходимо указывать по состоянию до открытия позиций на срочном рынке.<br/>\
						Брокер, как правило, динамически пересчитывает сумму на вашем счете с учетом постоянно меняющейся вар.маржи.<br/>\
						У брокера вы не можете редактировать количество денег в любой момент времени, поэтому для избежания коллизий, мы просим учитывать этот момент.\
					</div>\
					',

			confirm: function()
			{
				var data = {action: action, sec_type: 'MONEY', quantity: stockDialog.wrapper.find('input[name="quantity"]').val(), price: stockDialog.wrapper.find('input[name="price"]').val(), portfolio_id: stockDialog.wrapper.find('select[name="portfolio_id"]').val(), security_ls_key: LIVESTREET_SECURITY_KEY};
				data['symbol'] = stockDialog.wrapper.find('select[name="symbol"]').length ? stockDialog.wrapper.find('select[name="symbol"]').val() : symbol;

				if (stockDialog.wrapper.find('input[name="all"]').length && stockDialog.wrapper.find('input[name="all"]').is(':checked'))
				{
					data['all'] = 1;
				}

				$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
				{
					if (!result)
					{
						msgErrorBox.alert('Error', 'Please try again later');
					}

					if (result.bStateError)
					{
						msgErrorBox.alert(result.sMsgTitle, result.sMsg);

					} else
					{
						stockDialog.close();
						msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
						if (document.location.pathname.match(/^\/q\/portfolio\/?/))
						{
							setTimeout(function(e)
							{
								document.location.reload();

							}, 1000);
						}
					}
				});
			},

			onOpen: function()
			{
				var that = this;
	
				if (typeof(list_id) == 'undefined') this.wrapper.find('input[name="all"]').parents('tr').hide();
				if (action == 'add') this.wrapper.find('input[name="all"]').parents('tr').hide();
				
				var wl = this.wrapper.find('select[name="portfolio_id"]');
				if (wl.length)
				{
					wl.empty();
					if (typeof(portfolios) != 'undefined')
					{
						for (i in portfolios)
						{
							var o = $('<option value="' + i + '"></option>');
							o.text(portfolios[i]);
							wl.append(o);
						}
						if (typeof(list_id) != 'undefined') wl.val(list_id);
					}

					wl.on('change', function()
					{
						if (typeof(with_futures_ids) != 'undefined')
						{
							var warning = that.wrapper.find('.money_add_futures');
							if (with_futures_ids.indexOf( parseInt(wl.val()) ) != -1)
							{
								warning.show();
							} else
							{
								warning.hide();
							}
						}

					}).trigger('change');
				}

				if (typeof(symbol) !== 'undefined') this.wrapper.find('select[name="symbol"]').val(symbol);

				this.wrapper.find('input[name="quantity"]').val(0).on('keypress', function(e)
				{
					var digits = '1234567890-';
					if (digits.indexOf(e.key) == -1) e.preventDefault();
				});

				this.wrapper.find('input[name="all"]').prop('checked', true).on('click', function(e)
				{
					if (this.checked)
					{
						that.wrapper.find('input[name="quantity"]').val('Все').attr('disabled', true);
					} else
					{
						that.wrapper.find('input[name="quantity"]').val('0').removeAttr('disabled');
					}
				}).trigger('click');

			},
			onClose: function()
			{
				if (this.wrapper.find('select[name="portfolio_id"]')) this.wrapper.find('select[name="portfolio_id"]').off('change');
				if (this.wrapper.find('input[name="all"]').length) this.wrapper.find('input[name="all"]').off('click');
				this.wrapper.find('select[name="symbol"]').off('change');

			}, onCloseComplete: function()
			{
				this.destroy();
			}
		});

		stockDialog.open();
	}

	function loadLists()
	{
		var d = $.Deferred();

		$.ajax({

			url: aRouter['q'] + 'portfolio-ajax/',
			type: 'POST',
			data: { action: 'get_lists', security_ls_key: LIVESTREET_SECURITY_KEY }

		}).then(function(result)
		{
			if (!result)
			{
				d.reject('Error', 'Please try again later');
				return;
			}

			if (result.bStateError)
			{
				if (('errorCode' in result) && (result.errorCode == 1))
				{
					d.resolve([]);
				} else
				{

					d.reject(result.sMsgTitle, result.sMsg);
				}

			} else
			{
				d.resolve(result.list, ('with_futures' in result) ? result.with_futures : []);
			}
		});

		return d;
	}

	loadLists().then(function(lists, with_futures)
	{
		if (!$.isEmptyObject(lists))
		{
			dialogOpen(lists, with_futures);

		} else
		{
			AddPortfolioEvent('Создание нового портфеля', 'add_list').then(function(sMsgTitle, sMsg, list_id, list_title)
			{
				msgNoticeBox.alert(sMsgTitle, sMsg);
				AddPortfolioMoneyEvent(action, symbol, list_id);

			}, function(sMsgTitle, sMsg)
			{
				msgErrorBox.alert(sMsgTitle, sMsg);
			});
		}

	}, function(sMsgTitle, sMsg)
	{
		msgErrorBox.alert(sMsgTitle, sMsg);
	});
}

function AddPortfolioStockEvent(action, symbol, sec_price, list_id)
{
	function dialogOpen(portfolios, info)
	{
		var dialogTitle = (typeof(info) !== 'undefined') ? 'Позиция по ' + info['short_name'] + ' (' + info['symbol'] + ')' : 'Добавить позицию';

		var face_unit = null;
		var face_value = null;
		var currency_id = null;
		var stockDialog = new jBox('Confirm', 
		{
			id: 'buySharesDialog',
			title: dialogTitle,
			confirmButton: 'ОК',
			closeOnConfirm: false,
			cancelButton: 'Отмена',
			content:'<div class="poza">\
						<input type="radio" name="poza" value="buy" id="poza_buy" />\
						<label for="poza_buy" title="Купить актив (открыть длинную позицию - long)">КУПИТЬ</label>\
						<input type="radio" name="poza" value="sell" id="poza_sell" />\
						<label for="poza_sell" title="Продать актив (открыть короткую позицию - short)">ПРОДАТЬ</label>\
					</div>\
					<table>\
						<tr>\
							<td><label>Список бумаг:</label></td>\
							<td><select name="portfolio_id"></select></td>\
						</tr>\
						<tr>\
							<td><label>Тикер/Название:</label></td>\
							<td>\
								<input type="text" name="symbol" />\
								<input type="hidden" name="sec_type" />\
							</td>\
						</tr>\
						<tr>\
							<td><label>Количество бумаг:</label></td>\
							<td><input type="text" name="quantity" /></td>\
						</tr>\
						<tr>\
							<td>&nbsp;</td>\
							<td><label><input type="checkbox" name="all" />закрыть позу целиком</label></td>\
						</tr>\
						<tr>\
							<td><label>Цена бумаги:</label></td>\
							<td><input type="text" name="price" /><span id="vprocentax">в % от номинала</span></td>\
						</tr>\
						<tr>\
							<td>Сумма:</td>\
							<td><span id="total_sum">0</span><span id="total_currency">₽</span></td>\
						</tr>\
					</table>\
					<div class="futures_add_warning">\
						ВНИМАНИЕ! Проверьте, чтобы количество денег на вашем счете соответствовало значению, которое было ДО открытия позиции на срочном рынке. В противном случае, общая сумма портфеля будет рассчитываться некорректно.\
					</div>\
					',

			confirm: function()
			{
				var data = {action:action, quantity: stockDialog.wrapper.find('input[name="quantity"]').val(), price: stockDialog.wrapper.find('input[name="price"]').val(), portfolio_id: stockDialog.wrapper.find('select[name="portfolio_id"]').val(), security_ls_key: LIVESTREET_SECURITY_KEY};
				data['symbol'] = stockDialog.wrapper.find('input[name="symbol"]').length ? stockDialog.wrapper.find('input[name="symbol"]').val() : symbol;
				data['sec_type'] = stockDialog.wrapper.find('input[name="sec_type"]').length ? stockDialog.wrapper.find('input[name="sec_type"]').val() : info.sec_type;

				if (stockDialog.wrapper.find('input[name="all"]').length && stockDialog.wrapper.find('input[name="all"]').is(':checked'))
				{
					data['all'] = 1;
				}

				$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
				{
					if (!result)
					{
						msgErrorBox.alert('Error', 'Please try again later');
					}

					if (result.bStateError)
					{
						msgErrorBox.alert(result.sMsgTitle, result.sMsg);

					} else
					{
						stockDialog.close();
						msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
						if (document.location.pathname.match(/^\/q\/portfolio\/?/))
						{
							setTimeout(function(e)
							{
								document.location.reload();

							}, 1000);
						}
					}
				});
			},

			onOpen: function()
			{
				var that = this;

				var updateSumm = function()
				{
					setTimeout(function()
					{
						var current_sec_type = stockDialog.wrapper.find('input[name="sec_type"]').length ? stockDialog.wrapper.find('input[name="sec_type"]').val() : info.sec_type;
						var q = parseInt(this.wrapper.find('input[name="quantity"]').val());
						var p = parseFloat(this.wrapper.find('input[name="price"]').val().replace(',', '.'));
						var sf = '0';

						if (!(isNaN(q) || isNaN(p)))
						{
							if (current_sec_type !== 'BONDS')
							{
								var s = Math.round(q*p).toString();
							} else
							{
								var s = Math.round(q*p*face_value/100).toString();
							}


							var sf = '';
							for (var i = s.length - 1, j = 0, k = 0; i>=j; i--, k++)
							{
								if (k == 3)
								{
									k = 0;
									sf = ' ' + sf;
								}
								sf = s[i] + sf;
							}
						}
					
						this.wrapper.find('#total_sum').text(sf);

						var sCurrencyField = (current_sec_type !== 'BONDS') ? currency_id : face_unit;
						this.wrapper.find('#total_currency').text((sCurrencyField in oCurrenciesMap) ? oCurrenciesMap[sCurrencyField] : '₽');

					}.bind(this), 100);

				}.bind(this);

				if (typeof(info) !== 'undefined')
				{
					face_unit = info.face_unit;
					face_value = parseFloat(info.face_value);
					currency_id = info.currency_id;
					updateSumm();
				}
	
				var tr = this.wrapper.find('tr');
				if (tr.length && (typeof(symbol) != 'undefined') && symbol.length)
				{
					$(tr.get(1)).remove();
					if ((typeof(info) != 'undefined') && (info.sec_type != 'BONDS'))
					{
						this.wrapper.find('#vprocentax').remove();
					} else
					{
						this.wrapper.find('#vprocentax').css('visibility', (info.sec_type == 'BONDS') ? 'visible' : 'hidden');
					}

					if (info.sec_type == 'FUTURES')
					{
						this.wrapper.find('.futures_add_warning').show();
					} else
					{
						this.wrapper.find('.futures_add_warning').hide();
					}

				}
				if (typeof(list_id) == 'undefined') this.wrapper.find('input[name="all"]').parents('tr').hide();
				if ((typeof(list_id) != 'undefined') && (typeof(symbol) == 'undefined')) this.wrapper.find('input[name="all"]').parents('tr').hide();
				
				this.wrapper.find('input:radio').on('change', function()
				{
					action = $(this).val();
				});

				var wl = this.wrapper.find('select[name="portfolio_id"]');
				if (wl.length)
				{
					wl.empty();
					if (typeof(portfolios) != 'undefined')
					{
						for (i in portfolios)
						{
							var o = $('<option value="' + i + '"></option>');
							o.text(portfolios[i]);
							wl.append(o);
						}
						if (typeof(list_id) != 'undefined') wl.val(list_id);
					}
				}

				this.wrapper.find('input[name="all"]').prop('checked', true);
				this.wrapper.find('input[name="symbol"]').val('');
				this.wrapper.find('input[name="quantity"]').val(0).on('keypress', function(e)
				{
					var digits = '1234567890';
					if (digits.indexOf(e.key) == -1) e.preventDefault();
				}).on('keyup change', updateSumm);

				this.wrapper.find('input[name="price"]').val(sec_price).on('keypress', function(e)
				{
					var digits = '1234567890,.';
					if (digits.indexOf(e.key) == -1) e.preventDefault();
					if ((e.key == ',') || (e.key == '.'))
					{
						if (($(this).val().indexOf('.') !== -1) || ($(this).val().indexOf(',') !== -1)) e.preventDefault();
					}
				}).on('keyup change', updateSumm);

				this.wrapper.find('input[name="quantity"]').val('Все').attr('disabled', true);
				this.wrapper.find('input[name="all"]').on('click', function(e)
				{
					if (this.checked)
					{
						that.wrapper.find('input[name="quantity"]').val('Все').attr('disabled', true);
					} else
					{
						that.wrapper.find('input[name="quantity"]').val('0').removeAttr('disabled');
					}
				}).trigger('click');

				that.wrapper.find('input:radio[value="' + action + '"]').prop('checked', true);
				that.wrapper.find('input:radio[value="' + action + '"]').trigger('change');

				if (that.wrapper.find('input[name="symbol"]').length)
				{
					that.wrapper.find('input[name="symbol"]').autocomplete({
						serviceUrl: '/q/portfolio-autocomplete-ajax/',
						type: 'POST',
						dataType: 'json',
						paramName: 'value',
						params: {'json': 1},
						preventBadQueries: false,
						zIndex: 99999,
						width: 'flex',
						beforeRender: function(container, suggestions)
						{
							$.each(suggestions, function(i,v)
							{
								var aComment = [v['symbol']];
								var sCurrencyField = 'currency_id' in v ? v['currency_id'] : null;
								if (sCurrencyField != null) aComment.push ((sCurrencyField in oCurrenciesMap) ? oCurrenciesMap[sCurrencyField] : '₽');
								if (aComment.length) container.find('.autocomplete-suggestion[data-index="' + i + '"]').append('(' + aComment.join(', ') + ')');
							});
						},
						transformResult: function(response)
						{
							return { suggestions: response };
						},
						onSelect: function (suggestion)
						{
							face_unit = suggestion.face_unit;
							face_value = parseFloat(suggestion.face_value);
							currency_id = suggestion.currency_id;

							that.wrapper.find('input[name="symbol"]').val(suggestion.symbol);
							that.wrapper.find('input[name="sec_type"]').val(suggestion.sec_type);
							that.wrapper.find('input[name="price"]').val(suggestion.last);
							that.wrapper.find('#vprocentax').css('visibility', (suggestion.sec_type == 'BONDS') ? 'visible' : 'hidden');
							if (suggestion.sec_type == 'FUTURES')
							{
								that.wrapper.find('.futures_add_warning').show();
							} else
							{
								that.wrapper.find('.futures_add_warning').hide();
							}
							updateSumm();
						}
					});
				}
			},
			onClose: function()
			{
				if (this.wrapper.find('input[name="all"]').length) this.wrapper.find('input[name="all"]').off('click');

				this.wrapper.find('input[name="price"]').off('keypress keyup change');
				this.wrapper.find('input[name="quantity"]').off('keypress keyup change');
				this.wrapper.find('input:radio').off('change');

			}, onCloseComplete: function()
			{
				this.destroy();
			}
		});

		stockDialog.open();
	}

	function loadLists()
	{
		var d = $.Deferred();

		$.ajax({

			url: aRouter['q'] + 'portfolio-ajax/',
			type: 'POST',
			data: { action: 'get_lists', security_ls_key: LIVESTREET_SECURITY_KEY }

		}).then(function(result)
		{
			if (!result)
			{
				d.reject('Error', 'Please try again later');
				return;
			}

			if (result.bStateError)
			{
				if (('errorCode' in result) && (result.errorCode == 1))
				{
					d.resolve([]);
				} else
				{

					d.reject(result.sMsgTitle, result.sMsg);
				}

			} else
			{
				d.resolve(result.list);
			}
		});

		return d;
	}

	function loadInfo(symbol)
	{
		var d = $.Deferred();

		$.ajax({
			
			type: 'POST',
			url: aRouter['q'] + 'portfolio-ajax/',
			data: {action: 'info', symbol: symbol, security_ls_key: LIVESTREET_SECURITY_KEY}
		
		}).then(function(result)
		{
			if (!result)
			{
				d.reject('Error', 'Please try again later');
				return;
			}

			if (result.bStateError)
			{
				d.reject(result.sMsgTitle, result.sMsg);
			} else
			{
				d.resolve(result.info);
			}
		});
		return d;
	}

	loadLists().then(function(lists)
	{
		if (!$.isEmptyObject(lists))
		{
			if (typeof(symbol) !== 'undefined')
			{
				loadInfo(symbol).then(function(info)
				{
					dialogOpen(lists, info);

				}, function(sMsgTitle, sMsg)
				{
					(new jBox('Confirm',
					{
						content: 'Не удалось получить информацию по бумаге <strong>"' + symbol + '"</strong>. Удалить бумагу из списка?',
						confirmButton: 'Удалить',
						cancelButton: 'Отмена',
						confirm: function()
						{
							var data = {action: 'drop', portfolio_id: list_id, symbol : symbol, security_ls_key: LIVESTREET_SECURITY_KEY};
							$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
							{
								if (!result)
								{
									msgErrorBox.alert('Error', 'Please try again later');
								}

								if (result.bStateError)
								{
									msgErrorBox.alert(result.sMsgTitle, result.sMsg);
								} else
								{
									msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
									if (document.location.pathname.match(/^\/q\/portfolio\/?/))
									{
										setTimeout(function(e)
										{
											document.location.reload();

										}, 1000);
									}
								}
							});
						},
						cancel: function(){}
					 })).open();
				});
			} else
			{
				dialogOpen(lists);
			}

		} else
		{
			AddPortfolioEvent('Создание нового портфеля', 'add_list').then(function(sMsgTitle, sMsg, list_id, list_title)
			{
				msgNoticeBox.alert(sMsgTitle, sMsg);
				AddPortfolioStockEvent(action, symbol, sec_price, list_id);

			}, function(sMsgTitle, sMsg)
			{
				msgErrorBox.alert(sMsgTitle, sMsg);
			});
		}

	}, function(sMsgTitle, sMsg)
	{
		msgErrorBox.alert(sMsgTitle, sMsg);
	});
}

function btn2Report(node)
{
	var ptr = $(node).parents('tr').find('td');
	var ttr = ptr.parents('table').find('tr').first().find('th');
	var text = '';

	$.each(ttr, function(i, el)
	{
		if (i - 1 < ttr.length)
		{
			if (!($.trim($(el).text())).length) return;
			text += $.trim($(el).text()) + ': ' + $.trim($(ptr[i]).text().replace(/\r?\n/g, ' ').replace(/\s+/g, ' ')) + "\r\n";
		}
	});

	return text;
}

function ReportDividendMistake(text)
{
	var options = 
	{
		id: 'dividendMistakeDialog',
		title: 'Сообщить об обнаружении ошибки в ожидаемом дивиденде',
		confirmButton: 'Отправить',
		cancelButton: 'Отмена',
		content: '<label for="dividendText">Дивиденд:</label><br/><textarea id="dividendText" disabled="true"></textarea><br/><label for="commentText">Обоснуйте почему вы не согласны с дивидендом или его оценкой:</label><br/><textarea id="commentText"></textarea>',

		confirm: function()
		{
			var data = {url: document.location.href.toString(),text: dialog.wrapper.find('#dividendText').val(), comment: dialog.wrapper.find('#commentText').val(), security_ls_key: LIVESTREET_SECURITY_KEY};
			$.post('/abuse/bug_ajax/', data, function(result)
			{
				if (!result)
				{
					msgErrorBox.alert('Error', 'Please try again later');
				}

				if (result.bStateError)
				{
					msgErrorBox.alert(result.sMsgTitle, result.sMsg);
				} else
				{
					msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
				}
			});
		},

		onOpen: function()
		{
			this.wrapper.find('#dividendText').val(text);
		},

		onCloseComplete: function()
		{
			this.destroy();
		}
	};

	var dialog = new jBox('Confirm', options);
	dialog.open();
}

function ReportFundamentalMistake(text)
{
	var options = 
	{
		id: 'fundamentalMistakeDialog',
		title: 'Сообщить об обнаружении ошибки в в фундаментале',
		confirmButton: 'Отправить',
		cancelButton: 'Отмена',
		content: '<label for="fundamentalText">Дивиденд:</label><br/><textarea id="fundamentalText" disabled="true"></textarea><br/><label for="commentText">Обоснуйте почему вы не согласны с показателями:</label><br/><textarea id="commentText"></textarea>',

		confirm: function()
		{
			var data = {url: document.location.href.toString(),text: dialog.wrapper.find('#fundamentalText').val(), comment: dialog.wrapper.find('#commentText').val(), security_ls_key: LIVESTREET_SECURITY_KEY};
			$.post('/abuse/bug_ajax/', data, function(result)
			{
				if (!result)
				{
					msgErrorBox.alert('Error', 'Please try again later');
				}

				if (result.bStateError)
				{
					msgErrorBox.alert(result.sMsgTitle, result.sMsg);
				} else
				{
					msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
				}
			});
		},

		onOpen: function()
		{
			this.wrapper.find('#fundamentalText').val(text);
		},

		onCloseComplete: function()
		{
			this.destroy();
		}
	};

	var dialog = new jBox('Confirm', options);
	dialog.open();
}


function DividendsSortClick()
{
	var th = $(this);
	var sField = th.attr('field');
	var sDirection = 'desc';

	if (!sField) return;

	if (th.find('span').length && th.find('span').hasClass('active')) sDirection = th.find('span').hasClass('asc') ? 'desc' : 'asc';
	th.parents('td').find('th').removeClass('active asc desc');

	var data = {action: 'div_sort', field: sField, direction: sDirection, security_ls_key: LIVESTREET_SECURITY_KEY};
	$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
	{
		if (!result)
		{
			msgErrorBox.alert('Error', 'Please try again later');
		}

		if (result.bStateError)
		{
			msgErrorBox.alert(result.sMsgTitle, result.sMsg);
		} else
		{
			document.location.reload(true);
		}
	});	

}

function DividendsHideProbablyClick()
{
	var input = $(this);
	var bChecked = input.is(':checked');

	var data = {action: 'div_hide', hide: bChecked ? 1 : 0, security_ls_key: LIVESTREET_SECURITY_KEY};
	$.post(aRouter['q'] + 'portfolio-ajax/', data, function(result)
	{
		if (!result)
		{
			msgErrorBox.alert('Error', 'Please try again later');
		}

		if (result.bStateError)
		{
			msgErrorBox.alert(result.sMsgTitle, result.sMsg);
		} else
		{
			document.location.reload(true);
		}
	});	

}

jQuery(document).ready(function($)
{
	if (typeof(CURRENT_USER_ID) === 'undefined') return;

	$('body').on('click', '.portfolio-delete-link', function(e)
	{
		if ($(this).attr('list-id')) ClearPortfolioEvent('delete_list', $(this).attr('list-id'), null, 'Удалить портфель со всеми бумагами?');

	}).on('click', '.portfolio-clear-link', function(e)
	{
		if ($(this).attr('list-id'))
		{
			switch ($(this).attr('list-type'))
			{
				case 'shares':
				{
					ClearPortfolioEvent('clear_list', $(this).attr('list-id'), $(this).attr('list-type'), 'Удалить все акции, ETF и ПИФы из портфеля?');
					break;
				}

				case 'currencies':
				{
					ClearPortfolioEvent('clear_list', $(this).attr('list-id'), $(this).attr('list-type'), 'Удалить все валюты и из портфеля?');
					break;
				}

				case 'futures':
				{
					ClearPortfolioEvent('clear_list', $(this).attr('list-id'), $(this).attr('list-type'), 'Удалить все фьючерсы из портфеля?');
					break;
				}

				case 'bonds':
				{
					ClearPortfolioEvent('clear_list', $(this).attr('list-id'), $(this).attr('list-type'), 'Удалить все облигации из портфеля?');
					break;
				}

				case 'dividends':
				{
					ClearPortfolioEvent('clear_list', $(this).attr('list-id'), $(this).attr('list-type'), 'Удалить все дивиденды из портфеля?');
					break;	
				}

				default:
				{
					ClearPortfolioEvent('clear_list', $(this).attr('list-id'), null, 'Удалить ВСЕ бумаги из портфеля?');
					break;
				}
			}
		}

	}).on('click', '.portfolio-edit-link', function(e)
	{
		if ($(this).attr('list-id')) AddPortfolioEvent('Редактирование свойств портфеля', 'update_list', $(this).attr('list-id')).then(function(sMsgTitle, sMsg)
			{
				msgNoticeBox.alert(sMsgTitle, sMsg);

			},function(sMsgTitle, sMsg)
			{
				msgErrorBox.alert(sMsgTitle, sMsg);
			}
		)

	}).on('click', '.portfolio-add-link', function(e)
	{
		AddPortfolioEvent('Создание нового портфеля', 'add_list').then(function(sMsgTitle, sMsg)
		{
			msgNoticeBox.alert(sMsgTitle, sMsg);

			if (document.location.pathname.match(/^\/q\/portfolio\/[^\/]+\/?/))
			{
				setTimeout(function(e)
				{
					document.location.reload();

				}, 1000);
			}			
		
		}, function(sMsgTitle, sMsg)
		{
			msgErrorBox.alert(sMsgTitle, sMsg);
		});

	}).on('click', '.portfolio_action, .portfolio_action_new', function(e)
	{
		if ($(this).attr('type') == 'comment')
		{
			CommentPortfolioStockEvent($(this).attr('sec-title'), $(this).attr('symbol'), $(this).attr('sec-type'), $(this).attr('list-id'), $(this).attr('investment-id'), $(this));

		} else if ($(this).attr('type') == 'edit')
		{
			EditPortfolioStockEvent($(this).attr('symbol'), $(this).attr('list-id'), $(this).attr('investment-id'));

		} else if (($(this).attr('type') == 'sell') || ($(this).attr('type') == 'buy'))
		{
			AddPortfolioStockEvent($(this).attr('type'), $(this).attr('symbol'), $(this).attr('sec-last'), $(this).attr('list-id'));
		
		} else if (($(this).attr('type') == 'add') || ($(this).attr('type') == 'remove'))
		{
			AddPortfolioMoneyEvent($(this).attr('type'), $(this).attr('symbol'), $(this).attr('list-id'));
		} else if (($(this).attr('type') == 'div_add') || ($(this).attr('type') == 'div_edit'))
		{
			AddPortfolioDividendEvent($(this).attr('type'), $(this).attr('symbol'), $(this).attr('list-id'));
		} else if (($(this).attr('type') == 'div_remove'))
		{
			RemovePortfolioDividendEvent($(this).attr('type'), $(this).attr('symbol'), $(this).attr('list-id'), $(this).attr('dividend-id'));
		}
	});


	$('#dividends_wl').on('click', '.report_bug', function(e)
	{
		if ($('#dividendMistakeDialog').length) return;
		ReportDividendMistake(btn2Report(this));
	});

	$('#shares_fundamental_banks_wl, #shares_fundamental_wl').on('click', '.report_bug', function(e)
	{
		if ($('#fundamentalMistakeDialog').length) return;
		ReportFundamentalMistake(btn2Report(this));
	});

	$('#dividends_wl').on('click', 'th[field]', DividendsSortClick);
	$('#hide_probably_dividends input:checkbox').on('click', DividendsHideProbablyClick);

});