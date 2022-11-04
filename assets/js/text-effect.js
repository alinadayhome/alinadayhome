
  
//let firstpara = document.querySelector("#firstpara");

 //var firstpara = document.getElementById("firstpara");

//window.onscroll = () =>  {
//  let pos = window.scrollY - 800;
  
//}

$(document).on('scroll', function() {
    var scrolltop = window.scrollY; 
    $("#firstpara").css("left", window.scrollY + "px"); 
});



$(window).on("load resize scroll", function() {
   $(".bg-static").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    //var leftPosition = windowTop - elementTop;
    var leftPosition =  3 * windowTop;
      $(this)
        .find(".bg-move")
        .css({ left: leftPosition });
    });
});


