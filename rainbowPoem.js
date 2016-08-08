var jabberwocky = ["JABBERWOCKY","Lewis Carroll","(from Through the Looking-Glass and What Alice Found There, 1872)","&prime; Twas brillig, and the slithy toves","Did gyre and gimble in the wabe:","All mimsy were the borogoves,","And the mome raths outgrabe.","&Prime; Beware the Jabberwock, my son!","The jaws that bite, the claws that catch!","Beware the Jubjub bird, and shun","The frumious Bandersnatch!&Prime;","He took his vorpal sword in hand:","Long time the manxome foe he sought -- ","So rested he by the Tumtum tree,","And stood awhile in thought.","And, as in uffish thought he stood,","The Jabberwock, with eyes of flame,","Came whiffling through the tulgey wood,","And burbled as it came!","One, two! One, two! And through and through","The vorpal blade went snicker-snack!","He left it dead, and with its head","He went galumphing back.","&Prime; And, has thou slain the Jabberwock?","Come to my arms, my beamish boy!","O frabjous day! Callooh! Callay!&Prime;","He chortled in his joy.","&prime; Twas brillig, and the slithy toves","Did gyre and gimble in the wabe;","All mimsy were the borogoves,","And the mome raths outgrabe."]

var printedJabberwocky = jabberwocky.join("");

var x = document.getElementsByTagName("P");

var i = 0;

var j = 0;

var k = 0;

var l = 0;

var m = 0;

var n = 0;

var p = 0;

function displayPoem(){
	var poemLength = jabberwocky.length;
	for(var i=0; i <= poemLength; i=i+1) {
	  var poemLine = document.createElement("p");
	  var content = document.createTextNode(jabberwocky[i]);
	  poemLine.appendChild(content);
	  document.body.appendChild(poemLine);
	}
}

function startRed(){
	turnRed();
	var timer = setInterval(turnRed, 200);
}

function turnRed(){
	if(i<x.length){
		x[i].style.color = "red";
		i = i + 1;
	}
	else{
		startOrange();
	}
}

function startOrange(){
	turnOrange();
	var timer = setInterval(turnOrange, 500);
}

function turnOrange(){
	if(j<x.length){
		x[j].style.color = "orange";
		j = j + 1;
	}
	else{
		startYellow();
	}
}

function startYellow(){
	turnYellow();
	var timer = setInterval(turnYellow, 1000);
}

function turnYellow(){
	if(k<x.length){
		x[k].style.color = "yellow";
		k = k + 1;
	}
	else{
		startGreen();
	}
}

function startGreen(){
	turnGreen();
	var timer = setInterval(turnGreen, 200);
}

function turnGreen(){
	if(l<x.length){
		x[l].style.color = "green";
		l = l + 1;
	}
	else{
		startBlue();
	}
}

function startBlue(){
	turnBlue();
	var timer = setInterval(turnBlue, 200);
}

function turnBlue(){
	if(m<x.length){
		x[m].style.color = "blue";
		m = m + 1;
	}
	else{
		startIndigo();
	}
}

function startIndigo(){
	turnIndigo();
	var timer = setInterval(turnIndigo, 200);
}

function turnIndigo(){
	if(n<x.length){
		x[n].style.color = "indigo";
		n = n + 1;
	}
	else{
		startViolet();
	}
}

function startViolet(){
	turnViolet();
	var timer = setInterval(turnViolet, 200);
}

function turnViolet(){
	if(p<x.length){
		x[p].style.color = "violet";
		p = p + 1;
	}
}

