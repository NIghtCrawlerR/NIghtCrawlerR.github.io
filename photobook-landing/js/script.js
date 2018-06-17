var open = false;
$(".dropdown").click(function(){
	if(!open){
		$(".dropdown-content").animate({height: "100%"});
		$(".dropdown-content").css("visibility", "visible");
		open = true;
	}
	else{
		$(".dropdown-content").animate({
			height: "10px"}, 
			{
				complete: function() {
      			$( this ).css( "visibility", "hidden" );
    		}
		});
		open = false;
	}
	return open;
});