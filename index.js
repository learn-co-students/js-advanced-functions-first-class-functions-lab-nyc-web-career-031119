const returnFirstTwoDrivers = function(drivers) {
  let firstTwo = [drivers[0], drivers[1]];
  return firstTwo;
}

const returnLastTwoDrivers = function(drivers){
  let lastTwo = drivers.slice(-2);
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return multiplier * fare;
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}

const fetchSpecifiedDrivers = function(drivers, cb) {
  return cb(drivers);
}
