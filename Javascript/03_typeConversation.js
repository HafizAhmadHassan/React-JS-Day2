let score ="33abc";
console.log(typeof score)
console.log(typeof(score))

let valueInNumber =Number(score)
console.table({ score, valueInNumber})

score = null;
valueInNumber =Number(score)
console.table({ score, valueInNumber})

score = null;
valueInNumber =Number(score)
console.table({ score, valueInNumber})

// "33abc" => NaN => Not a Number

let isLoggedIn = 1; // empty "" -> false;  "Hassan" -> true
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.table({ isLoggedIn, booleanIsLoggedIn });

let someNumber = 33;
let stringNumber = String(someNumber);
console.table({ someNumber, stringNumber });