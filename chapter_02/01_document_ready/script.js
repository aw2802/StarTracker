$(document).ready(function(){
  $("#celebs tbody tr:even").addClass("zebra")

  // $('#hideButton').click(function(){
  // 	$('#disclaimer').hide();        
  // })

  // $('#showButton').click(function(){
  // 	$('#disclaimer').show();
  // })

$('#toggleButton').click(function(){
	if($('#disclaimer').is(':visible')){
		$('#disclaimer').hide();
	}
	else{
		$('#disclaimer').show();
	}
 })
});