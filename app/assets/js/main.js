/* ==================================================
			Preloader Calling
================================================== */  
	jQuery(window).load(function() {
        $('.doc-loader').fadeOut('slow');
    });
/* ==================================================
			Sticky Navigation	
================================================== */ 
$(".navbar").sticky({topSpacing:0});

/* ==================================================
			Option Screen & Slide Home	
================================================== */ 
	function phobos_slider(){
	var navbar = $(".navbar").height();
	var home = $('.homes');
	var height_home = $(window).height() - navbar;
	home.css('height', '100%').css('width','100%');

}phobos_slider();
/* ==================================================
				flexslider
================================================== */
	jQuery('#home-slider.flexslider').flexslider({						
		animation: "fade",
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: false,
		controlNav: false,
		smootheHeight:true,
		after: function(slider) {
		  slider.removeClass('loading');
		}
				
	});
/* ==================================================
				navbar
================================================== */	
	$(function() {
		$('.nav a, .nav li a, .startarrow a').bind('click',function(event){
		var $anchor = $(this);
	
		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -75
		}, 1500,'easeInOutExpo');
		
		event.preventDefault();
		});
	});
/* ==================================================
				Parallax
================================================== */
	$(document).ready(function() {  
		$('#pall-home').parallax("50%", 0.6);
		$('#quote-parallax').parallax("50%", 0.6);
		$('#office').parallax("50%", 0.6);
		$('#join').parallax("50%", 0.6);
		$('#testiminal').parallax("50%", 0.6);
		$('#create').parallax("50%", 0.6);
		$('#follow').parallax("50%", 0.6);
	});
/* ==================================================
					Testimonial
================================================== */ 
	$('.clientss li').click(function() {
		$('.clientss li').removeClass('clients-active');
		$(this).addClass('clients-active');

		// Get data- values
		var clients_name = $(this).data('name');
		var clients_title = $(this).data('title');

		// Replace gotten values with current name and title
		$('.clients-name').html(clients_name);
		$('.clients-title').html(clients_title);

	});	
/* ==================================================
						Animation	
================================================== */ 
	$('.from-top').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,top:"0px"},1000);
		});	
	});
	
	$('.from-bottom').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
		});	
	});
	
	
	$('.from-left').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,left:"0px"},1000);
		});	
	});
	
	
	$('.from-right').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});
	
	$('.fade-in').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});	
	
	$('#startarrow').addClass('animated bounce');
/* ==================================================
				Animated Counters
================================================== */ 
	$('.counters').each(function () {
		$(".timer .count").appear(function() {
		var counter = $(this).html();
		$(this).countTo({
			from: 0,
			to: counter,
			speed: 2000,
			refreshInterval: 60,
			});
		});
	});
/* ==================================================
					Progress Bars
================================================== */ 
	$('.progress').each(function () {
		$(this).appear(function() {
		  $(this).animate({opacity:1,left:"0px"},1200);
		  var b = $(this).find(".bar").attr("data-width");
		  $(this).find(".bar").animate({
			width: b + "%"
		  }, 1700, "easeOutCirc");
		});	
	});
/* ==================================================
				Caraousel
================================================== */	
	$('.carousel').carousel();	
/* ==============================================
				prettyPhoto
=============================================== */
	$(document).ready(function(){
        $("a[rel^='prettyPhoto']").prettyPhoto({
		//theme:'dark_square',
		deeplinking: false
		});
    });
/* ==============================================
			Quicksand FIlterable 
=============================================== */
	var $filterType = $('#filterOptions li.active a').attr('class');
	var $holder = $('ul.holder');
	var $data = $holder.clone();

	$('#filterOptions li a').click(function(e) {
		
		$('#filterOptions li').removeClass('active');
		
		var $filterType = $(this).attr('class');
		$(this).parent().addClass('active');
		
		if ($filterType == 'all') {
			var $filteredData = $data.find('li');
		} 
		else {
			var $filteredData = $data.find('li[data-type~=' + $filterType + ']');
		}
		
		// call quicksand
		$holder.quicksand($filteredData, {
			duration: 800,
			filter: 'selector',
			easing: 'linear'
			});
		return false;
	});
	
//Portfolio Filter Start

function show(filterVal){
if(filterVal == 'all') {
	$('ul#portfolio-items li').fadeIn('slow');
} else {
	$('ul#portfolio-items li').each(function() {
		if($(this).hasClass(filterVal)) {
			$(this).fadeIn('slow');
			}
		})
}
}

$('ul#filter a').click(function() {
	$(this).css('outline','none');
	var filterVal = $(this).text().toLowerCase().replace(' ','-');
	var itemsLength = $('ul#portfolio-items  li:visible').length;
	$('ul#filter .active').removeClass('active');
	$(this).parent().addClass('active');
	$('ul#portfolio-items  li:visible').each(function(i) {
		$(this).fadeOut('slow', function(){
			if(itemsLength == ++i){show(filterVal);		
			}
		});
	});
	return false;
});
