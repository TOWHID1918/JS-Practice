let a=5;
let b=7;
console.log('a=',a,'b=',b);
let temp=a;
a=b;
b=temp;
console.log('a =',a);
console.log('b =',b);


//destructing
let x=5
let y=7;
console.log('x=',x,'y=',y);
[x,y]=[y,x];
console.log('x=',x,'y=',y);