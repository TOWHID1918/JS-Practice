//Check whether a string contains all the vowels a, e, i, o, u

function vowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='a'||str[i]==='A'){
            count++;
        }
        else if(str[i]==='e'||str[i]==='E'){
            count++;
        }
        else if(str[i]==='i'||str[i]==='I'){
            count++;
        }
        else if(str[i]==='o'||str[i]==='O'){
            count++;
        }
        else if(str[i]==='u'||str[i]==='U'){
            count++;
        }
       
    }
    return count;
}
console.log(vowels('TOWHID chowdhury'));