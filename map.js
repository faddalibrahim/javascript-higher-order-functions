function map(array, callback){
    let image = [];

    for(let element of array){
        image.push(callback(element))
    }

    return image;
}

let results = map([1,2,3,4,5,6,7], element => element * 2);
console.log(results)