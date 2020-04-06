$(function(){
	
	/* 클릭 이벤트를 등록 하기 위해서
	포토 목록에 10개의 <a>를 모두 선택*/
	var list_zone=document.getElementById("inner_list");
	//아이디 inner_list요소 잡아와 변수 list_zone에 할당해
	var list_a=list_zone.getElementsByTagName("a");
	//li의 작은 그림 a태그요소 잡아와 변수 list_a에 할당해
	
	/*포토 리스트의 모든 <a>에 클릭 이벤트를 등록하기 위해서
	for반복문을 이용하여 8개의 <a>에 모두 이벤트 등록.*/
	
	/*포토 목록에 작은 이미지를 클릭했을 때 
	큰 이미지를 바꿉니다*/
	
	for(var i=0; i<list_a.length; i++){
		
	//처음 인덱스 번호 i변수 저장
	//작은 그림 전체개수 10보다 작으면 계속 증가 반복해
		list_a[i].onclick=function(){ // a 인덱스번호 클릭했을 때
			
			var ph=document.getElementById("s_vid").children[0];
			//변수 ph에 photo의 처음 자식 할당하고
			
			ph.src=this.href;
			//photo메인그림을 인덱스차례에 해당자식의 연동 큰그림으로 바꿔
			
			return false; //<a>를 클릭했을 때 링크가 되지 않도록
		}
	}
	
	//소그림 클릭 대그림으로 바뀜
	
});