var MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, country: "Tanzania" },
  { name: "Everest", height: 8848, country: "Nepal" },
  { name: "Mount Fuji", height: 3776, country: "Japan" },
  { name: "Mont Blanc", height: 4808, country: "Italy/France" },
  { name: "Vaalserberg", height: 323, country: "Netherlands" },
  { name: "Denali", height: 6168, country: "United States" },
  { name: "Popocatepetl", height: 5465, country: "Mexico" },
];
let keys = Object.keys(MOUNTAINS[0]);
const table = document.createElement("table");
table.style.border = "2px solid black";
const trHead = document.createElement("tr");
trHead.style.border = "2px solid black";
for (let i = 0; i < 3; i++) {
  const thHead = document.createElement("th");
  thHead.style.border = "2px solid black";
  thHead.appendChild(document.createTextNode(keys[i]));
  trHead.appendChild(thHead);
  table.appendChild(trHead);
}
for (let j = 0; j < MOUNTAINS.length; j++) {
  const tr = document.createElement("tr");
  let values = Object.values(MOUNTAINS[j]);
  for (let x = 0; x < 3; x++) {
    const td = document.createElement("td");
    td.style.border = "2px solid black";
    td.appendChild(document.createTextNode(values[x]));
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);
