// function pen(){
//     let a=100;
//     function tablet(){
//         console.log(a);
//     }
//     tablet();
// }
// pen();

// let a=100;
// function pen(){
//     function tablet(){
//         console.log(a);
//     }
//     tablet();
// }
// pen();

// let a=100;
// function pen(){
//     function tablet(){
//         console.log(a);
//     }
// }
// tablet();
// pen();



function pen(){
    let a=100;
    function tablet(){
        console.log(a); //100 undefined //ref err 
    }
    return tablet;
}

let fn=pen();
fn(); //tablet 

//parent of tablet is pen + in local memmory of pen a is there

// function hello(){
//     return true;
// }
// let boolean=hello();
// console.log(boolean);