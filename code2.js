function generateArray(start, end){
    let array = [];

    let step = start <= end? 1:-1;
    //put range

    for (let i = start; i <= end; i ++ ) {
        array.push(i);
    }

    return array;
}

console.log(generateArray(4, 7));




