$('.navigation').on('click','a', function(event){
	event.preventDefault();
	
	var id = $(this).attr("href"),
			top = $(id).offset().top;
	$('body,html').animate({scrollTop: top},1500);
});

$('#navi_open').click(function(){
    $('.header__menu, #navi_close').fadeIn(400); 
    $('#navi_open').fadeOut(400); 
  });
$(' #navi_close').click(function(){
			$('.header__menu, #navi_open').fadeOut(400); 
			$('#navi_close').fadeOut(400); 
	$('#navi_open').fadeIn(400);
		});

$('.slide_carusel').owlCarousel({
		loop:true,
    margin:10,
    nav:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.posting__info_gallery').owlCarousel({
		loop:true,
    margin:5,
    nav:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
});