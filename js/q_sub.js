$(function(){
	$("ul.submenu").hide();

	$("li.main").click(function(){
		$("ul.submenu",this).slideToggle("slow");
	});
});