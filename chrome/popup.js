if (window.location.host === "www.sltrib.com") {
	//fullpage by default
	var links = document.querySelectorAll("a");
	var news = "/news/";
	console.log(links);
	function addFullPage(links) {
		for (var i = 0; i < links.length; i++){
			console.log(links[i].baseURI);
			
			if (links[i].host === "www.sltrib.com" && (links[i].href.indexOf(news) > -1)) {
				console.log(i);
				links[i].href += "?fullpage=1";
			}
		}
	}

	addFullPage(links);
	// addFullPage(imgLinks);

	//append editor's picks after top 4 stories.
	var editorsPicks = document.querySelector(".col-md-8.pull-right.content-area.content-articles-list");
	var topFour = document.querySelector('.col-md-16.content-area.content-articles-grid-large.hidden-sm.hidden-xs');
	editorsPicks.cloneNode(true);
	editorsPicks.parentNode.removeChild(editorsPicks);
	topFour.appendChild(editorsPicks);
	editorsPicks.style = "display: block;";
	
}