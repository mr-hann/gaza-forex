
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
  
  //sub nav on the dashboard
  
  //all courses
   $(".nav-all").click(function(){
//add active
    $(this).addClass("active-primary");
  //remove hover
    $(this).removeClass("hover-primary");
//add hover for other nav elements
    $(".nav-paid").addClass("hover-primary");
    $(".nav-free").addClass("hover-primary");
//remove active from other nav elements
    $(".nav-paid").removeClass("active-primary");
    $(".nav-free").removeClass("active-primary");
// display paid courses
    $(".paid-course").show();
    $(".free-course").show();

  });
  //all courses ends here

  //paid courses
  $(".nav-paid").click(function(){
    //add active
    $(this).addClass("active-primary");
    //remove active on other elements
    $(".nav-all").removeClass("active-primary");
    $(".nav-free").removeClass("active-primary");
       
    //add hover for other nav elements
    $(".nav-all").addClass("hover-primary");
    $(".nav-free").addClass("hover-primary");

    //remove hover 
    $(this).removeClass("hover-primary");
    // show only paid courses
    $(".paid-course").show();
    $(".free-course").hide();

  })
  //end paid
 

   //free courses
   $(".nav-free").click(function(){
    //add active
        $(this).addClass("active-primary");
      //remove hover
        $(this).removeClass("hover-primary");
    //add hover for other nav elements
        $(".nav-paid").addClass("hover-primary");
        $(".nav-all").addClass("hover-primary");
    //remove active from other nav elements
        $(".nav-paid").removeClass("active-primary");
        $(".nav-all").removeClass("active-primary");
    // display free courses and hide paid
        $(".paid-course").hide();
        $(".free-course").show();
    
      });
      //free courses ends here
});
