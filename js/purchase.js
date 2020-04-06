$(function(){

	$(".tab_contant").hide(); 
	$(".tab_contant").first().show();
	
	$("ul.tab_container li").click(function(){
		
		$("ul.tab_container li").removeClass("active").css("color","#fff");
		
		$(this).addClass("active").css("color","#000");
		
		$(".tab_contant").hide();
		//밑으로 나열방지
		
		var activeTab = $(this).attr("rel");
		
		// rel 속성은 a 요소, link 요소, area 요소에서 사용되며, 링크된 대상과의 관계를 지정합니다.
		// li에 연결되있는 링크대상 보여줘
		
		$("#" + activeTab).show();
		
	});
	
});
