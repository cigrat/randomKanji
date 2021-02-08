var char = characters;

function invertHex(hex) {
	return '#'+(Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}
invertHex('00FF00');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

function charUpdate(varID, set){
	var elem = document.getElementById(varID);
	var currentChar = set.charAt(getRandomInt (0, set.length));
	elem.innerHTML = currentChar;
	document.getElementById('link').href = 'http://www.romajidesu.com/kanji/'+currentChar;
	//elem.style.color = colors[getRandomInt (0, colors.length)];
};

function onload(varID, set){
	charUpdate(varID, set);
	changeBG();
}

function changeBG () {
	document.getElementById('everything').style.background = (colors[getRandomInt (0, colors.length)]);
}

function toggleFont() {
	var x = document.getElementById('kanji');
	if (x.style.fontFamily == "var(--sans)") {
  	x.style.fontFamily = "var(--serif)";
  } else {
    x.style.fontFamily = "var(--sans)";
	}
}

function toggleKana() {
	if (char == characters) {
		char = kana;
	} else {
		char = characters;
	}
	charUpdate('kanji', char);
}

document.addEventListener('keydown', function(event) {
	if (event.keyCode == 32) {
		charUpdate('kanji', char);
		//charUpdate('kanji2', kana);
	} else if (event.keyCode == 70){
		toggleFont();
	} else if (event.keyCode == 67){
		changeBG();
	} else if (event.keyCode == 75){
		toggleKana();
	}

}, true);
