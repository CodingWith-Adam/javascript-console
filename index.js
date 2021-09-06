console.log("app.js", { name: "adam" });

console.warn("Something happen");

console.error("app.js", { errorType: "data" });

console.clear();

const data = [
  { name: "adam", favColor: "green" },
  { name: "jane", favColor: "blue" },
];

console.log(data);
console.table(data);

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  console.table(data);
}

//getData();

console.clear();

console.count();
console.count();
console.count();

console.count("button click");
console.count("button click");
console.count("button click");

console.count("cars");
console.count("cars");
console.count("cars");
console.count("button click");

console.countReset("cars");
console.count("cars");

console.clear();

function logMessage() {
  console.trace();
}

function foo() {
  logMessage();
}

foo();

console.clear();

console.group("performance info");
console.log("test");
console.log("test1");
console.log("test2");
console.groupEnd();

console.log("outside group");

console.groupCollapsed("Stats");
console.groupCollapsed("Stats more");
console.log("info");
console.groupEnd();
console.log("test");
console.groupEnd();

console.groupCollapsed("comments from rest API");
getData();
