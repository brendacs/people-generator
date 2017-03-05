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