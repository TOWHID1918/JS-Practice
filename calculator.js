function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function divi(num1,num2){
    return num1/num2;
}

function calculator(a,b,operator){
    if(operator==='+'){
        let result=add(a,b);
        return result;
    }
   else if(operator==='-'){
        let result=sub(a,b);
        return result;
    }
    else if(operator==='*'){
        let result=mul(a,b);
        return result;
    }
    else if(operator==='/'){
        let result=divi(a,b);
        return result;
    }


}

console.log(calculator(5,6,'+'));
console.log(calculator(5,6,'-'));
console.log(calculator(5,6,'*'));
console.log(calculator(6,6,'/'));