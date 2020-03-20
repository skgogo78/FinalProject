//드래그앤 드롭 
function dragEnter(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		console.dir(ev.target);
		ev.target.id = 'drag';
		ev.dataTransfer.setData("text", ev.target.id);
	}
//target : 태그 오브젝트 에대애서 반영한다. id의 프로퍼티를 정의해주고 (가상의id를 만들어줌)
//dataTransfer : "text" 라는 오브젝트에 넣어서 drop 할때의 값에 적용해 준다 	
	
	function drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		var dragObj = document.querySelector('#' + data);
		ev.target.appendChild(dragObj);
		dragObj.id = '';
	}
//dragObj.id = ''; 가상의 아이디를 삭제 ->매번 중복된 값을 새로 id를 만들어 주어야 하기때문 	

//글 선택시 생성되는 박스 
function selectbtn(){
	//                                                                   ↓닫힘 버튼 눌렀을때 배경화면 사라짐
//	const box = boxFun('박스에 박스', false, null, false, 'innerBox', null, true);

	
	const div1 = addObject(null, 'div', 'writeContent');
	
	const wpic = addObject(div1, 'p', 'wpic', true, (o)=>{
		o.innerHTML = `<span>담당자</span><input class="wtxt" type="text" placehoder="닝겐"/>`;
	});
	const wtitle = addObject(div1, 'p', 'wtitle', true, (o)=>{
		o.innerHTML = `<span>제목</span><input class="wtxt" type="text" placehoder="닝겐"/>`;
	});
	const wdate = addObject(div1, 'p', 'wdate', true, (o)=>{
		o.innerHTML = `<span>날짜</span><input class="wtxt" type="text" placehoder="닝겐"/>`;
	});
	const wcontent = addObject(div1, 'textarea', 'wcontent', true, (o)=>{
		
		o.value = "다양한 내용이 여기에 들어 가야하고 지도, 파일 업드...? ";
	});
	
	const box = boxFun('일정', true, [ div1 ],false,'innerBox',null,true);
	
	box();
}

//글 새로 쓰기 버튼 
function insertbtn() {
	
	const box = boxFun('일정 추가',true,[]);
	
}





