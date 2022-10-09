var dt = new Date();
 var currentdate = document.getElementById("currentDate");
   //currentdate.innerHTML = dt.getFullYear();

//document.getElementById("currentDate").innerHTML = dt.getFullYear();	  
 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}