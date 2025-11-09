// function sum(a,b){
//     console.log(a+b);
// }
// function calculateSum(x,y,sum){
//     sum(x,y);
// }
// calculateSum(10,20,sum);
// sum(10,20);


function step1(sharpener){
    setTimeout(()=>{
        console.log("Selecting an image from gallery");
        sharpener();
    },5000);
}
function step2(pen){
    setTimeout(()=>{
        console.log("Applying filters");
        pen();
    },2000)
}
function step3(pencil){
    setTimeout(()=>{
        console.log("Putting caption");
        pencil();
    },3000)
}
function step4(){
    setTimeout(()=>{
        console.log("Post the picture");
    },1000)
}

//nested callbacks | anonymous | Pyramid of Doom | callback hell
// | inverted triangle |nested invoked(called) functions
step1(()=>{
    step2(()=>{
        step3(()=>{
            step4(
                // ()=>{
                // step5(()=>{
                //     step6(()=>{
                        //  step7(()=>{

                        //  })
                //     })
                // })
            // }
        );
        });
    });
});
// step2();
// step3();
// step4();


//nested examples

// function(){
//     function(){

//     }
// }


// while(){
//     while(){

//     }
// }

// if(){
//     if(){
        
//     }
//     else{

//     }
// }
// else{

// }

// for(){
//     for(){

//     }
// }

// [[]]
