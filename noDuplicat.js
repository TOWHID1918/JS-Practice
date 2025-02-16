/*ray has some duplicate element
...[]


*/
function noDuplicate(num){
    let unique=[];
    for(let i=0;i<num.length;i++){
        if(unique.includes(num[i])===false){
            unique.push(num[i]);
        }
    }
    return unique;
}


console.log(noDuplicate([1,2,3,4,1,3]));


let arr=[1,2,3,4,5,6];
console.log(arr.includes(7));