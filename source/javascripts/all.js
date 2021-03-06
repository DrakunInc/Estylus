//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){

    $(window).on("scroll", function(){
        if ($(this).scrollTop() > 100){
            $(".hidenavbar").css("opacity","1");
            $(".navbar").css("background-color","white");
            $(".navbar-nav a").css("color","#000");
        }else{
            $(".hidenavbar").css("opacity","0");
            $(".navbar").css("background-color","transparent");
            $(".navbar-nav a").css("color","#fff");
        }

    });


    // smooth scrollTop
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});
