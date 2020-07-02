function reduce(array, combine, start){
    let accumulator = start;
    for(let element of array){
        accumulator = combine(accumulator, element)
        //accumulator = accumulator (+*/%) element
    }
    return accumulator
}

let results = reduce([1,2,3,4,5,6,7], (a, b) => a * b, 1);
console.log(results)