let red = [""];
console.log(red);
for (let i = 0; i <= 7; i++) {
  for (let j = 0; j <= 7; j++) {
    if (i % 2 == 0 && j % 2 == 0) {
      red += "□ ";
    } else if (i % 2 == 0 && j % 2 != 0) {
      red += "■ ";
    } else if (i % 2 != 0 && j % 2 == 0) {
      red += "■ ";
    } else if (i % 2 != 0 && j % 2 != 0) {
      red += "□ ";
    }
  }
  console.log(red);
  red = "";
}
