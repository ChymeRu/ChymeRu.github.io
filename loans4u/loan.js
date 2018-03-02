var output;

    console.log(firebase);

    var indebtedTo = firebase.database().ref("IndebtedTo/");


indebtedTo.set ({
   Bill: {
      number: 1,
      Debt: 50.0,
   },
	
   Amanda: {
      number: 2,
      Debt: 15.0,
   }
});
    console.log(indebtedTo);

function CreateDebt(){
}

function date(){
	var d = new Date();

	return(d.getYear()*365 + d.getDate());

}