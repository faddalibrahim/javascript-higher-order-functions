function reduce(array, combine, start){
    if(!array.length) throw new Error("input array is empty");

    let accumulator = start;
    let i = 0;

    if(start == null || start == undefined){
        accumulator = array[0];
        i++;
    }   

    for(let j = i; j < array.length; j++){
        accumulator = combine(accumulator, array[j])
    }

    return accumulator
}

let results = reduce([1,2,3,4,5,6,7], (a, b) => a + b);
console.log(results)