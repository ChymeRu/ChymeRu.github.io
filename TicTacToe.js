//holds x or o
var character = "<div class = 'oCSS'>O</div>";

//changes colors fo X's and O's



//handles X and O turns
function turn(location) {
	if(document.getElementById("winner").innerHTML == "WINNER!!!"){

	}
	else if(document.getElementById(location).innerHTML == ""){
		if(character == "<div class = 'xCSS'>X</div>"){
			character = "<div class = 'oCSS'>O</div>";
		}else{
			character = "<div class = 'xCSS'>X</div>";
		}
		document.getElementById(location).innerHTML = character;

	}
	checkWinner();

}

//clears X's and O's
function clearALL(){
	document.getElementById("r1c1").innerHTML = "";
	document.getElementById("r1c2").innerHTML = "";
	document.getElementById("r1c3").innerHTML = "";
	document.getElementById("r2c1").innerHTML = "";
	document.getElementById("r2c2").innerHTML = "";
	document.getElementById("r2c3").innerHTML = "";
	document.getElementById("r3c1").innerHTML = "";
	document.getElementById("r3c2").innerHTML = "";
	document.getElementById("r3c3").innerHTML = "";
	
}

function checkWinner(winner){
	var winner = "<div id = 'winner'>Winner</div>";
	var r1c1 = document.getElementById("r1c1").innerHTML;
	var r1c2 = document.getElementById("r1c2").innerHTML;
	var r1c3 = document.getElementById("r1c3").innerHTML;
	var r2c1 = document.getElementById("r2c1").innerHTML;
	var r2c2 = document.getElementById("r2c2").innerHTML;
	var r2c3 = document.getElementById("r2c3").innerHTML;
	var r3c1 = document.getElementById("r3c1").innerHTML;
	var r3c2 = document.getElementById("r3c2").innerHTML;
	var r3c3 = document.getElementById("r3c3").innerHTML;
	if(r1c1 == r1c2 && r1c1 == r1c3 && r1c1 != "" ||
	 	r2c1 == r2c2 && r2c1 == r2c3 && r2c1 != "" ||
	 	r3c1 == r3c2 && r3c1 == r3c3 && r3c1 != "" || 
	 	r1c1 == r2c1 && r1c1 == r3c1 && r1c1 != "" ||
	 	r1c2 == r2c2 && r1c2 == r3c2 && r1c2 != "" ||
	 	r1c3 == r2c3 && r1c3 == r3c3 && r1c3 != "" ||
		r1c1 == r2c2 && r1c1 == r3c3 && r1c1 != "" || 
		r3c1 == r2c2 && r3c1 == r1c3 && r3c1 != ""){
		document.getElementById("winner").innerHTML = "WINNER!!!";
		}
}