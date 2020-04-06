
$(function(){
	var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector("#kumho button");
	
	if (window.matchMedia(
	/*fade 어둡게 할때 필요함수구문*/
	'(prefers-reduced-motion)').matches) {
		vid.removeAttribute("autoplay");
		vid.pause();
		pauseButton.innerHTML = "paused";
	}
	
	function vidFade() {
		vid.classList.add("stopfade");
		/*클래스 추가*/
	}
	
	vid.addEventListener('ended', function()
	{
	/*addEventListener는 이벤트를 등록하는 가장 권장되는 방식
		여러개의 이벤트 핸들러를 등록할 수 있다.*/
	
	vid.pause();
	
	vid.Fade();
	});
	
	pauseButton.addEventListener("click", function(){
		vid.classList.toggle("stopfade");
		if (vid.paused) {
			vid.play();
			pauseButton.innerHTML = "pause";
		} else {
			vid.pause();
			pauseButton.innerHTML = "play";
		}
	})
});