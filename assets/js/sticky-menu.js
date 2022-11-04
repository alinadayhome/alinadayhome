$(document).ready(function () {
  
$(window).on('scroll', function() {
    var navbar = document.getElementById("navbar");
    var offsetop =  navbar.offsetTop;
    var navlogo = document.getElementById("nav-logo");
    scrolltop = $(this).scrollTop();
    if(scrolltop > offsetop) {
      navlogo.style.display="block";
      $("#img-logo").css("width", "80");
      navbar.classList.add("sticky");
      $(".welcome").css("padding-top", "100px");
      $("#navbar a").css("font-size", "16px");
    } else {
      navbar.classList.remove("sticky");
      document.getElementById("nav-logo").style.display="none";  
      $(".welcome").css("padding-top", "10px");
      $("#navbar a").css("font-size", "20px"); 
    }      
});

 $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;
        // pass on every "a" tag
        $("#navbar a").each(function() {
            // check if it is the same on the address bar
            if (url == (this.href)) {
                $(this).closest("li").addClass("active");
                //this is for making active the parent of submenu 
               $(this).closest("li").parent().parent().addClass("active");
            }
        });
    });   
 
});