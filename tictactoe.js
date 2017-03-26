currentPlayer = "X" 
	gameIsOpen = true
	turns = 0
	
	function reset() {
		currentPlayer = "X"
		gameIsOpen = true
		turns = 0
		buildField()
		document.getElementById('Status').innerHTML = "Player X Turn"
	}
	
	function buildField() {
		elem = document.getElementById('PlayField');
		text = "";
		for (i = 0; i < 9; i++) {
			if (i % 3 == 0) {
				text += "<tr>"
			}
			text += '<td class="free" id="f' + i + '" onclick="clickedEle(' + i + ')"></td>'
			if (i % 3 == 2) {
				text += "</tr>"
			}
		}
		elem.innerHTML = text;
	}
	
	function clickedEle(at) {		
		elem = document.getElementById('f' + at)
		if(elem.innerHTML == "" && gameIsOpen) {
			elem.innerHTML = "<b>"+ currentPlayer +"</b>";
			elem.className = "used"
			turns++
			checkGameState()
			if(currentPlayer == "X") {
				currentPlayer = "O"
			} else {
				currentPlayer = "X"
			}
			if(gameIsOpen) {
				document.getElementById('Status').innerHTML = "Player " + currentPlayer +" Turn"
			}			
		}
	}
	
	function checkGameState() {
		gameIsWon = false
		gameIsDraw = false
		
		for (i = 0; i < 3; i++) {
			if (document.getElementById('f' + i).innerHTML != "" 
			&& document.getElementById('f' + (i+0)).innerHTML == document.getElementById('f' + (i+3)).innerHTML 
			&& document.getElementById('f' + (i+3)).innerHTML == document.getElementById('f' + (i+6)).innerHTML) {
				gameIsWon = true
				for (j = 0; j < 3; j++) {
					document.getElementById('f' + (i + (j * 3))).className = "won"
				}
			}
			if(document.getElementById('f' + (i*3)).innerHTML != "" 
			&& document.getElementById('f' + ((i*3))).innerHTML == document.getElementById('f' + ((i*3+1))).innerHTML 
			&& document.getElementById('f' + ((i*3+1))).innerHTML == document.getElementById('f' + ((i*3+2))).innerHTML) {
				gameIsWon = true
				for (j = 0; j < 3; j++) {
					document.getElementById('f' + ((i*3) + (j))).className = "won"
				}
			}
		}
		if (document.getElementById('f4').innerHTML != "" 
			&& (document.getElementById('f0').innerHTML == document.getElementById('f4').innerHTML 
			&& document.getElementById('f4').innerHTML == document.getElementById('f8').innerHTML)){
			gameIsWon = true
			for (j = 0; j < 3; j++) {
					document.getElementById('f' + (j*4)).className = "won"
			}
		}
		if (document.getElementById('f4').innerHTML != "" 
			&& (document.getElementById('f2').innerHTML == document.getElementById('f4').innerHTML 
			&& document.getElementById('f4').innerHTML == document.getElementById('f6').innerHTML)){
			gameIsWon = true
			for (j = 0; j < 3; j++) {
					document.getElementById('f' + ((j*2) + 2)).className = "won"
			}
		}		
		
		if(!gameIsWon && turns == 9) {
			gameIsDraw = true
			for (i = 0; i < 9; i++) {
					document.getElementById('f' + i).className = "draw"
			}
		}
		
		if(gameIsWon) {
			document.getElementById('Status').innerHTML = "Player " + currentPlayer +" Wins!!!"
		}
		if(gameIsDraw) {
			document.getElementById('Status').innerHTML = "Draw :-/"
		}
		
		if (gameIsDraw || gameIsWon) {
			gameIsOpen = false
		}
	}