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
				
			$('div#people-div').empty(); // empty and then append to replace
			
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

function hideModal() {
	$('#info-container').hide();
	$('.person-info').hide();
}

function showModal() {
	$('#info-container').show();
	$('.person-info').hide();
}

window.onload = hideModal();

// close button
$('span').on("click", hideModal);