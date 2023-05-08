let diploma = prompt("What kind of completed education do you have?");
switch (diploma) {
  case "no high school diploma":
    console.log("The average sallary is 10k USD");
    break;
  case "a high school diploma":
    console.log("The average sallary is 20k USD");
    break;
  case "an Associate's degree":
    console.log("The average sallary is 30k USD");
    break;
  case "a Bachelor's degree":
    console.log("The average sallary is 40k USD");
    break;
  case "a Master's degree":
    console.log("The average sallary is 50k USD");
    break;
  case "a Professional degree":
    console.log("The average sallary is 60k USD");
    break;
  case "a Doctoral degree":
    console.log("The average sallary is 70k USD");
    break;
  default:
    console.log("Your input is invalid");
}
