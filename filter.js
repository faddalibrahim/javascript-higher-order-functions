function filter(array, callback){
    let passed = [];

    for(let element of array){
        if(callback(element)) passed.push(element)
    }

    return passed;
}

let results = filter([1,2,3,4,5,6,7], element => element % 2 === 0);
console.log(results)