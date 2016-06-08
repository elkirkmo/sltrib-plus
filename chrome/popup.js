if (window.location.host === "www.sltrib.com") {
	var links = document.querySelectorAll("a.headline");
	//console.log(links);
	for (var i = 0; i < links.length; i++){
		//console.log('hey');
		links[i].href += "?fullpage=1";
	}
}