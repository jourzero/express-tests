function doIt() {
	document.getElementById("bug-9521").style.display = "block";
}

setTimeout(function() {
	$("#<img onerror=doIt() src=x>");
}, 1000);
