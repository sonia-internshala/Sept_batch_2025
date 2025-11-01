//usecases/instances/contexzts/situations /types of this keyword - 5

//direct calling
// console.log(this);//global window object

// function fn(){
//     console.log(this);
// }
// fn();//global window object



//method calling 
//method - function inside object

// let obj={
//     firstnaam:"John",
//     lastnaam:"Doe",

//     fn:function(){
//         console.log(`Full name is ${this.firstnaam} ${this.lastnaam}`);
//         console.log(this);//obj
//         // return 78.9;
//     }
// }

//this -> fn(method)->obj

// let a=obj.fn();//obj
// console.log(a);
// obj.fn();//obj

// let a=obj.fn;//ref/storing
// a();// it is not called by obj but by  Global Window Object

// let pen={
//     remote:function(){
//         console.log(this);//1.pen
//         function wire(){
//             console.log(this);//2.window
//         }
//         wire();
//     }
// }
// pen.remote();


// let pen={
//     remote:function(){
//         console.log(this);//1.window
//         function wire(){
//             console.log(this);//2.window
//         }
//         wire();
//     }
// }
// let b=pen.remote;
// b();


// let pen={
//     remote:function(){
//         console.log(this);//1.pen
//         function wire(){
//             console.log(this);//2.window
//         }
//         wire();
//     }
// }
// let b=pen.remote();


//constructor function calling

// function mobile(greeting){
//     console.log(`${greeting}`);
// }
// mobile("Good morning");
// mobile("Good afternoon");
// mobile("Good evening");
// mobile("Good night");


// let obj={

// }
// obj.greet="hello";
// console.log(obj);

// function mobile(greeting){
//     this.greet=greeting;
//     console.log(this);
//     // console.log(`${this.greet}`);
// }

// let obj1=new mobile("Hello");
// let obj2=new mobile("Hi");
// let obj3=new mobile("How are you?");


// function Person(name,age){
//     this.naam=name;
//     this.umar=age;
//     console.log(this.naam,this.umar);
//     console.log(this);
// }
// Person();//global window object
// let person1=new Person("John",23);//person1
// let person2=new Person("Sunny",29);//person2


//(call, bind & apply)


// let obj1={
//     name:"Shagun",
//     print:function(course,age){
//         console.log(this.name,course,age);
//         console.log(this);
//     }
// }

// let obj2={
//     name:"John"
// }

// obj2.__proto__=obj1;//i ma making obj1 as the prototype of obj2
// console.log(obj2.__proto__); //obj1
// obj2.print("B.Tech.",39);

// console.log("Before");
// obj1.print("BBA",29);//Shagun BBA 29



// console.log("after");

// let obj2={
//     name:"John"
// }
// //obj2 wants to borrow print function from obj1 for printing its data.

// obj1.print.call(obj2,"B.Tech",30);// John B.Tech. 30
// obj1.print.apply(obj2,["B.Tech",30]); //John B.Tech. 30
// let a=obj1.print.bind(obj2,"B.Tech",30);//John B.Tech. 30
// a();


//indirect calling of this keyword in arrow function


// function fn(name){
//     console.log("Hi", name);
// }
// fn("Surya");

// let fn2=(name)=>{
//     console.log("Hi", name);
// }
// fn2("Shalini")



//Indirect calling | Arrow function calling

// let obj={
//     print:function(){
//         console.log(this);//obj(parent)
//     }
// }
// obj.print();

// let obj2={
//     print:()=>{
//         console.log(this);//(grandparent) global window object
//     }
// }
// obj2.print();









