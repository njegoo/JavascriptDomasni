let LandscapeOrPortrait = (width, height) => {
  if (width > height) {
    return `This is a landscape picture`;
  } else {
    return `This is a portrait picture`;
  }
};
console.log(LandscapeOrPortrait(100, 500));
