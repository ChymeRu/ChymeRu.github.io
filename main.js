var list = ["magic8ball1.png","magic8ball2.png","magic8ball3.png","magic8ball4.png","magic8ball5.png","magic8ball6.png","magic8ball7.png","magic8ball8.png","magic8ball9.png","magic8ball10.png"];

//this is just a test
function testJs(){
	alert("test!");
}

function randomNumber(){
	return Math.floor(Math.random() * 10);


}

function callImage(){
	document.getElementById("magic8ball").src=list[randomNumber()];
}

function returnImage(){
	document.getElementById("magic8ball").src = "magic8ball.png";
}

function returnParagraph(){
	document.getElementById("results").innerHTML = "Click the Magic 8 Ball to tell your fortune."
}

function shake8ball(){
	//changes image to random from array

	document.getElementById("results").innerHTML = "Magic is hapenning...";
	document.getElementById("magic8ball").src = "spinning_eight_ball.gif";

	setTimeout(callImage,2000);

	setTimeout(returnParagraph,2000);

	setTimeout(returnImage, 7000)


	//document.getElementById("magic8ball").src=list[randomNumber()];

	//change text underneath ball


}