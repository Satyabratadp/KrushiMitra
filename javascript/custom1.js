// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/agri1.jpeg", 
	 		 "images/agri2.jpg",
			 "images/agri3.jpeg",
			  "images/agri66.jpg",
			   "images/agri5.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})