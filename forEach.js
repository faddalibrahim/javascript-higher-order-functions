function forEach(array, callback){
    for(let element of array) callback(element);
}

let results = forEach([1,2,3,4,5,6,7], elem => console.log(elem));