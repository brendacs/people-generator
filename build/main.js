// api => json, displaying data
function getData() {
	$.ajax({
		url: 'https://randomuser.me/api/?results=6',
		dataType: 'json',
		success: function(data) {
			let results = data.results;
			var i = 0;
			var people = [];
			var info = [];
				
			// empty and then append to replace
			$('div#people-div').empty();
			$('div#people-info').empty();
			people.length = 0;
			info.length = 0;
			
			$.each(results, function(data) {
				// people's images and names shown
				people.push('<div id="image-' + i +'">');
				people.push('<img onclick="showModal();" class="people-image" src="' + results[i].picture.large + '"/>');
				people.push('<li class="people">' + results[i].name.first + ' ' + results[i].name.last + '</li>');
				people.push('</div>');

				// extra info about people, only appear on image click
				info.push('<div class="person-info" id="person-' + i +'">');
				info.push('<li>Gender: ' + results[i].gender + '</li>');
				info.push('<li>DOB: ' + results[i].dob + '</li>');
				info.push('<li>Email: ' + results[i].email + '</li>');
				info.push('<li>Home: ' + results[i].phone + '</li>');
				info.push('<li>Cell: ' + results[i].cell + '</li>');
				info.push('</div>');
				i++;
			});

			// list of people, including images and names
			$('<ul/>', {
				'id': 'people-list',
				html: people.join('')
			}).appendTo('div#people-div');

			// list of people info, including gender, dob, email, home, cell
			$('<div/>', {
				'id': 'info-list',
				html: info.join('')
			}).appendTo('div#people-info');

			// for testing
			// console.log(data);
	  	}
	});
}

// display on DOM load and on button click
$(document).ready(getData);
$('#gen').on("click", getData);

// hide modal
function hideModal() {
	$('#info-container').hide();
	$('.person-info').hide();
}

// show modal without text
function showModal() {
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	
	// hide modals when on mobile or tablet
	if (width < 1024) {
		hideModal();
	} else {
		$('#info-container').show();
		$('.person-info').hide();

		// show different content for each image
		$('#image-0').on("click", function() {
			$('.person-info').show();
			$('#person-1, #person-2, #person-3, #person-4, #person-5').hide();
			$('#person-0').show();
		});

		$('#image-1').on("click", function() {
			$('.person-info').show();
			$('#person-0, #person-2, #person-3, #person-4, #person-5').hide();
			$('#person-1').show();
		});

		$('#image-2').on("click", function() {
			$('.person-info').show();
			$('#person-1, #person-0, #person-3, #person-4, #person-5').hide();
			$('#person-2').show();
		});

		$('#image-3').on("click", function() {
			$('.person-info').show();
			$('#person-1, #person-2, #person-0, #person-4, #person-5').hide();
			$('#person-3').show();
		});

		$('#image-4').on("click", function() {
			$('.person-info').show();
			$('#person-1, #person-2, #person-3, #person-0, #person-5').hide();
			$('#person-4').show();
		});

		$('#image-5').on("click", function() {
			$('.person-info').show();
			$('#person-1, #person-2, #person-3, #person-4, #person-0').hide();
			$('#person-5').show();
		});
	}
}

// don't show modals when site opens
window.onload = hideModal();

// close on click
$('#info-container').on("click", hideModal);
