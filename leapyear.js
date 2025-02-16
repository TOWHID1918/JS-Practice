//leap year 
//simple logic 4 diya bhag
function isleapyear(year){
    if(year%4===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isleapyear(2100));



//logical
function isleapyear2(year){
    if( year%100!==0 && year%4===0){
        return true;
    }
    else if(year%100===0 && year%400===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isleapyear2(2100));
