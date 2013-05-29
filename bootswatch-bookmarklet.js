(function(){
	var cyborgLink = document.createElement('link'), 
	head = document.getElementsByTagName('head')[0];
	cyborgLink.setAttribute('rel', 'stylesheet');
	cyborgLink.setAttribute('media', 'screen');
	cyborgLink.setAttribute('href', 'http://bootswatch.com/cyborg/bootstrap.min.css');
	head.appendChild(cyborgLink);
})();
