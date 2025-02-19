//Count how many times a string has the letter a or A

function countA(str,letter1,letter2){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===letter1||str[i]===letter2){
            count++;
        }

    }
    return count;
}
console.log(countA(' i AM a student','a','A'));