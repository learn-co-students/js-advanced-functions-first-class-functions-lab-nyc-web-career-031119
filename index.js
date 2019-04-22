const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
  return function(fare){
    return fare * integer;
  }
}

function fareDoubler(fare){
  return fare * 2;
}

function fareTripler(fare){
  return fare * 3;
}

function fetchSpecifiedDrivers(drivers, cb){
  return cb(drivers);
}
