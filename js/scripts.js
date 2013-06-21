$(document).ready(function(){

    $('ul').sortable();

//This adds the checkListItem value to the list as a list item when the addThis button is clicked.
	$('#addThis').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('#list').append('<li class="items"><button class="listButton">Got it!</button><span>' + toAdd + '</span></li>');
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

//This adds the checkListItem value to the list as a list item when the enter key is pressed.
	$('#addItems').keypress(function(e) {
	    if (e.which == 13) {
	        var toAdd = $('input[name=checkListItem]').val();
        	 $('#list').append('<li class="items"><button class="listButton">Got it!</button><span>' + toAdd + '</span></li>');
            $('input[name=checkListItem]').val('')
        }
	});
	
});
