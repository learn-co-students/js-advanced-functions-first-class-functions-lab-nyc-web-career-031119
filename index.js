// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  let newArr = drivers.slice(0, 2)
  return newArr
}

const returnLastTwoDrivers = function(drivers){
  let newArr = drivers.slice(-2)
  return newArr
}

const selectingDrivers= [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(number){
  return function(fare){
    return number * fare
  }
}

 const fareDoubler = function(fare){
  total = fare * 2
  return total
}

const fareTripler = function(fare){
 total = fare * 3
 return total
}

function fetchSpecifiedDrivers(driversArray, func){
    return func(driversArray)

}
