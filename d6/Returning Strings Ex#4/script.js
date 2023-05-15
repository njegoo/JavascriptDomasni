let ReturningStrings = (obj, dataType) => {
  let endArray = Object.values(obj).filter((vrednost) => {
    return typeof vrednost === dataType;
  });
  return endArray;
};
let person = {
  born: 1999,
  firstName: "Njegosh",
  lastName: "Petrushevski",
  heigh: 180,
};
console.log(ReturningStrings(person, "number"));
console.log(ReturningStrings(person, "string"));
