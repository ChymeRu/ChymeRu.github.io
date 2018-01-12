
function randomNumber(){
	return Math.floor(Math.random() * 100);
}

function AssignNumbers(){
	document.getElementById("number1").innerHTML = randomNumber();
	document.getElementById("number2").innerHTML = randomNumber();

}

function compute(){
	var number1 = document.getElementById("number1").innerHTML;
	var number2 = document.getElementById("number2").innerHTML;
	var output = document.getElementById("output").value;
	if(parseInt(number1) +  parseInt(number2) == parseInt(output)){
		document.getElementById("Correct").innerHTML = "CORRECT!!!";
	}else{
		document.getElementById("Correct").innerHTML = "WRONG!!!";
	}
}