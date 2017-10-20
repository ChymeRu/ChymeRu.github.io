var list = ["magic8ball1.png","magic8ball2.png","magic8ball3.png","magic8ball4.png","magic8ball5.png","magic8ball6.png","magic8ball7.png","magic8ball8.png","magic8ball9.png","magic8ball10.png"];

//this is just a test
function testJs(){
	alert("test!");
}

function randomNumber(){
	return Math.floor(Math.random() * 10);


}

function shake8ball(){
	//changes image to random from array

	document.getElementById("magic8ball").src=list[randomNumber()];

	//change text underneath ball

	
	alert("Magic Is Happening...");

}