// hide modal
function hideModal() {
	$('#info-container').hide();
	$('.person-info').hide();
}

// show modal without text
function showModal() {
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

// don't show modals when site opens
window.onload = hideModal();

// close button
$('span').on("click", hideModal);