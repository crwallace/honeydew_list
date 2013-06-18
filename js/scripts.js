$(document).ready(function(){

//This adds the checkListItem value to the list as a list item when the addThis button is clicked.
	$('#addThis').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('#list').append('<li class="items"><button class="listButton">Got it!</button><span>' + toAdd + '</span></li>');
        //this will clear the input box after the entry has been submitted.
        $('input[name=checkListItem]').val('')
    });

//This adds the collected class to the list item when clicked.
    $(document).on('click', '.items', function() {
        $(this).toggleClass('collected');
    });

//This deletes list items withe the collected class when the #delete button is clicked.
    $('#delete').click(function(){
    	$('.collected').remove();
    });


	//This will log the #addItems value to the console when the enter key is selected.
	/*$('#addItems').keypress(function(e) {
	    if (e.which == 13) {
	        var toAdd = $('input[name=checkListItem]').val();
        	$('#basket').append('<div class="item">' + toAdd + '</div>');
	});*/
	
});
