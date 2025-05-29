$(document).ready(function(){
    $('.menu').on('click',function(){
        $(this).next().toggle();
    });

    var $carousel = $('#carouselExample');
    var carousel = bootstrap.Carousel.getOrCreateInstance($carousel[0]);

    $('#customPrev').on('click', function () {
      carousel.prev();
    });

    $('#customNext').on('click', function () {
      carousel.next();
    });

    var $carousel2 = $('#carouselExample2');
    var carousel2 = bootstrap.Carousel.getOrCreateInstance($carousel2[0]);

    $('#customPrev2').on('click', function () {
      carousel2.prev();
    });

    $('#customNext2').on('click', function () {
      carousel2.next();
    });

    var $carousel3 = $('#carouselExample3');
    var carousel3 = bootstrap.Carousel.getOrCreateInstance($carousel3[0]);

    $('.customPrev3').on('click', function () {
      carousel3.prev();
    });

    $('.customNext3').on('click', function () {
      carousel3.next();
    });

    $('.email').on('click', function(){
        $(this).hide();
        $(this).next('input').show();
    });

    $('.img-pill').hover(
        function() { // Hover in
            $(this).children('.pill-img').show();
        },
        function() { // Hover out
            $(this).children('.pill-img').hide();
        }
    );

    $('.instagram').hover(
        function(){
            $(this).children('.post').css('display', 'flex');
        },
        function(){
            $(this).children('.post').hide();
        }
    );

    $('.fa-bars').on('click', function(){
        $('.side-menu').show();
    });

    $('.fa-xmark').on('click', function(){
        $('.side-menu').hide();
    });
});