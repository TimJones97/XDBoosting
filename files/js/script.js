

//collapse the navbar upon selection from hamburger menu
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
    // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity("scroll", 1000);
    });
});

$(window).scroll(function() {
  //Detect browser and disable fixed backgrounds if on Safari or IE/Edge
    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_edge_or_ie;    
    
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    var edge = ua.indexOf('Edge/');
    if (trident > 0 || edge > 0) {
      is_edge_or_ie = true;
    }
    if ((is_chrome)&&(is_safari)) {
      is_safari=false;
    }
    if(is_safari || is_edge_or_ie){
      $('html').addClass('touch');
    }
    else{
      $('html').removeClass('touch');
    }
    if ($(this).scrollTop() > 50) {                 
      $('.navbar-default').addClass('smaller');
      $('.navbar-default').addClass('solid');

    } else {
      $('.navbar-default').removeClass('smaller');
      $('.navbar-default').removeClass('solid');
    } 
});

$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //    $('nav').fadeIn("fast");
    //} else {
    //    $('nav').fadeOut("fast");
    //}
  
    // Assign active class to nav links while scolling
    $('.text-block-info').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav a.active').removeClass('active');
            $('.nav a').eq(i).addClass('active');
        }
    });
}).scroll();