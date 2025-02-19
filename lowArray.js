/*               Find the lowest number in the array below.
                const heights2 = [167, 190, 120, 165, 137];          */

function arrayLow(num){
    let lowest=num[0];
    for(let i=1;i<num.length;i++){
        if(num[i]<lowest){
            lowest=num[i];
        }
    }
    return lowest;
}

console.log(arrayLow([167, 190, 120, 165, 137]));


/*Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; */

function smallest(num){
    let lowest=num[0];
    for(let i=1;i<num.length;i++){
        if(num[i]<lowest){
            lowest=num[i];
        }
    }
    return lowest;
}

console.log(smallest(['rahim', 'robin', 'rafi', 'ron', 'rashed']));


