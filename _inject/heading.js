/*-- SHOW & HIDE FOR CONSULT US AND CLOSE BOXES IN THE HEADING ---*/

(function($) {
	
	$(document).ready(function() {
		
		/*--- CONSULT BOX (MOBILE) ---*/
		$('.communicate-mobile').on("click", function() {
			$('.communicate').css('display', 'block');
			$('.communicate-mobile').css('display', 'none');
			$('.close-communicate').removeClass('hidden');
		});

		$('.close-communicate').on("click", function() {
			$('.communicate').css('display', 'none');
			$('.communicate-mobile').css('display', 'block');
			$('.close-communicate').addClass('hidden');
		});
	});
	
})(jQuery);