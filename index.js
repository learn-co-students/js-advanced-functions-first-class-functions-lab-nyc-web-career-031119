// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2);
};

const returnLastTwoDrivers = function (array) {
  return array.slice(array.length-2, array.length);
};

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function (fare) {
    return integer * fare;
  };
};

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
};

function fetchSpecifiedDrivers(array, callBackFunction) {
  return callBackFunction(array);
};
