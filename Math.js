//floor -> ground-> farsh

let a= 6.91; //comes in between 6 & 7
console.log(Math.floor(a));//6

//ceil -> upper -> arsh
console.log(Math.ceil(a));//7

//round -> round-off

console.log(Math.round(19.5));//decimal>=5
console.log(Math.round(19.4));//decimal<5
console.log(Math.round(19.49));//decimal<50

//pow -> power 
// console.log(Math.pow(whose power you want to calculate, what power you want to calculate));
console.log(Math.pow(3,7));

//min -> calculates the minimum number of all
console.log(Math.min(12,45,67,4,23));

//max -> calculates the maximum number of all
console.log(Math.max(12,45,67,4,23));

console.log(Math.min([12,45,67,4,23]));


//random -> generates random number between 0 and 1

let number=Math.random();
console.log(number);
console.log(number*10000);
console.log(Math.floor(number*10000));
console.log(Math.round(number*10000));

console.log(number);
console.log(number*1000000);
console.log(Math.floor(number*1000000));
console.log(Math.round(number*1000000));
