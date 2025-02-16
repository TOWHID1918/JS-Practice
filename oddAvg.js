

//odd number average   
function oddAvg(num){
    let odd=[];
    let sum=0;


    for(let i=0;i<num.length;i++){
        if(num[i]%2!==0){
            odd.push(num[i]);
            
        }  
    }
    console.log('odd number array:',odd);
    // return odd;


    for(let i=0;i<odd.length;i++){
        sum=sum+odd[i];
    }
    console.log('odd number sum : ',sum);
    return sum/odd.length;
}


console.log('odd number average: ',oddAvg([12,13,14,15,16]))