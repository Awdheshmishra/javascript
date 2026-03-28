function myFunc(theObject) {
  theObject.make = "Toyota";
  theObject.model = "new"
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make);
console.log(myCar.model) // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"
console.log(myCar.model)