const text = document.getElementById("wednesday")

var date = new Date();

var day = date.getDay();

if (day == 3) {
  console.log("It is wednesday my dudes");
  text.innerHTML = "It is wednesday my dudes";
}
