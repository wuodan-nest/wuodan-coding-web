const add = function(m, n) {
    return m + n;
};

const subtract = function(m, n) {
    return m - n;	
};

const sum = function(numbers) {
    let sumAll = 0;
    numbers.forEach((number) => sumAll += number);
    return sumAll;
};

const multiply = function(numbers) {
    let multiplyAll = 1;
    numbers.forEach((number) => multiplyAll *= number);
    return multiplyAll;

};

const power = function(m, n) {
    return m ** n;	
};

const factorial = function(n) {
    if (n == 0 || n == 1) { // base case
	return 1; 
    }
    else {
	return n * factorial(n-1);
    }
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
