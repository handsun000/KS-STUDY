window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", onkeyup, false);

var strKeyEventType = "None";
var strKeyEventValue = "None";

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	Context .fillStyle = "#000000";
	Context .fillRect(0, 0, 800, 600);
	Context .fillStyle = "#ffffff"; //글자 색을 검은 색으로 지정
	Context .font = "25px Aria"; //글자 크기
	Context .textBaseline = "top";
	Context .fillText("입력된 키 :" + strKeyEventValue, 5, 5);
	Context .fillStyle("키 입력 상태 :" + strKeyEventType, 5, 30);
}

function onkeydown (e) {
	// 이곳에서 키를 눌렀을떄의 상황을 처리합니다.
	strKeyEventType = e.type;
	strKeyEventValue = e.key;
	drawScreen();
}

function onkeyup (e) {
	// 이곳에서 키를 댔을때의 상황을 처리합니다.
	strKeyEventType = e.type;
	strKeyEventValue = e.key;
	drawScreen();
}