function myIF(){
	let age, access;
	age = Number(document.getElementById("age").value);
	if(isNaN(age)){
		alert("Please enter a number");
	}else{
		access = (age < 18) ? "Access to website denied." : "Access to website granted.";
	}
	document.getElementById("js1").innerHTML = access;
}

function myFOR(){
	let cars = ["BMW", "Volvo", "Audi", "Toyota"];
	let i; 
	let result = "<ul>"; 
	let len = cars.length;
	for (i=0; i < len; i++){
		if(i==2){	
			continue;}
		result +="<li>" + cars[i] + "</li>";
	}
document.getElementById("js2").innerHTML = result;
}

function myDoWhile(){
	let characteristics = ["Generosity", "Kindness", "Sincerity", "Optimism"];
	let txt = "<ol>";
	let i=0;
	let text = "My personal characteristics:";
	do{
		txt += "<li>" + characteristics[i] + "</li>";
		i++;
	}
	while(i < characteristics.length);
	document.getElementById("js3").innerHTML = text;
	document.getElementById("js4").innerHTML = txt;
}


