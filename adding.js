
var Operator = randomOperator();

var Denominator = [[4,2],[9,3],[6,2],[6,3],[8,2],[8,4],[10,2],[10,5]];

function randomNumber(){
	return Math.floor(Math.random() * 100);
}
function randomNumberMultiply(){
	return Math.floor(Math.random() * 11);
}

function randomOperator(){
	return Math.floor(Math.random() * 4);
}
function randomDivision(){
	return Math.floor(Math.random() * 8);
}

function AssignNumbers(){
	var Division = randomDivision();
	console.log(randomOperator());
	Operator = randomOperator();
	if(Operator == 0){
		document.getElementById("Operator").innerHTML = "+";
	}
	else if(Operator == 1){
		document.getElementById("Operator").innerHTML = "-";
	}
	else if(Operator == 2){
		document.getElementById("Operator").innerHTML = "x";
	}
	else if(Operator == 3){
		document.getElementById("Operator").innerHTML = "/";
	}
  
	if(Operator == 0 || Operator == 1){
		document.getElementById("number1").innerHTML = randomNumber();
		document.getElementById("number2").innerHTML = randomNumber();
	}
	else if (Operator == 2){
		document.getElementById("number1").innerHTML = randomNumberMultiply();
		document.getElementById("number2").innerHTML = randomNumberMultiply();
	}
	else if (Operator == 3){
		document.getElementById("number1").innerHTML = Denominator[Division][0];
		document.getElementById("number2").innerHTML = Denominator[Division][1];
	}

	document.getElementById("Correct").innerHTML = "";

}

function compute(){
	var number1 = document.getElementById("number1").innerHTML;
	var number2 = document.getElementById("number2").innerHTML;
	var output = document.getElementById("output").value;
	if(Operator == 0){
		if(parseInt(number1) +  parseInt(number2) == parseInt(output)){
			document.getElementById("Correct").innerHTML = "CORRECT!!!";
		}else{
			document.getElementById("Correct").innerHTML = "WRONG!!!";
		}
	} else if (Operator == 1){
		if(parseInt(number1) -  parseInt(number2) == parseInt(output)){
			document.getElementById("Correct").innerHTML = "CORRECT!!!";
		}else{
			document.getElementById("Correct").innerHTML = "WRONG!!!";
		}
	}else if (Operator == 2){
		if(parseInt(number1) *  parseInt(number2) == parseInt(output)){
			document.getElementById("Correct").innerHTML = "CORRECT!!!";
		}else{
			document.getElementById("Correct").innerHTML = "WRONG!!!";
		}
	}else if (Operator == 3){
		if(parseInt(number1) /  parseInt(number2) == parseInt(output)){
			document.getElementById("Correct").innerHTML = "CORRECT!!!";
		}else{
			document.getElementById("Correct").innerHTML = "WRONG!!!";
		}
	}

}