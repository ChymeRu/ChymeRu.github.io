var Date1 = new Date();

function TimeSince(){
	var Date2 = new Date();
	Date2 = Date2/1000;

	Date1 = Date1/1000;

	var output = Date2 - Date1;
	alert(output);
}