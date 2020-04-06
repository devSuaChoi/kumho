$(function(){
				
	/*팝업 연동*/
	if($.cookie("pop")!="no")$("#pop_wrap").fadeIn("fast");/*"pop"쿠키의 값이
		"no"가 저장되어있지 않으면 숨겨져있던 팝업을 노출합니다*/

	$("#pop_wrap").css("cursor","move").draggable();
	/*id가 pop_wrap인 요소에 드래그기능을 적용*/
	/*draggable1.10.4 ul를 연결했기 때문에
	마우스로 이리저리 움직일 수 있음*/
	
	$("#pop_wrap area:eq(0)").on("click", function(){
		/*닫기 버튼을 누르면 이벤트 핸들러에 실행됩니다*/
		
		$("#pop_wrap").fadeOut("fast");
		/*id가 pop_wrap인 요소가 투명해지며 사리진다*/
		
		return false; /*링크차단*/
	});
		
		$("#pop_wrap area:eq(1)").on("click", function(){
			/*하루동안 이창을 열지않기 버튼을 클릭하면
			이벤트 핸들러에 실행물이 실행*/
			$.cookie("pop","no",{expires:1});
			/*{expires:만료일}*/
			/*하루동안 pop로 쿠키값 no 가 저장*/
			$("#pop_wrap").fadeOut("fast");
			/*id가 pop_wrap인 요소가 투명해지며 사라진다*/
			
			return false; /*링크차단*/
		});
});