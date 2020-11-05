$(function() {

	// Custom JS

});

let navBarMenuButton = document.querySelector('.nav-bar-menu-button');
let menu = document.querySelector('.menu');

navBarMenuButton.onclick = function() {
    navBarMenuButton.classList.toggle('nav-bar-menu-button-transform');
    menu.classList.toggle('menu-visible');

  };

  $('.loop').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:1,
    responsive:{
        600:{
            items:3
        }
    }
});
$('.nonloop').owlCarousel({
    center: true,
    items:1,
    loop:false,
    margin:1,
    responsive:{
        600:{
            items:4
        }
    }
});

$('.owl-dot').each(function(){
    $(this).children('span').text($(this).index()+1);
});
