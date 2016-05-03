if (window.location.host === "www.reddit.com") {
	document.getElementById("header-bottom-left").style = "background-image: none !important; height: 50px !important;";
	document.querySelector(".pagename.redditname").style = "margin-top: 30px;";
}

if (window.location.host === "www.sltrib.com") {
	var links = document.querySelectorAll("a.headline");
	//console.log(links);
	for (var i = 0; i < links.length; i++){
		//console.log('hey');
		links[i].href += "?fullpage=1";
	}

	document.querySelector('#main-content .col-md-16').style = 'width: 100% !important';
	document.querySelector('.col-md-8.pull-right').style = 'display:none;';
	document.querySelector('.pull-left').style='display: none;';
	document.querySelector('.content-full-article.col-md-8').style = 'width: 100% !important;';
	console.log(links);
}