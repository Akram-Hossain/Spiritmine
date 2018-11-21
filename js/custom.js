$(function () {
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Preloader js    
    $(window).on('load', function(){
        $('.preloader').delay(1500).fadeOut(500);
    });
    
    //animation scroll js
    var html_body = $('html, body');
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 20
                }, 1500);
                return false;
            }
        }
});
    
    // for navbar background color when scrolling
    $(window).scroll(function () {
        var stickytop = $(".nav_part");
        var $scrolling = $(this).scrollTop();
        var bc2top = $(".back-top-btn");
        if ($scrolling >= 30) {
            stickytop.addClass('nav_bg');
        } else {
            stickytop.removeClass('nav_bg');
        }

        if ($scrolling > 150) {
                bc2top.fadeIn(1000);
            } else {
                bc2top.fadeOut(1000);
            }
    });

    //slider part start 
    $('.ban_slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    // slider part end
    
    // venobox about part start 
    $('.venobox').venobox(); 
    // venobox about part end
    
    //team part start
        $('.team_slide').slick({
            dots: true,
            autoplay: true,
            arrows: false,
            speed: 900,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    //team part end
    
    //services part start 
    AOS.init();
    //services part end
    
    //client counter start 
    $('.counter').counterUp({
        delay: 17,
        time: 1700
    });
    //client counter end 
    
    // filterizr gallery strat
	var filterizd = $('.filtr-container').filterizr({
	});
    //filter gallery end
    
    //testimonial part start 
    $('.testimnal_slide').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 900
    });
    //testimonial part end 
    
    // this is for back to top and sticky menu js
    var bc2top = $('.back-top-btn');
    bc2top.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });
    
    //form validation start 
    
    $("#error_name").hide();
    $("#error_mail").hide();
    $("#error_txt").hide();
    
    function check_username (){
        var username_length = $("#namee").val().length;
        if(username_length < 5 || username_length > 20){
            $("#error_name").html("User Name Is empty");
            $("#error_name").show();
           }
    }
});