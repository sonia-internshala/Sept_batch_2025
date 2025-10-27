let smartphone={
    brand:"Apple",
    model:"Iphone 16",
    price:999,

    talks:function(){
        console.log("Phone talks");
    },//method

    binge:function(){
        console.log("Phone allows us to binge movies");
    },//method

    arr:[1,2,3,4,5],
    battery:{
        a:10
    },
    1:{
        b:20
    }
}

//After the object is been created you can still add any sort of data.
// smartphone.rings=function(){
//     console.log("Phone rings");
// }
// smartphone.color="black";
// smartphone.arrayyyy=[2,3,1,4];
// smartphone.objjjjj={};



// console.log(Object.keys(smartphone));
// console.log(Object.values(smartphone));
// console.log(Object.entries(smartphone));

//looping over the object
// for... in

// console.log(smartphone.brand);
// console.log(smartphone["price"]);

// for(let key in smartphone){
//     console.log(key," ",smartphone[key]);
// }

// for(let [key,value] in smartphone){
//     console.log(key," ",value)
// }


//function
// function talks(){
//     console.log("Phone talks");
// }

//method is a function inside an object


// let pentablet=new Object();
// pentablet.hello=function(){
//     console.log("Function says hello");
// }

// for(let key in pentablet){
//     console.log(key," ",pentablet[key]);
// }

// let arr=new Array(3,89);
