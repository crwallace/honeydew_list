$(document).ready(function(){

	//This will log the #addItems value to the console when the enter key is selected.
	$('#addItems').keypress(function(e) {
	    if (e.which == 13) {
	        console.log($('#addItems').val());
	    }
	});
	
	//this code marks the grocery items off of the list. 
	$('.checkbox').click(function(){
		$(this).next('span').toggleClass('collected');
	});
});
