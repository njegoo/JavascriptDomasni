let CountBs = (phrase, letter) => {
  let counter = 0;
  for (let bukva of phrase) {
    if (bukva == letter) {
      counter++;
    }
  }
  return `There are ${counter} ${letter.toUpperCase()}'s in the phrase "${phrase}"`;
};
console.log(CountBs("aabbccB  B", "a"));
