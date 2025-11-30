let obj1={

    a:10,
    remote:{

        b:"hello"
    }
}


//deep copy - copying in-depth not reference'
//syntax - structuredClone

// let obj2=structuredClone(obj1);
// console.log(obj1.a);
// console.log(obj2.a);
// obj2.a=100;
// console.log(obj1.a);
// console.log(obj2.a);
// obj2.remote.b=2000;
// console.log(obj1.remote.b);
// console.log(obj2.remote.b);

//shallow copy - copying upar upar se not-so-deep
//syntax -1 -> spread operator

// let obj2={...obj1};
// console.log(obj1.a);
// console.log(obj2.a);
// obj2.a=100;
// console.log(obj1.a);
// console.log(obj2.a);
// obj2.remote.b=2000;
// console.log(obj1.remote.b);
// console.log(obj2.remote.b);


//syntax-2 assign method
// let obj3=Object.assign({},obj1);
// obj3.remote.b="hi";
// console.log(obj1.remote.b);
// console.log(obj3.remote.b);

// let obj2=obj1;
// console.log(obj1);
// console.log(obj2);
// obj2.a=1200;
// console.log(obj1);
// console.log(obj2);
// if(obj1==obj2){
//     console.log("true");
// }
// else{
//     console.log("false")
// }


