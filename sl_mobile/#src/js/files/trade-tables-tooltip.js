(function () {
    // Подсказки в таблице котировок 
    new jBox('Tooltip', {
        theme: 'trades-table',
        attach: '.js-trades-table-tooltip',
        adjustPosition: true,
        isolateScroll: false,
        animation: "move", 
		position: {
			x: 'center',               // Horizontal position, use a number, 'left', 'right' or 'center'
			y: 'bottom',               // Vertical position, use a number, 'top', 'bottom' or 'center'
		},
        offset: {                   
            y: 10                  
        },
        maxWidth: 250,
        pointer: false,
        // trigger: 'click', 
    });
}());