$(document).ready(function() {
    $('.btnMenu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.btnMenu i').toggleClass("active");
    });
})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }