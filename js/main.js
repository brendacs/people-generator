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
				people.push('<div>');
				people.push('<img class="people-image" src="' + results[i].picture.large + '"/>');
				people.push('<li class="people">' + results[i].name.first + ' ' + results[i].name.last + '</li>');
				people.push('</div>');

				// extra info about people, only appear on image click
				info.push('<li class="info">' + results[i].gender + '</li>');
				info.push('<li class="info">' + results[i].dob + '</li>');
				info.push('<li class="info">' + results[i].email + '</li>');
				info.push('<li class="info">' + results[i].cell + '</li>');
				info.push('<li class="info">' + results[i].phone + '</li>');
				i++;
			});

			$('<ul/>', {
				'id': 'people-list',
				html: people.join('')
			}).appendTo('div#people-div');

			// for testing
			console.log(data);
	  	}
	});
}

// display on DOM load and on button click
$(document).ready(getData);
$('#gen').on("click", getData);

// pop-up modules for displaying more info on img click
// $('img.people-image').on("click", showModule);