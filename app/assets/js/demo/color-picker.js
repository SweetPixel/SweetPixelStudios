window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();	
	
	jQuery(document).ready(new function() {
			
			// Style Switcher	
			
			$('#color-picker').animate({
				left: '-60px'
			});
			
			$('#color-picker h3 a').click(function(e){
				e.preventDefault();
				var div = $('#color-picker');
				if (div.css('left') === '-60px') {
					$('#color-picker').animate({
						left: '0px'
					}); 
				} else {
					$('#color-picker').animate({
						left: '-60px'
					});
				}
			});
			
			$('.colors li a').click(function(e){
				e.preventDefault();
				$(this).parent().parent().find('a').removeClass('active');
				$(this).addClass('active');
			});
				
		});	