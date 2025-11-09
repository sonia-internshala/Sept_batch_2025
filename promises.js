// let promise=new Promise();

// let promise=new Promise(()=>{

// })

// let promise=new Promise((resolve,reject)=>{

// })

// let promise=new Promise((resolve,reject)=>{
//     let val=100;
//     if(val>10){
//         resolve("Promise is resolved!");
//     }
//     else{
//         reject("Promise is rejected!")
//     }
// })


// let promise=new Promise((resolve,reject)=>{
//     let val=100;
//     if(val>10){
//         resolve("Promise is resolved!");
//     }
//     else{
//         reject("Promise is rejected!")
//     }
// })
// promise.then().catch()


// let promise=new Promise((resolve,reject)=>{
//     let val=100;
//     if(val>10){
//         resolve("Promise is resolved!");
//     }
//     else{
//         reject("Promise is rejected!")
//     }
// })
// promise.then(()=>{

// }).catch(()=>{

// })


// let promise=new Promise((resolve,reject)=>{
//     let val=1;
//     if(val>10){
//         resolve("Promise is resolved!");
//     }
//     else{
//         reject("Promise is rejected!")
//     }
// })
// promise.then((medicine)=>{
//     console.log(medicine);
// }).catch((scooty)=>{
//     console.log(scooty);
// })


// let promises=new Promise((resolve,reject)=>{
//     let val=1;
//     if(val>10){
//         resolve("Promise is resolved!");
//     }
//     else{
//         reject("Promise is rejected!")
//     }
// })
// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


let promise=new Promise((resolve,reject)=>{
    let val=8;
    if(val>10){
        resolve("Promise is resolved!");
    }
    else if(val<4){
        reject("Promise is rejected!")
    }
})
promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("finally is executed!")
})
