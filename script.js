function myFunc() {
	
	var a = document.myForm.jeffHgt.value;
	var b = document.myForm.toddHgt.value;
	
	var mass = 75;
	
	var jeffBmi = mass / (a * a);
	var toddBmi = mass / (b * b);
	
	console.log("jeffBmi= " + jeffBmi);
	console.log("toddBmi= " + toddBmi);
	
	var booleanVariable = jeffBmi > toddBmi;
	
	console.log("Is Jeff's BMI higher than Todd's true?: " + booleanVariable);
	
}