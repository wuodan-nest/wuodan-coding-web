// fibonacci series recursive
// assign n == 0 & n == 1 to return 0 and 1 start values
// assign if n = n-1 + n-2 return fib(num -1) return fib(num-2)
//

const fibonacci = function(number) {
    number = parseInt(number);
    if (number === 0) {
	return 0;
    }
    else if (number === 1) {
	return 1;
    }
    else if (number >= 2) {
	return fibonacci(number - 1) + fibonacci(number - 2)
    }
    else {
	return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
