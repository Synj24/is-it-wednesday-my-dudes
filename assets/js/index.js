const text = document.getElementById("not-wednesday")
const video = document.getElementById("jimmy")
const frog = document.getElementById("frog")

var date = new Date();
var day = date.getDay();

if (day == 3) {
  text.remove();
  frog.remove();
  document.body.style.backgroundColor = "#000"
  console.log("It is wednesday my dudes :)");
} else {
  video.remove();
}

video.addEventListener('click',function(){ video.play(); },false);
