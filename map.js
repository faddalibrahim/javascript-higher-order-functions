function map(array, callback){
    let mapped = [];
    for(let element of array){
        mapped.push(callback(element))
    }
    return mapped;
}

let results = map([1,2,3,4,5,6,7], element => element * 2);
console.log(results)