window.onload = function() {
	for (var i = 0; i <= 127; i++) {
		if (i <= 127) {
			var block = "<div class='block'></div>";
			document.getElementById('inner').innerHTML += block;
		} else {
			console.log('DISCO!');
		}
	}

	function showInner() {
		document.getElementById('inner').style.display = 'initial';
	}

	document.getElementById('disc').addEventListener("click", function() {
		discoNow();
		intervalNow();
		playAudio();
		showInner();
	});

	function discoNow() {

		var randomOne = '#' + Math.floor(Math.random() * 16777215).toString(16);
		var randomTwo = '#' + Math.floor(Math.random() * 16777215).toString(16);
		var randomThree = '#' + Math.floor(Math.random() * 16777215).toString(16);
		var randomNum = Math.floor((Math.random() * 500) + 1) + 'px';
		
		var blocks = document.getElementsByClassName('block');
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].style.background = randomOne;
		}

		document.getElementById('disc').style.color = randomTwo;
		document.getElementById('disc').style.fontSize = randomNum;
		document.getElementById('disc').innerHTML = 'DISCO!';
		

		document.getElementsByTagName('body')[0].style.background = randomThree;

	};

	function intervalNow() {
		setInterval(function() {
			discoNow();
		}, 120);
	};

	function playAudio() {
		var audio = new Audio('stayin.mp3');
		audio.loop = true;
		audio.play();
	};

};