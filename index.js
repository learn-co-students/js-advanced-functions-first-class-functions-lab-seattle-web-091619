// Code your solution in this file!
function returnFirstTwoDrivers(arr){

    let boogaloo = []
    boogaloo[0] = arr[0]
    boogaloo[1] = arr[1]


return boogaloo

}

function returnLastTwoDrivers(arr){

    let boogaloo = []
    boogaloo[0] = arr[arr.length-2]
    boogaloo[1] = arr[arr.length-1]


return boogaloo

}
    let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

    function createFareMultiplier(){
        return function(x){return x*5}
    }
    function fareDoubler(x){
       return x*2
    }
    function fareTripler(x){
       return x*3
    }

    function selectDifferentDrivers(arr, funk){
       return funk(arr)
    }