function doIt4333() {
	document.getElementById("pull-4333").style.display = "block";
}

setTimeout(function() {

  jQuery.extend(true, {},
    JSON.parse('{"__proto__": {"test": true}}')
  );
  if ("test" in {} ){
    doIt4333();
  }
}, 1000);

