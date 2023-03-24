// const currLineArrayPrompt = prompt("Which line are you currently on?", "lineN / lineL / line6")
// const currStop = prompt("Which station are you at on that line?", "TimesSquare / UnionSqure / AstorSquare / etc")
// const destLineArrayPrompt = prompt("Which line would you like to go to?", "lineN / lineL / line6")
// const destStop = prompt("Which stop?", "TimesSquare / UnionSqure / AstorSquare / etc")

// const currPromptConverter = function(currLineArray){
//     if (currLineArray === "lineN"){
//         console.log("LineN")
//         return lineN
//     }   if (currLineArray === "lineL"){
//         console.log("LineL")
//         return lineL
//     }   if (currLineArray === "line6"){
//         console.log("Line6")
//         return Line6
//     }
// }
// const destPromptConverter = function(destLineArray){
//     if (destLineArray === "lineN"){
//         console.log("LineN")
//         return lineN
//     }   if (destLineArray === "lineL"){
//         console.log("LineL")
//         return lineL
//     }   if (destLineArray === "line6"){
//         console.log("Line6")
//         return Line6
//     }
// }

const lineN = [
    {name: "TimesSquare", line: "n"},
    {name: "34th", line: "n"},
    {name: "28th", line: "n"}, 
    {name: "23rd", line: "n"},
    {name: "UnionSquare", line: "n"},
    {name: "8th", line: "n"},
]
const lineL = [
    {name: "8th", line: "l"},
    {name: "6th", line: "l"},
    {name: "UnionSquare", line: "l"}, 
    {name: "3rd", line: "l"},
    {name: "1st", line: "l"},
]
const Line6 = [
    {name: "GrandCentral", line: "6"},
    {name: "33rd", line: "6"},
    {name: "28th", line: "6"}, 
    {name: "23rd", line: "6"},
    {name: "UnionSquare", line: "6"},
    {name: "AstorPlace", line: "6"},
]

const findStopIndex = function(currLineArray, stopName){
    const stopIndex = currLineArray.findIndex(obj => {
        return obj.name === stopName;
    });
    return stopIndex
}

const tripSelector = function(currLineArray, currStop, destLineArray, destStop){
    if (currLineArray = destLineArray){
        simpleTrip(currLineArray, currStop, destStop)
        console.log("Simple Trip")
        console.log(currLineArray)
        console.log(destLineArray)
    } else {
        complexTrip(currLineArray, currStop, destLineArray, destStop)
        console.log("Complex Stop")
    }
}

// if currLineArray = destLineArray, call simple, else call complex

const simpleTrip = function(currLineArray, currStop, destStop){
let simpleTripLog = [];
    const currStopIndex = findStopIndex(currLineArray, currStop);
        console.log(currStopIndex);
    const destStopIndex = findStopIndex(currLineArray, destStop);
        console.log(destStopIndex);
    if (currStopIndex < destStopIndex){
        for (a = currStopIndex; a <= destStopIndex; a++){
            simpleTripLog.push(currLineArray[a]);
        }   console.log(`This journey took ${simpleTripLog.length} stops. An overview of the route is follows:`)
            console.table(simpleTripLog);
    }   if (currStopIndex > destStopIndex){
            for (a = currStopIndex; a >= destStopIndex; a--){
            simpleTripLog.push(currLineArray[a]);
        }   console.log(`This journey took ${simpleTripLog.length} stops. An overview of the route is follows:`)
            console.table(simpleTripLog);
    }
}

const complexTrip = function(currLineArray, currStop, destLineArray, destStop){
let complexTripLog = [];
    const currStopIndex = findStopIndex(currLineArray, currStop);
        console.log(currStopIndex);
    const destStopIndex = findStopIndex(destLineArray, destStop);
        console.log(destStopIndex);
    const currUnionSquareStopIndex = findStopIndex(currLineArray, "UnionSquare");
        console.log(currUnionSquareStopIndex);
    const destUnionSquareStopIndex = findStopIndex(destLineArray, "UnionSquare");
        console.log(destUnionSquareStopIndex);
        if (currStopIndex < currUnionSquareStopIndex){
            for (a = currStopIndex; a <= currUnionSquareStopIndex; a++){
                complexTripLog.push(currLineArray[a])};  
        }   if (currStopIndex > currUnionSquareStopIndex){
                for (a = currStopIndex; a >= currUnionSquareStopIndex; a--){
                complexTripLog.push(currLineArray[a]);
            }   
        }   if (destUnionSquareStopIndex < destStopIndex){
            for (a = destUnionSquareStopIndex; a <= destStopIndex; a++){
                complexTripLog.push(destLineArray[a])};  
        }   if (destUnionSquareStopIndex > destStopIndex){
                for (a = destUnionSquareStopIndex; a >= destStopIndex; a--){
                complexTripLog.push(destLineArray[a]);
            }   
    }   console.log(`This journey will take ${complexTripLog.length - 1} stops including a line change. An overview of the route is follows:`)
        console.table(complexTripLog)
}

// tripSelector(currPromptConverter(currLineArrayPrompt), currStop, destPromptConverter(destLineArrayPrompt), destStop);