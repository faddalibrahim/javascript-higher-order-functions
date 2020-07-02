function findIndex(array, callback){
    let index = 0;
    for(let element of array){
        if(callback(element)){
            return index;
        }
        index++
    }
    return undefined;
}

let results = findIndex([3,1,8,4,5,2,6,7], elem => elem < 3);
console.log(results)