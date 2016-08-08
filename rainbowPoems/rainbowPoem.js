var jabberwocky = ["JABBERWOCKY","Lewis Carroll","(from Through the Looking-Glass and What Alice Found There, 1872)","&prime; Twas brillig, and the slithy toves","Did gyre and gimble in the wabe:","All mimsy were the borogoves,","And the mome raths outgrabe.","&Prime; Beware the Jabberwock, my son!","The jaws that bite, the claws that catch!","Beware the Jubjub bird, and shun","The frumious Bandersnatch!&Prime;","He took his vorpal sword in hand:","Long time the manxome foe he sought -- ","So rested he by the Tumtum tree,","And stood awhile in thought.","And, as in uffish thought he stood,","The Jabberwock, with eyes of flame,","Came whiffling through the tulgey wood,","And burbled as it came!","One, two! One, two! And through and through","The vorpal blade went snicker-snack!","He left it dead, and with its head","He went galumphing back.","&Prime; And, has thou slain the Jabberwock?","Come to my arms, my beamish boy!","O frabjous day! Callooh! Callay!&Prime;","He chortled in his joy.","&prime; Twas brillig, and the slithy toves","Did gyre and gimble in the wabe;","All mimsy were the borogoves,","And the mome raths outgrabe."]

var printedJabberwocky = jabberwocky.join("");


function displayPoem(){
	var poemLength = jabberwocky.length;
	for(var i=0; i <= poemLength; i=i+1) {
	  var poemLine = document.createElement("p");
	  var content = document.createTextNode(jabberwocky[i]);
	  poemLine.appendChild(content);
	  document.body.appendChild(poemLine);
	}
}

var timer = setInterval(turnColour, 2000)

function turnColour(){
		var x = document.getElementByTagName("P");
		var i;
			for (i=0; i<x.length; i++)
			x[i].style.color = "red";
	}





