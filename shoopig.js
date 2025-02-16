let product=[
{name:'shampo',price:300,quantity:2},
{name:'chironi',price:100,quantity:3},
{name:'shirt',price:700,quantity:5},
{name:'pant',price:1200,quantity:1}
]

function sumof(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum=sum+num[i].price*num[i].quantity;


    }
    return sum;
}
console.log(sumof(product));




