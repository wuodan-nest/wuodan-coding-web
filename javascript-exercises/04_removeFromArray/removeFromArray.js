
// removing an array
// using array splice()
// using array delete()
// use loops 3
// use continue and break to make it simple and recursive

// USE TERNARY OPERATORS FOR SIMPLER IF_ELSE STATEMENTS -- FASSSSTER -- CoOoOOMPLEx -- LIMITED

// steps
// store the new array in a variable for not messing original array
// call funtion sorter
// ask it to go for all the args one by one
// convert args to arg -- singular
// call each arg and check index of the array - multiple arg
// check if arg has duplicates and rerun if there are!!!
// if arg index is not present return array
// should be able to remove all and return empty array
// check if it runs with strings
// should return same type i.e 1 != '1'



const removeFromArray = function(array, ...items) {
    // newArray = [];
    // for (i=0; i<array.length; i++) {
    // 	let arrayItem = array[i];
    // 	if (!items.includes(arrayItem)) {
    // 	    newArray.push(arrayItem);
    // 	};
    // };
    // return newArray;

    return array.filter(arrayItem => !items.includes(arrayItem));
};
	
	  
	    

// Do not edit below this line
module.exports = removeFromArray;
