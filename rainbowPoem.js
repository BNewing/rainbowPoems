var jabberwocky = ["JABBERWOCKY","Lewis Carroll","(from Through the Looking-Glass and What Alice Found There, 1872)","&prime; Twas brillig, and the slithy toves","Did gyre and gimble in the wabe:","All mimsy were the borogoves,","And the mome raths outgrabe.","&Prime; Beware the Jabberwock, my son!","The jaws that bite, the claws that catch!","Beware the Jubjub bird, and shun","The frumious Bandersnatch!&Prime;","He took his vorpal sword in hand:","Long time the manxome foe he sought -- ","So rested he by the Tumtum tree,","And stood awhile in thought.","And, as in uffish thought he stood,","The Jabberwock, with eyes of flame,","Came whiffling through the tulgey wood,","And burbled as it came!","One, two! One, two! And through and through","The vorpal blade went snicker-snack!","He left it dead, and with its head","He went galumphing back.","&Prime; And, has thou slain the Jabberwock?","Come to my arms, my beamish boy!","O frabjous day! Callooh! Callay!&Prime;","He chortled in his joy.","&prime; Twas brillig, and the slithy toves","Did gyre and gimble in the wabe;","All mimsy were the borogoves,","And the mome raths outgrabe."]

var dreamWithinADream = ["A Dream Within A Dream by Edgar Allan Poe", "Take this kiss upon the brow!", "And, in parting from you now,","Thus much let me avow--","You are not wrong, who deem","That my days have been a dream;","Yet if hope has flown away","In a night, or in a day,","In a vision, or in none,","Is it therefore the less gone?","All that we see or seem","Is but a dream within a dream.","I stand amid the roar","Of a surf-tormented shore,","And I hold within my hand","Grains of the golden sand--","How few! yet how they creep","Through my fingers to the deep,","While I weep--while I weep!","O God! can I not grasp","Them with a tighter clasp?","O God! can I not save","One from the pitiless wave?","Is all that we see or seem","But a dream within a dream?"]

var x = document.getElementsByTagName("P");

var poem;

var j=0;

function jabberwockySelected(){
	poem = jabberwocky;
	displayPoem();
}

function dreamWithinADreamSelected(){
	poem = dreamWithinADream;
	displayPoem();
}

function stopTheRainbow(){
	j=1;
}

function displayPoem(){
	document.getElementById("poem1").disabled = true;
	document.getElementById("poem2").disabled = true;
	var poemLength = poem.length;
	for(var i=0; i < poemLength; i=i+1) {
		var poemLine = document.createElement("p");
		var content = document.createTextNode(poem[i]);
		poemLine.appendChild(content);
		document.body.appendChild(poemLine);
	}
}

function turn(color, nextFunction, n=0){
	if(j===1){
		document.getElementsByTagName("p").style.color = "black";
	}
	if(n<x.length){
		x[n].style.color = color;
		setTimeout(turn, 10, color, nextFunction, n+1);
	}
	else{
		setTimeout(nextFunction, 0);
	}
}

function startRed(){
	j=0;
	turnRed(0);
}

function turnRed(n=0){
	turn("red", turnOrange)
}

function turnOrange(n=0){
	turn("orange", turnYellow)
}

function turnYellow(n=0){
	turn("yellow", turnGreen)
}

function turnGreen(n=0){
	turn("green", turnBlue)
}

function turnBlue(n=0){
	turn("blue", turnIndigo)
}

function turnIndigo(n=0){
	turn("indigo", turnViolet)
}

function turnViolet(n=0){
	turn("violet", turnRed)
}