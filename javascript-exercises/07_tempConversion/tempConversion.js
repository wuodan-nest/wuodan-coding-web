// F to C -> 5/9(F-32)
const convertToCelsius = function(degreeF) {
    const convertedVal = 5/9 * (degreeF - 32);
    return (convertedVal % 1 == 0) ? convertedVal : parseFloat(convertedVal.toFixed(1));
};

// C to F -> 9/5(c) + 32
const convertToFahrenheit = function(degreeC) {
    const convertedVal = ((9/5 * degreeC) + 32);
    return (convertedVal % 1 == 0) ? convertedVal : parseFloat(convertedVal.toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
