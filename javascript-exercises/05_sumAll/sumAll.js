// function factorial(n) {
//     if (n === 0) {
//         return 1; // base case
//     } else {
//         return n * factorial(n-1); // recursive case
//     }
// }

// using recursive syntax to try generating

// sum(n,m) where n and m are greater than or equal to 0
// if n=m=x then the answer is x || if n=m=x then answer is 0 as no whole integers between range
// anything other than whole number inputs should give error - strs , floats, negative, arrays

// sort parameter function in an ascending order
// check if the parameters are int and give error for everything else

// const sortArg = funtion(...integers) {
    

const sumAll = function(n,m) {
    if (!Number.isInteger(n,m) || // check if whole integer
	!(Math.sign(n,m) === 1) || // check if positive
	!((typeof n && typeof m) == "number")) { // check if number
	return "ERROR";
    }
    else if (n === m) {
	return n; // base case
    }
    else if (n < m) {
	return m + sumAll(n,(m-1)); // recursive case
    }
    else {
	return sumAll(m,n); // swap if m > n
    };
};

// Do not edit below this line
module.exports = sumAll;
