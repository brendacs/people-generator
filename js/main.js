function getData() {
	$.ajax({
		url: 'https://randomuser.me/api/?results=6',
		dataType: 'json',
		success: function(data) {
			let results = data.results;
			var i = 0;
			var people = [];
				
			$('div#people-div').empty(); // empty and then append to replace
			
			$.each(results, function(data) {
				people.push('<div>');
				people.push('<img src="' + results[i].picture.large + '"/>');
				people.push('<li class="people">' + results[i].name.first + ' ' + results[i].name.last + '</li>');
				people.push('</div>');
				i++;
			});

			$('<ul/>', {
				'id': 'people-list',
				html: people.join('')
			}).appendTo('div#people-div');

			// for testing
			// console.log(data);
	  	}
	});
}

$(document).ready(getData);
$('#gen').on("click", getData);