const palindromes = function (string) {
    const cleanString = string.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    return (cleanString === cleanString.split("").reverse().join("")) ? true : false ;
};

// Do not edit below this line
module.exports = palindromes;
