// On click for submit button.
$("#submit").on('click', function() {

// Variables for information that entered and to be passed to table.
	var trainName = $('#trainName').val().trim();
		console.log(trainName);
		console.log('---------------------------');

	var destination = $('#destination').val().trim();
		console.log(destination);
		console.log('---------------------------');

	var firstTrainTime = $('#firstTrainTime').val().trim();
		console.log(firstTrainTime);
		console.log('---------------------------');

	var frequency = $('#frequency').val().trim();
		console.log(frequency);
		console.log('---------------------------');

})

// Functions used to pass info to table
$(document).ready(function(){
  $("#submit").click(function(){
      $row = $('<tr/>');
      for(i=1; i<=5; i++){
          cellVal = i < 5 ? $('form'+i).val() //: $("input[name=sem]:checked").val();
          $row.append($("<td/>").text(cellVal));
      }
    

$('#frequency').append().moment($.date());

