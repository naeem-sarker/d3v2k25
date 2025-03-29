// Regular Function
function regularFunction(param1, param2) {
  return param1 + param2;
}
console.log("Regular Function", regularFunction(10, 20));

// Function Expression (Anonymous Function)
const anonymousFunction = function (param1, param2) {
  return param1 + param2;
};
console.log("Anonymous Function", anonymousFunction(10, 20));

// Named Function Expression
const namedFunctionExpression = function addition(param1, param2) {
  return param1 + param2;
};
console.log("Named Function Expression", namedFunctionExpression(10, 20));

// Arrow Function
const arrowFunction = (param1, param2) => {
  return param1 + param2;
};
console.log("Arrow Function", arrowFunction(10, 20));

// Immediately Invoked Function Expression (IIFE)
(function (param1, param2) {
  console.log("IIFE", param1 + param2);
})(10, 20);

// Asynchronous Function
async function asyncFunction() {
  const result = await new Promise((resolve) => resolve("Async Result"));
  console.log(result);
}
asyncFunction();
