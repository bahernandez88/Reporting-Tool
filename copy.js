	

function copier(){
	//Variable declaration

	let copy = "";

	let site = document.getElementById("site");
	let bldg = document.getElementById("bldg");
	let users = document.getElementById("users");
	let issue = document.getElementById("issue");
	let ticket = document.getElementById("ticket");
	
	copy = "Site: " + site.value;
	copy += "\nBldg: " + bldg.value;
	copy += "\nUsers: " + users.value;
	copy += "\nIssue: " + issue.value;
	copy += "\nTicket: " + ticket.value;

	navigator.clipboard.writeText(copy);
	
	
	
	//output.innerHTML = myInput;
	
	//myInput.forEach(copyItem);
	
	
}

function copyCall(){
	//Variable declaration, possibley change this to a class and querySelector all later
	let category = document.getElementById("category");
	let one = document.getElementById("one");
	let two = document.getElementById("two");
	let three = document.getElementById("three");
	let four = document.getElementById("four");
	let five = document.getElementById("five");

	let clipboard = "";

	clipboard += category.value + "\n---------------\n";

	clipboard += "*" + one.value + "\n*" + two.value + "\n*" + three.value + "\n*" + four.value + "\n*" + five.value;

	navigator.clipboard.writeText(clipboard);

}





