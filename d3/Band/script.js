let numPlayers = prompt("How many musicians are in the band?");
switch (numPlayers) {
  case "2":
    console.log("The band is a duo");
    break;
  case "3":
    console.log("The band is a trio");
    break;
  case "4":
    console.log("The band is a quartet");
    break;
  case "5":
    console.log("The band is a quintet");
    break;
  case "6":
    console.log("The band is a sextet");
    break;
  case "7":
    console.log("The band is a septet");
    break;
  case "8":
    console.log("The band is a octet");
    break;
  case "9":
    console.log("The band is a nonet");
    break;
  case "10":
    console.log("The band is a decet");
    break;
  default:
    console.log("You have entered an invalid num of musicians for a band");
}
