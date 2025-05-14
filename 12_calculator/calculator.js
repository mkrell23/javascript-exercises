const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => (sum + current), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => (total * current));
};

const power = function(a, b) {
	let returnNum = 1
  for (let i = 1; i <= b; i ++){
    returnNum *= a
  }

  return returnNum
};

const factorial = function(number) {
	let returnNum = 1
  for (let i = 1; i <= number; i ++)
  {
    returnNum *= i;
  }

  return returnNum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
