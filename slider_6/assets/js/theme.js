(function($){
	'use strict';



	$(".iconss").click(function(){
		$("i.icofont-home").addClass("amarclass");
		
	});



	$(".iconss2").click(function(){
		$("i.icofont-home").removeClass("sssssss");
	});


	$('.mons-slide').slick({
		autoplay: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		pauseOnHover: false,

	 });
	 




})(jQuery);