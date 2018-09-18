$('.jarallax').jarallax({
    speed: 0.2
});

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
      // $('html').addClass('touch');
    }
    else{
      // $('html').removeClass('touch');
    }
    if ($(window).width() < 991) {                 
      $('.navbar-default').addClass('solid');
      $('.navbar-default').addClass('smaller');
    } 
    else if ($(this).scrollTop() > 50) {                 
      $('.navbar-default').addClass('smaller');
      $('.navbar-default').addClass('solid');

    } else {
      $('.navbar-default').removeClass('smaller');
      $('.navbar-default').removeClass('solid');
    } 
});
//Check if window is resized to less than desktop res width, 
//If it is, make navbar opaque

$(window).resize(function () {
    if ($(window).width() < 991) {                 
      $('.navbar-default').addClass('solid');
      $('.navbar-default').addClass('smaller');
    } 
    else if ($(this).scrollTop() > 50) {                 
      $('.navbar-default').addClass('smaller');
      $('.navbar-default').addClass('solid');

    } else {
      $('.navbar-default').removeClass('smaller');
      $('.navbar-default').removeClass('solid');
    } 
    $('.jarallax').jarallax('destroy');
    $('.jarallax').jarallax({
        speed: 0.2
    });
});


$('body').scrollspy({
  target: '#topnav',
  offset: 50
});


//Script to fade out the post when scrolled past
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop() - 100;
    var height = ($(window).height() / 5);
    $('.title-block-main').css({
        'opacity': ((height - scrollTop) / (height))
    });
    // $('.title-main').css({
    //     'opacity': ((height - scrollTop) / (height))
    // });
});

//Script to fade out the banner when scrolled past
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = ($(window).height() / 2); //1.7 previous
    $('.top').css({
        'opacity': ((height - scrollTop) / (height))
    });
    $('.bottom').css({
        'opacity': ((height - scrollTop) / (height))
    });
    // $('.jarallax-container-1').css({
    //     'z-index': 'unset !important'
    // });
    //  $('.jarallax').css({
    //     'z-index': 'unset !important'
    // });
    $('.jarallax').removeAttr( 'style' );
    // document.getElementById('jarallax-container-0').style.zIndex="unset";
    // document.getElementById('jarallax-container-1').style.zIndex="unset";
    // document.getElementById('jarallax-container-2').style.zIndex="unset";
    // $('.card-img').removeAttr( 'style' )
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
});

