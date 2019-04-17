function doIt3() {
	document.getElementById("issue-2432").style.display = "block";
}

setTimeout(function() {
	$.get("//erlend.oftedal.no/go.php");
}, 1000);
