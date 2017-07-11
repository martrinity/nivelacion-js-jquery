$(document).ready(function(){

 	console.log("El documento está listo :)")

 	$(".js-show-recipe").click(function(){
 		event.preventDefault();
 		$("#div-container").removeClass("make");
 		$(".js-show-recipe").addClass("active");
 		$(".js-show-make").removeClass("active");
 	});

 	$(".js-show-make").click(function(){
 		event.preventDefault();
 		$("#div-container").addclass("make");
 		$(".js-show-make").addclass("active");
 		$(".js-show-recipe").removeClass("active");
 	});

});