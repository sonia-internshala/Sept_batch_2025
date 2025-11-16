let reset=document.getElementById("reset-button");
let X=document.getElementById("X");
let O=document.getElementById("O");
let bigbox=document.getElementById("grid-container");
let boxes=document.querySelectorAll(".box");
// let boxes=document.getElementsByClassName("box");
console.log(boxes);
console.log(bigbox.children);

let turn_of_O=true;//staring turn is of O
X.addEventListener("click",()=>{
    turn_of_O=false;//you are not the one who is starting the game , X will start the game.
})


let winning_patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let count=0;
boxes.forEach((box)=>{
    console.log(box);
    box.addEventListener("click",()=>{
        if(turn_of_O==true){
            box.innerHTML=`<h1>O</h1>`;
            turn_of_O=false;
        }
        else{
            box.innerHTML=`<h1>X</h1>`;
            turn_of_O=true;
        }
        box.style.pointerEvents="none";
        count++;
        if(count>=5){
            checkWinner();
        }
    })
})

function checkWinner(){
    for(let pattern of winning_patterns){
        console.log(pattern);

        let pos1=bigbox.children[pattern[0]].innerText;

        let pos2=bigbox.children[pattern[1]].innerText;

        let pos3=bigbox.children[pattern[2]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("Winner", pos3);
                setTimeout(()=>{
                    reset_fn();
                },1000);
                break;
            }
        }
    }
}

function reset_fn(){
     boxes.forEach((box)=>{
        box.innerHTML="";
        box.style.pointerEvents="auto";
    })
}
// reset.addEventListener("click",()=>{
//     boxes.forEach((box)=>{
//         box.innerHTML="";
//         box.style.pointerEvents="auto";
//     })
// })
