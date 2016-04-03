$(document).ready(function(){

	// $('.fade').click(function(){
	// 	$('.main').fadeOut()
	//  	$('.second').fadeIn();
	// })

	// hover over a button to change background

	$('button').hover(function(){
		myid = $(this).attr('class')
		value = $(this).attr('value')
		$('#container').addClass(myid + value)
	}, function(){
		$('#container').removeClass(myid + value)
	})

	$('button').click(function(){
		myid = $(this).attr('id')
		value = $(this).attr('value')
		console.log(myid)
		$('#container').addClass(myid + value)
		$('.main').fadeOut()
		$('.second').fadeIn()
	})

//original code
	$('.player1').change(function(){
		// if($('form select').val() === 'bninja'){
		// 	$('#ninja1 .ninja1').toggle();
		// }
		// else if ($('form select').val() === 'rninja'){
		// 	$('#ninja1 .ninja2').toggle();
		// }
		// else if ($('form select').val() === 'yninja'){
		// 	$('#ninja1 .ninja3').toggle();
		// }
		// else if ($('form select').val() === 'blninja'){
		// 	$('#ninja1 .ninja4').toggle();
		// }
		$('.ninja1').show();
		//console.log($('form select').val())
	})


//original code
	$('.player2').change(function(){
		$('.ninja2').show();
		$('.second').fadeOut();
	})



})