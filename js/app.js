"use strict";

$(function() {
	
	/*--- SELECTORS ---*/
	var $brandDropdown 		= $('.brands-dropdown');
	var $categoryDropdown = $('.category-dropdown');
	var $categories 			= $('.more-categories');
	var $moreBrands 			= $('.more-brands');
	var $brandLogos 			= $('.brand-logos');
	var logoClass 				= '.logo-js';
	var logoHoverClass 		= '.logo-hover-js';
	
	
	
	/*--- CONSULT BOX (MOBILE) ---*/
	$('.communicate-mobile').click(function() {
		$('.communicate').css('display', 'block');
		$('.communicate-mobile').css('display', 'none');
		$('.close-communicate').removeClass('hidden');
	});
	
	$('.close-communicate').click(function() {
		$('.communicate').css('display', 'none');
		$('.communicate-mobile').css('display', 'block');
		$('.close-communicate').addClass('hidden');
	});
	
	
	
	/*--- HERO SLIDER ARRAY ---*/
	var slideText = 
		[ '<div class="tab-arrow"></div><p class="selector-text">Don Joy Defiance III</p>', 
		  '<div class="tab-arrow"></div><p class="selector-text">Webtech Knee Brace</p>', 
		  '<div class="tab-arrow"></div><p class="selector-text">Better Braces Feature 3</p>'
		];	
	
	/*--- HERO SLIDER ---*/
	$('.hero-js').slick( {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		dotsClass: 'slider-tabs',
		arrows: false,
		customPaging: function(slider, i) {
      return slideText[i];
    }
	});
	
	
	/*--- IMAGE SLIDER ---*/
	$('.slider-js').slick( {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
//		dotsClass: 'classForDotStyling',
		arrows: true,
		
		responsive: [
			{
				breakpoint: 1109,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
					SlidesToScroll: 1
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					SlidesToScroll: 1
				}
			}
		]
	});
	
	
	/*--- REVEAL MORE BRANDS ---*/
	$brandDropdown.click(function () {   
		$moreBrands.slideToggle('slow', function() {
			$moreBrands.removeClass('hidden');
		});
	});
	
	
	/*--- REVEAL MORE CATEGORIES ---*/
	$categoryDropdown.click(function () {   
		$categories.slideToggle('slow', function() {
			$categories.removeClass('hidden');
		});
	});
		
	
	/*--- SEE MORE BRAND HOVER ---*/
	$('.brands-dropdown-img').hover(function() {
		$(this).addClass('bounce');
//		$('.brands-dropdown-hover').removeClass('hidden');
	}, function() {
		$(this).removeClass('bounce');
//		$('.brands-dropdown-hover').addClass('hidden');
	});
	
	
	/*--- SEE MORE CATEGORIES HOVER ---*/
	$('.cat-dropdown-img').hover(function() {
		$(this).addClass('bounce');
//		$('.brands-dropdown-hover').removeClass('hidden');
	}, function() {
		$(this).removeClass('bounce');
//		$('.brands-dropdown-hover').addClass('hidden');
	});
	
	
	/*--- LOGO HOVERS ---*/
	$brandLogos.find('div').hover(function() {
		$(this).find(logoClass).addClass('hidden');
		$(this).find(logoHoverClass).removeClass('hidden');
	}, function() {
		$(this).find(logoClass).removeClass('hidden');
		$(this).find(logoHoverClass).addClass('hidden');	
	});


}); // end of document.ready


