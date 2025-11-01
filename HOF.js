//Higher Order Function

//def 1: a function which takes another function as a parameter
//a -> HOF
//b -> callback function
// function a(drum){
//     drum();
// }

// function b(){
//     console.log("Hi I am b function");
// }
// // b();
// a(b);

// function a(){
//     console.log("Hi I am a function");
// }

// function b(a){
//     console.log("Hi I am b function");
//     a();
// }

// b(a);

// function a(){
//     console.log("Hi I am a function");
// }

// function b(a){
//     console.log("Hi I am b function");
//     a();
// }

// b(a());//wrong
// b(a);



// function sum(a,b){
//     return a+b;
// }
// let c=2;
// let d=3;
// sum(c,d);




// function fn(a=100){

// }
// fn();


//def -2 HOF is the one which returns another function as a result.

function A(){
    return true;
}
let result=A();
console.log(result);//true

function AA(){
    return "France";
}
let result2=AA();
console.log(result2);//France

function AAA(){
    return 100;
}
let result3=AAA();
console.log(result3);//100


function AAAA(     ){//AAAA is HOF
   function B(){
    console.log("B");
   }
   return B;//returned function
}
let result4=AAAA();
result4();







// function sum(){
//     console.log(23+40);
// }
// sum();

// function sum2(){
//     return 23+40;
// }
// let ans=sum2();
// console.log(2*ans);


