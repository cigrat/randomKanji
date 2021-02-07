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
	//elem.style.color = colors[getRandomInt (0, colors.length)];
	elem.innerHTML = currentChar;
	document.getElementById('link').href = 'http://www.romajidesu.com/kanji/'+currentChar;
};


document.addEventListener('keydown', function(event) {
	if (event.keyCode == 32) {
		charUpdate('kanji', characters);
		//charUpdate('kanji2', kana);
	};
}, true);	