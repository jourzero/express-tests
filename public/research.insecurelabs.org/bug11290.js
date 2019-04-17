function doIt2() {
	document.getElementById("bug-11290").style.display = "block";
}

setTimeout(function() {
	$("element[attribute='<img onerror=doIt2() src=y>']");
}, 1000);
