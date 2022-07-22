/*
Author       : themesvila
Template Name: Hunter - One page Corporate HTML5 Template
Version      : 1.0
*/

(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
	
		/* PRELOADER JS*/
			$(window).load(function() { 
				$('.loader_wrap').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/* END PRELOADER JS*/
	
		/* START MENU JS */
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	
			$(window).scroll(function() {
			  if ($(this).scrollTop() >0) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/* END MENU JS */
	
		/* START STICKY MENU JS */
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	
			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('sticky_menu');
			  } else {
				$('.menu-top').removeClass('sticky_menu');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/* END STICKY MENU JS */
		
		/* START SCROLL TO */
			$(window).on('scroll',function(){
			if($(this).scrollTop() > 500){
				$('.scroll_top').removeClass('not-visible');
			}
			else{
				$('.scroll_top').addClass('not-visible');
			}
			});
			$('.scroll_top').on('click',function (event){
				$('html,body').animate({
					scrollTop:0
				},200);
			});
		/* END SCROLL TO */
		
		/* START MAIN-SLIDER JS */
			// Main slider
			$('.slider_active').owlCarousel({
				loop:true,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed:450,
				autoplay:true,
				autoplayTimeout:6000,
				mouseDrag:false,
				nav:true,
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
			})	
		/* END MAIN-SLIDER JS */
		
		/*START MIXITUP JS*/
		
			$('.portfolio_item_area').mixItUp();
				
		/*END MIXITUP JS*/
		
		/* START LIGHTBOX */
		
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			});
		
		/* END LIGHTBOX JS */
		
		/* START SCROLL-TOP JS */
		
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			});
			
			$('.scrollup').click(function () {
				$("html, body").animate({
					scrollTop:0
				},600);
				return false;
			});		
		
		/* START SCROLL-TOP JS */
		
		/*START COUNDOWN JS*/
			$('#counterup').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 3000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/*END COUNDOWN JS */
		
		/* START TESTIMONIAL JS */
			 $("#testimonial-slider").owlCarousel({
				autoplay : true,
				nav:true,
				navText: false,
				dots: true,
				items:2,
				pagination: true,
				autoPlay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:2
					}
				}
			});
	}); 
		/* END TESTIMONIAL JS */

		
	/*  Stellar for background scrolling  */
		(function () {

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 
			} else {
				$(window).stellar({
					horizontalScrolling: false,
					responsive: true
				});
			}

		}());
	/* End Stellar for background scrolling  */		
	
	/* Youtube Video  */		
	
	$('#player').mb_YTPlayer();
		
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
})(jQuery);