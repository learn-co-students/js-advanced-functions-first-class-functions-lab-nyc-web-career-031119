const returnFirstTwoDrivers = function(list){
  return list.slice(0, 2);
};

const returnLastTwoDrivers = function(list) {
  return list.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(fare) {
    return fare * num;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(list, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(list);
};
