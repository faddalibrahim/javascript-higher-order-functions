function find(array, callback){
    for(let element of array){
        if(callback(element)){
            return element;
        }
    }
    return undefined;
}

let results = find([3,1,8,4,5,2,6,7], elem => elem % 2 == 1);
console.log(results);