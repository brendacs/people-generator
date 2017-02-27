function getData() {
	$.ajax({
		url: 'https://randomuser.me/api/?results=10',
		dataType: 'json',
		success: function(data) {
			let results = data.results;
			var ul = document.getElementById('people-list');
			var i = 0;
			var people = [];
				
			$('div#people-div').empty(); // empty and then append to replace
			$.each(results, function(data) {
				people.push('<li class="people">' + results[i].name.first + ' ' + results[i].name.last + '</li>');
				i++;
			});

			$('<ul/>', {
				'id': 'people-list',
				html: people.join('')
			}).appendTo('div#people-div');
	  	}
	});
}

$(document).ready(getData);
$('#gen').on("click", getData);