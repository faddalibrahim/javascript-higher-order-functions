function every(array, callback){
    for(let element of array){
        if(!callback(element)){
            return false;
        }
    }
    return true;
}

let results = every([1,2,3,4,5,6,7], elem => elem > 10);
console.log(results); 