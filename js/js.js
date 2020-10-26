
   //Get the button
var mybutton = document.getElementById("myBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.screen.availWidth>991.98){
    mybutton.style.display = "none";
  }else{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
$(".side-sub-nav").click(function() {
  
      $(".toggle-side-nav").toggleClass("fa-caret-down fa-caret-right");
  
      $(".side-sub").toggleClass("d-block d-none");
  
    });

    $(".toggle-side-2").click(function(){
      $(".change").toggleClass("fa-caret-down fa-caret-right");
      $(".toggle-ul").toggleClass("d-block d-none");
    })

});