$(document).ready(function(){

	$('#addThis').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('#list').append('<li class="items"><button class="listButton">Got it!</button><span>' + toAdd + '</span></li>');
    });

    $(document).on('click', '.items', function() {
        $(this).toggleClass('collected');
    });


	//This will log the #addItems value to the console when the enter key is selected.
	/*$('#addItems').keypress(function(e) {
	    if (e.which == 13) {
	        var toAdd = $('input[name=checkListItem]').val();
        	$('#basket').append('<div class="item">' + toAdd + '</div>');
	});*/
	
});
