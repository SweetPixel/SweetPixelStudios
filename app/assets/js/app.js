'use strict';

$('#contactUs').click( function (e) {
	e.preventDefault();
	var name = $('#name').val(),
	email = $('#email').val(),
	message = $('#message').val();
	if (name === '' || email === '' || message === '') {
		sweetAlert({
			title: "Oops...", 
			text: "You must fill all fields!", 
			type: "error",
			confirmButtonColor: "#334d5c"
		});
	}
	else {
		$.ajax({
			type: 'POST',
			url: 'https://mandrillapp.com/api/1.0/messages/send.json',
			data: {
				'key': '7MI_ClfWxAxYrHzeomxkEA',
				'message': {
					'from_email': 'ali@sweetpixelstudios.com',
					'to': [
						{
							'email': 'hello@sweetpixelstudios.com',
							'name': 'SPS',
							'type': 'to'
						}
					],
					'autotext': 'true',
					'subject': 'New Feedback from SPS Website!',
					'html': '<strong>From: </strong>' + name + '<br />' +
					'<strong>Email: </strong>' + email + '<br />' +
					'<strong>Message: </strong>' + message
				}
			}
		}).done(function() {
			// console.log(response); // if you're into that sorta th
			$('#contactForm').hide();
			$('#sentConfirmation').show();
		});
	}
});
