$(function(){

		var defaultTop=parseInt($("#quick_menu").css("top"));
		//기본 문서 상단에서 퀵메뉴가 이동한 거리값을 구함
	$(window).on("scroll", function(){
		//스크롤바 이동시킬때마다 이벤트 핸들러의 실행문 실행한다
		var scv=$(window).scrollTop();
		//스크롤바 상단에 이동한 거리값을 구해 변수 scv에 할당한다
		
		$("#quick_menu").stop().animate({top:scv+defaultTop+"px"},500);
		//1초마다 스크롤바가 이동한 만큼 퀵메뉴가 애니메이션이 적용된다 이때 css을 이용해
		//문서 상단에서 벌린 100px만큼 거리가 유지되도록 변수 defaultTop에 할당된 값을 더함
	});

});