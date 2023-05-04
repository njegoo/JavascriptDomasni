var celsius = prompt("Enter celsius");
var fahrenheit = (celsius / 5) * 9 + 32;
console.log(`${celsius}'C is ${fahrenheit}'F`);
fahrenheit = prompt("Enter Fahrenheit");
celsius = ((fahrenheit - 32) * 5) / 9;
console.log(`${fahrenheit}'F is ${celsius}'C`);
