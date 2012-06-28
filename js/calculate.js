$(document).ready(function() {
	
	source = $('.ajax-source');
	target = $('.ajax-target');

	$('.ajax-convert-trigger').tap(function() {
		
		var option = $('.ajax-radio.active').attr('data-radio-value');

		if(!isNaN(source.val())) {
			if(option == '1') {
				var weight = Math.round(source.val()*6.35029318*100)/100;
				target.val(weight+' kg');
			}
			else if(option == '2') {
				var weight = Math.round(source.val()*0.157473044*100)/100;
				target.val(weight+' stones');
			}	
		}
		return false;
	});

	$('.ajax-radio').tap(function() {

		$('.ajax-radio').removeClass('active');
		$(this).addClass('active');

		source.val('');
		target.val('');

		var option = $(this).attr('data-radio-value');

		if(option == '1') {
			source.attr('placeholder', 'Weight in stones...');
			target.attr('placeholder', 'Weight in kg...');
		}
		else {
			source.attr('placeholder', 'Weight in kg...');
			target.attr('placeholder', 'Weight in stones...');
		}
	});
});
