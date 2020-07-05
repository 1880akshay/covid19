$(document).ready(function(){
    $('.c1').owlCarousel({
        center: true,
        loop: true,
        items:3,
        margin: 30,
        stagePadding: 0,
        nav: false,
        //navText: ['<span class="fa fa-caret-left" style="font-size: larger">', '<span class="fa fa-caret-right" style="font-size: larger">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 3
            }
        },
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $('.slideshow1').owlCarousel({
        center: true,
        loop: true,
        items:3,
        margin: 30,
        stagePadding: 0,
        nav: false,
        //navText: ['<span class="fa fa-caret-left" style="font-size: larger">', '<span class="fa fa-caret-right" style="font-size: larger">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 3
            }
        },
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
});