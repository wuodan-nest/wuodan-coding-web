console.log("HEY MAN WORKING???");

const findTheOldest = function(people) {
    let ageDiff = people.map((item) => item.yearOfDeath - item.yearOfBirth);
    console.log(ageDiff);
};

findTheOldest();

// Do not edit below this line
module.exports = findTheOldest;
