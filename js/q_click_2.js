$(function(){
    
	var duration= 1000;
	var aside=$(".page-main aside");
	$("#quick_menu #all")
	.click(function() {
		aside.toggleClass("open");
		//toggleClass("클래스명") 오픈 지징요소검사로 확인
		if(aside.hasClass("open")) { //aside가 openClass가지고 있다면
			aside.stop().animate({right:"-40px"}, duration, "easeOutBack")
			//메뉴영역이 움직이고 멈춰라. 왼쪽으로 -52 버튼값 만큼 음수 적용
			$("#quick_menu").animate({right:"210px"},duration,"easeOutBack");
		} else{
			aside.stop().animate({right:"-250px"}, duration, "easeOutQuad" );
			$("#quick_menu").animate({right:"0"},duration,"easeOutQuad");
		}
		return false;
	});
});