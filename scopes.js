//scopes in JS

//function , global , local , block, script
//function and block -> local

//block
//{} curly

// if()
// {
//block
// }

// {
    //block
// }

// for()
// {

// }

// while()
// {

// }


//declaratives - let , var & const

//global & script

// var + that var is not inside any block { }  -> global scope
// var a=10;
// console.log(a);


//let & const + those are not inside any block { }  -> script scope
// let b=20;
// console.log(b);
// const c=30;
// console.log(c);


// //functional  & block -> local
// // var + that var is inside any block { } and block is of a function  -> functional scope
// function fn(){
//     var d=200; //functional / local
// }
// fn();


// // var + that var is inside any block { } and {} is not of a function  -> global  scope

// {
//     var dd=200; //global 
// }
// if(true){
//     var def=200; //global 
// }

// //let & const + inside the block {} -> function + normal -> block
// {
//     let e=10; //block /local
//     const f=56; //block / local
// }

//practice questions

// var a= 10; //global
 
//  if(true){
//     var e=1; //global
//     let d=true; //block/ local
//  }
//  function abc(){
//     var c=10; //functional/local
//     let b=100; //local/block
//     const c=250; //local/block
//  }
 
// abc();


// var a=10;

// function abc(){
//     console.log(a); // 10 // undefined
    // var a=100;
//     console.log(a); // 100
// }

// console.log(a);
// abc();


// var a=10;

// function abc(){
//     console.log(a); //10
//     // var a=100;
//     console.log(a); // 10
// }

// console.log(a); //10
// abc();


// var a=10;

// function abc(){
//     console.log(a); //10
//     var b=100;
//     console.log(a); // 10
// }

// console.log(a); //10
// abc();


// var a=10;
// // a=100;
// // console.log(a);


// function abc(){
//     // console.log(a); // 100/undefined/100
//     a=100;
//     console.log(a); // 100/100/100
// }

// // console.log(a); // 100/10/10
// abc();


// let a=10;
// function abc(){
//     console.log(a); //undefined err  ref err
//     let a=100;   // block/local
//     console.log(a); //100  100  100
// }
// abc();

// let a=10;
// function abc(){
//     console.log(a); //10
//     a=100;
//     console.log(a); //100
// }
// abc();


// const a=10;
// function abc(){
//     a=200;  // ref err(cannot access without initialisation`) / err(assignment to const variable)
//     console.log(a); 
// }
// console.log(a); //10
// abc();
// console.log(a); // no output















