function do11974() {
	document.getElementById("issue-11974").style.display = "block";
}

setTimeout(function() {
	jQuery.parseHTML('<img src="x" onerror="do11974()">');
}, 1000);
