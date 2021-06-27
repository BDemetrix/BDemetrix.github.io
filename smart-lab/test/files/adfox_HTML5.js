function callClick(n) {
	var link = ( n ? flashVars.events[n] : flashVars.link );
	window.open(flashVars.reference + "@" + link, flashVars.target);
}

function callEvent(n) {
	(new Image()).src = flashVars.events[n]; 
}