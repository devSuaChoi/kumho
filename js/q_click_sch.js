// $(function(){
// 	$("#sch").on("click", function() {
// 		$(".q_sch").toggle("slow");
// 	});
// });

$(function(){
    
	var duration= 500;
	var aside=$(".q_sch");
	$("#sch")
	.click(function() {   // find, aside button
		aside.toggleClass("open");
		//toggleClass("클래스명") 오픈 지징요소검사로 확인
		if(aside.hasClass("open")) { //aside가 openClass가지고 있다면
			aside.stop().animate({opacity:0}, duration, "easeOutBack")
			//메뉴영역이 움직이고 멈춰라. 왼쪽으로 -52 버튼값 만큼 음수 적용
			// $("#quick_menu").animate({right:"210px"},duration,"easeOutBack");
		} else{
			aside.stop().animate({opacity:1}, duration, "easeOutQuad" );
			// $("#quick_menu").animate({right:"0"},duration,"easeOutQuad");
		}
		return false;
	});
});