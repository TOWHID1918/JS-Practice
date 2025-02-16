const mobile=[
{name:'samsung',price:20000,camera:'12mp',color:'black'},
{name:'xoami',price:18000,camera:'12mp',color:'black'},
{name:'Oppo',price:30000,camera:'12mp',color:'black'},
{name:'Iphone',price:100000,camera:'12mp',color:'black'},
{name:'Walton',price:31000,camera:'12mp',color:'black'},
{name:'HTC',price:27000,camera:'12mp',color:'black'}

]
function getMin(number){
    let min=number[0];
    for(let i=1;i<number.length;i++){
        if(number[i].price<min.price){
            min=number[i];
        }
        
        
    }
    // return min;


}
console.log(getMin(mobile));

