var age = prompt("How old are you?");
var maxAge = prompt("How long do you think you will live?");
var amount = prompt("How many snacks do you need per day?");
var need = (maxAge - age) * 365 * 5;
console.log(
  `You will need ${need} to last you untill the ripe old age of ${maxAge}`
);
