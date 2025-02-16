function getMax(number){
    let max=number[0];
    for(let i=1;i<number.length;i++){
        if(number[i]>max){
            max=number[i];
        }
        
    }
    return max;

}

console.log(getMax([65,66,68,72,78,60,65,66]));

function getMin(number){
    let min=number[0];
    for(let i=1;i<number.length;i++){
        if(number[i]<min){
            min=number[i];
        }
        
    }
    return min;

}

console.log(getMin([20000,16000,50000,100000,12000,30000,35000]));