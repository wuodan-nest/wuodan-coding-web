// ways to sort a reverse string //
// with built-in functions - split, reverse, join //
// without built in function //
// using recursion //

const reverseString = function(string) {
    //  return string.split('').reverse().join('');

    // let newstr = "" ;    
    // for (let i=string.length-1; i>=0 ; i--) {
    // 	newstr += string[i];
    // }
    // return newstr;

    if (string === '') {
	return '' ;
    } else {
	return reverseString(string.substring(1)) + string.charAt(0);
    }
};

// Do not edit below this line
module.exports = reverseString;
