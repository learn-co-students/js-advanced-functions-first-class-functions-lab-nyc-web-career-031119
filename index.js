// Code your solution in this file!
  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
  const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
  }

  const returnLastTwoDrivers = function(drivers){
   return drivers.slice(-2)
 }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  const createFareMultiplier = function(fare){
    return function(number){
      return number * fare
    }
  }

    function fareDoubler(fare){
      return createFareMultiplier(fare)(2)
    }

    function fareTripler(fare){
      return createFareMultiplier(fare)(3)
    }

  function fetchSpecifiedDrivers(drivers, cb){
    return cb(drivers)
  }
