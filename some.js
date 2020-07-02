function some(array, callback){
    for(let element of array){
        if(callback(element)){
            return true;
        }
    }
    return false;
}

let results = some([1,2,3,8,4,5,6,7], elem => elem > 10);
console.log(results);