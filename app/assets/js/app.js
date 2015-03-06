'use strict';

$('#contactUs').click( function (e) {
	e.preventDefault();
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
						'name': 'Hello SPS',
						'type': 'to'
					}
				],
				'autotext': 'true',
				'subject': 'SUBJECT To change!',
				'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
			}
		}
	});
	// .done(function(response) {
	// 	console.log(response); // if you're into that sorta th
	// });
});
