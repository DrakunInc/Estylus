//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){
    $(window).on("scroll", function(){
        if ($(this).scrollTop() > 100){
            $(".navbar").css("background-color","black");
        }else{
            $(".navbar").css("background-color","transparent");
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
