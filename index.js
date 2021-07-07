const returnFirstTwoDrivers = function(arr){
    let arr2 = [arr[0], arr[1]]
    return arr2
}

const returnLastTwoDrivers = function(arr){
    let arr2 = [arr[arr.length-2],arr[arr.length-1]]
    console.log(arr2)
    return arr2
    
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(){
            return int * int 

    }
}

const fareDoubler = function(fare){
       return fare * 2
}

const fareTripler = function(fare){
    console.log(fare)
    return (fare * 3)
}


function selectDifferentDrivers(arr, func){
    return func(arr)
}