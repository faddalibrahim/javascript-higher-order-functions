function flat(array){
    let newArray = [];
    for(subarray of array){
        for(element of subarray){
            newArray.push(element)
        }
    }
    return newArray;
}


const results = flat([[1,2],[3,4],[5,6]]);
console.log(results)