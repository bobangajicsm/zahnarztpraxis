(function($) {
  "use strict";

/** background slider load only over > 780 px **/
var windowWidth = $(window).width();
if (windowWidth > 768) {

    // Duration is the amount of time in between slides,
    // and fade is value that determines how quickly the next image will fade in
    // simple Change your slider images here,folow pattern
    $(".hero-bg").backstretch([
        "images/doctor-3.png", "images/slide-bg-2.jpg"
    ], {
        duration: 5000,
        fade: 850
    });
}


$('#dp, #dp2').datepicker()


/**    add image to the elemenet via data atribute and class="tile-item"
 *****************************************************/
$(".bg-image").css('background', function() {
    var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
    return bg;
});
// cover data image
$(".bg-image").css("background-size", "cover");


// Accordion icon change
$('.collapse').on('shown.bs.collapse', function() {
    $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
}).on('hidden.bs.collapse', function() {
    $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});


$(".responsive-video").fitVids();


$('#contactform').submit(function () {
                  
                  var action = $(this).attr('action');
                  
                  jQuery("#message").slideUp(750, function () {
                      jQuery('#message').hide();
                  
                      jQuery.post(action, {
                              name: $('#name').val(),
                              email: $('#email').val(),
                              phone: $('#phone').val(),
                              subject: $('#subject').val(),
                              comments: $('#comments').val()
                          },
                          function (data) {
                              document.getElementById('message').innerHTML = data;
                              $('#message').slideDown('slow');
                              if (data.match('success') != null) $('#contactform').slideUp('slow');
                  
                          }
                      );
                  
                  });
                  
                  return false;
                  
                  });

})(jQuery);


/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function() {
    equalheight(".height-1");
});


$(window).resize(function() {
    equalheight(".height-1");
});

$(window).load(function() {
    equalheight(".height-2");
});


$(window).resize(function() {
    equalheight(".height-2");
});

$(document).ready(function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 3, //3 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2],
        pagination: false

    });

    // Custom Navigation Events
    $(".carousel-next").click(function() {
        owl.trigger('owl.next');
    })
    $(".carousel-prev").click(function() {
        owl.trigger('owl.prev');
    })
    

});




$(window).on('load resize', function(){
    $('.top_box').css( "border-left-width", $(this).width() );
  $('.bot_box').css( "border-right-width", $(this).width() );
});

$(document).ready(function() {

    $('#owl-slider-1 , #owl-slider-2').owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
    
     var owl = $("#blog-carousel");

       owl.owlCarousel({

           itemsCustom: [
                        [0, 1],
                        [450, 1],
                        [600, 2],
                        [700, 2],
                        [1000, 2],
                        [1200, 3],
                        [1400, 3],
                        [1600, 3]
                    ],
           navigation: false

       });


});

$(document).ready(function() {

    var owl = $("#owl-slider");

    owl.owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false

    });

    // Custom Navigation Events
    $(".owl-next").click(function() {
        owl.trigger('owl.next');
    })
    $(".owl-prev").click(function() {
        owl.trigger('owl.prev');
    })

});


$(document).ready(function() {

    /* activate sidebar */
    $('#sidebar').affix({
        offset: {
            top: 235
        }
    });

    /* activate scrollspy menu */
    var $body = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
        target: '#leftCol',
        offset: navHeight
    });

    /* smooth scrolling sections */
    $('#sidebar a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });

});




jQuery('html').niceScroll({
    cursorcolor: "#58AFE0",
    zindex: '99999',
    cursorminheight: 60,
    scrollspeed: 70,
    cursorwidth: 9,
    autohidemode: true,
    background: "#aaa",
    cursorborder: 'none',
    cursoropacitymax: .9,
    cursorborderradius: 0,
    horizrailenabled: false
});


$(window).scroll(function(e) {
    parallax();
});

//PARALLAX FUNCTION
function parallax() {
    var scrolled = $(window).scrollTop();
    $('.parallax').css('top', -(scrolled * 0.1) + 'px');
}

(function($) {

    var x = 0;
    var y = 0;
    //cache a reference to the banner  
    var banner = $("selecor");

    // set initial banner background position  
    banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');

    // scroll up background position every 90 milliseconds  
    window.setInterval(function() {
        banner.css("backgroundPosition", x + 'px' + ' ' + y + 'px');
        //y--;  
        x--;

        //if you need to scroll image horizontally -  
        // uncomment x and comment y  

    }, 400);

})(jQuery);




$(document).ready(function() {

    $(".animsition").animsition({

        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        unSupportCss: ['animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
        ],
        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

        overlay: false,

        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body'
    });
});



