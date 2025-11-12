//async


// function fn(){
//     return 10;
// }
// console.log(fn());


// async function fn(){
//     return 10;
// }
// console.log(fn());


// async function fn(){
//     console.log(2);

//     //time consuming task if happening
//     let data=await fetch("https://dummyjson.com/comments");
//     console.log(data);

//     console.log(3);
//     console.log(4);
   
// }
// console.log(1);
// fn();
// console.log(5);

// function fn(){
//     console.log(2);

//     //time consuming task if happening
//     let data=await fetch("https://dummyjson.com/comments");
//     console.log(data);

//     console.log(3);
//     console.log(4);
   
// }
// console.log(1);
// fn();
// console.log(5);


// function fn(){
//     console.log(2);

//     //time consuming task if happening
//     let data=fetch("https://dummyjson.com/comments");
//     console.log(data);

//     console.log(3);
//     console.log(4);
   
// }
// console.log(1);
// fn();
// console.log(5);


//promises + fetch

// let promise=fetch("https://dummyjson.com/comments");
// promise.then((partialdata)=>{
//     console.log(partialdata);//partial data

//     let finalpromise=partialdata.json();//returns a promise

//     finalpromise.then((fulldata)=>{
//         console.log(fulldata);//full data
//     }).catch((err)=>{
//         console.log(err);
//     })

// }).catch((err)=>{
//     console.log(err);
// })



//async-await + fetch

// async function getData(){
//     try{
//         let data=await fetch("https://dummyjson.com/comments");
//         console.log(data);//partial data
//         let fulldata=await data.json();
//         console.log(fulldata);
//     }catch(err){
//         console.log(err);
//     }
// }
// getData();


//async-await + axios

// async function getData(){
//     try{
//         let data=await axios.get("https://dummyjson.com/comments");
//         console.log(data);//fulldata
//          console.log(data.data);
//           console.log(data.data.comments);
//           console.log(data.data.comments[0]);
//           console.log(data.data.comments[0].user);
//           console.log(data.data.comments[0].user.fullName);
//     }catch(err){
//         console.log(err);
//     }
// }
// getData();



//promises + axios

// let promise=axios.get("https://dummyjson.com/comments");
// promise.then((fulldata)=>{
//     console.log(fulldata);
// }).catch((err)=>{
//     console.log(err);
// })



function register(value){
    let promise=new Promise((res,rej)=>{
        if(value>10){
            res("Successfully registered!");
        }
        else{
            rej("Failed to register!");
        }
    })
    return promise;
}

function login(password){
    let promise=new Promise((res,rej)=>{
        if(password.length>60){
            res("Successfully logged in!");
        }
        else{
            rej("Failed to login!");
        }
    })
    return promise;
}

function homepage(){
    let promise=new Promise((res,rej)=>{
        res("Welcome to homepage!");
    })
    return promise;
}

let promise=register(12);
promise.then((data)=>{
    console.log(data);

    let promise2=login("#mypassword");

    promise2.then((data)=>{
        console.log(data);

       let promise3=homepage();

       promise3.then((data)=>{
        console.log(data);

       }).catch((err)=>{
    console.log(err);
})

    }).catch((err)=>{
    console.log(err);
})
}).catch((err)=>{
    console.log(err);
})




