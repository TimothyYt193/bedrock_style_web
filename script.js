document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

//document.getElementById("buttons").addEventListener("click", function() {
	
function button_click() {
  var audio = new Audio('sounds/button_click.ogg');
  audio.play();
}

function openWebsite(url) {
  window.open(url, "_blank");
}

function showImage() {
  dialogImage.style.display = 'block';
}