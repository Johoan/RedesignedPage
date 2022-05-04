
	
		$(document).ready(function(){
  $(".sizechange").mouseover(function(){
    $(".sizechange").css("background-color", "#b90415");
	$(".sizechange").css("fontSize", "30px");
	$(".sizechange").css("borderRight", " 1px solid white");
  });
  $(".sizechange").mouseout(function(){
    $(".sizechange").css("background-color", "#333");
	$(".sizechange").css("fontSize", "17px");
	$(".sizechange").css("borderRight", "none");
  });
});
	