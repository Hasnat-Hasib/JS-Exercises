/* JavaScript code here */

    console.log("intrnal js");
// Task2
function sumArray(arr){
    var sum = 0;
    arr.forEach(function(value, index){
        sum += value;
    });
    return sum;
}

    console.log(sumArray([1,2,3,4,5]));
    console.log(sumArray([19,-2,30,-45]));