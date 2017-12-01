//holds x or o
var character = "<div class = 'oCSS'>X</div>";

//changes colors fo X's and O's

}

//handles X and O turns
function turn(location) {
	document.getElementById(location).innerHTML = character;
	if(character == "<div class = 'oCSS'>O</div>"){
		character = "<div class = 'xCSS'>X</div>";
	}else{
		character = "<div class = 'oCSS'>O</div>";
	}

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