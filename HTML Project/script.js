$(document).ready(function(){
	$("#h1").hover(enter,leave);

		function enter() {
			$(this).css('color', 'red')
		}
		function leave(){
			$(this).css('color', 'white')
		}
})

