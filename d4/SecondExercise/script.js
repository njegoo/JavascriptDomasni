let prog_languages = [
  {
    name: "C++",
    founder: "",
    founder: {
      name: "Bjarne Stroustrup",
      email: "bjarne@gmail.com",
    },
    founded: 1979,
  },
  {
    name: "JavaScript",
    founder: {
      name: "Brendan Eich",
      email: "brendan@gmail.com",
    },
    founded: 1995,
  },
  {
    name: "C#",
    founder: {
      name: "Anders Hejlsberg",
      email: "brendan@gmail.com",
    },
    founded: 2000,
  },
];
console.log(prog_languages);
console.log(prog_languages[0]);
console.log(prog_languages[1].founder.email);
let php = {
  name: "PHP",
  founder: {
    name: "Rasmus Lerdorf",
    email: "rasmus@gmail.com",
  },
  founded: 1994,
};
prog_languages.unshift(php);

let python = {
  name: "Python",
  founder: {
    name: "Guido van Rossum",
    email: "guido@gmail.com",
  },
  founded: 1991,
};
prog_languages.push(python);
console.log(prog_languages[0], prog_languages[prog_languages.length - 1]);
