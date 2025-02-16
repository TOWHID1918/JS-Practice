//12 inch =1 feet

// function inchTOfeet(inch){
//     let feet=inch/12;
//     return feet;
// }

// function feetTOinch(feet){
//     let inch=feet*12;
//     return inch;
// }

// console.log(inchTOfeet(90));
// console.log(feetTOinch(111));

function inchTOfeet2(inch){
    let feetup=parseInt(inch/12);
    let feetrem=inch%12;
    let result=feetup+' ft '+ feetrem+' inch';
    return result;
}
console.log(inchTOfeet2(75));