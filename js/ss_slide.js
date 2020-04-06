$(function(){
	
	var mySlider=$("#pro_1 ul").bxSlider({
		mode:"horizontal", //수평방향으로 이동합니다
			speed: 500, //이동속도(500:0.5초)
			pager: false, //페이징표시제어숨김
			moveSlides: 1, //이동 슬라이드 수
			slideWidth: 500, //각 슬라이드 수
			minSlides: 3, //최소 노출 슬라이드 수
			maxSlides: 3, //최대 노출 슬라이드 수
			slideMargin: 30, //슬라이드간의 간격
			auto: true, //자동 슬라이드 여부
			autoHover: true, //마우스 오버시 자동정지
			controls: false //이전 다음 버튼을 숨긴다	
	});
	
	$("#arrow1").on("click", function(){
		mySlider.goToPrevSlide(); //슬라이드 한 단계 이전으로 이동
		
		return false; //<a>태그의 링크 차단
	});
	
	$("#arrow2").on("click", function(){
		mySlider.goToNextSlide(); //슬라이드 한 단계 이전으로 이동
		
		return false; //<a>태그의 링크 차단
	});
	
});
