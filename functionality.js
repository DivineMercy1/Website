function hidePast() {
  var i = 1;
  var x = document.querySelectorAll(".old");
  while (d = document.getElementById('old' + (i++))) {
    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none";
    }
  }
}