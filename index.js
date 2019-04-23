// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  let newArray = drivers.slice(0, 2);
  return newArray;
}
// Code your solution in this file!
const returnLastTwoDrivers = function(drivers){
  let newArray = drivers.slice(-2);
  return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function(fare) {return num * fare;}
}

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare){
  return createFareMultiplier(3)(fare);
}

function fetchSpecifiedDrivers(drivers, fn) {
  return fn(drivers);
}
