function concat(...arrays){
    const final = [];
    for(array of arrays){
        for(element of array){
            final.push(element)
        }
    }
    return final;
}

const result = concat([1,2,3],[4,5,6],[7,8,9]);
console.log(result)
