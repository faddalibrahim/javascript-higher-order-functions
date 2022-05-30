function reduce(array, combine, start){
    let accumulator = start ?? array[0];

    for(let element of array){
        accumulator = combine(accumulator, element)
    }
    
    return accumulator
}

let results = reduce([1,2,3,4,5,6,7], (a, b) => a + b);
console.log(results)