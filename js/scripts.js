$(document).ready(function(){

<<<<<<< HEAD

=======
>>>>>>> 9f7f73c0727ab473d7417905d9b988f8d6f532a2
//This adds the checkListItem value to the list as a list item when the addThis button is clicked.
	$('#addThis').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('#list').append('<li class="items"><button class="listButton">Got it!</button><span>' + toAdd + '</span></li>');
<<<<<<< HEAD
=======
        //this will clear the input box after the entry has been submitted.
>>>>>>> 9f7f73c0727ab473d7417905d9b988f8d6f532a2
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
<<<<<<< HEAD
=======

>>>>>>> 9f7f73c0727ab473d7417905d9b988f8d6f532a2

//This adds the checkListItem value to the list as a list item when the enter key is pressed.
	$('#addItems').keypress(function(e) {
	    if (e.which == 13) {
	        var toAdd = $('input[name=checkListItem]').val();
        	 $('#list').append('<li class="items"><button class="listButton">Got it!</button><span>' + toAdd + '</span></li>');
            $('input[name=checkListItem]').val('')
        }
	});
	
});
