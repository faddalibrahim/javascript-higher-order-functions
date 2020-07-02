function fill(array,fillWith,start = 0,end = array.length){
    if(start > end){
        return array;
    }

    for(let i = start; i < end; i++){
        array[i] = fillWith;
    }
    return array;
}

let results = fill([1,2,3,8,4,5,6,7], 45,5,0);
console.log(results)