//selection
//5 ways - id(#), class(.), tagname, querySelector, querySelectorAll

//selection by id
// let para=document.getElementById("para");
// console.log(para);

// //selection by classname
// let div=document.getElementsByClassName("divbox");
// console.log(div[0]);

// //selection by tagname
// let head1=document.getElementsByTagName("h1");
// console.log(head1[0]);

// //selection by querySelector
// let head3=document.querySelector("#head3");
// console.log(head3);

// //selection by querySelectorAll
// let elements=document.querySelectorAll(".hello");
// console.log(elements);

// for(let element of elements){
//     console.log(element);
// }
// console.log("--------------------------------");
// for(let i=0;i<elements.length;i++){
//     console.log(elements[i]);
// }


//manipulation

//WET -> Write Everything Twice

// para.style.color="red";
// para.style.backgroundColor="yellow";
// para.style.border="2px solid black";

// //DRY -> Don't Repeat Yourself

// head3.style.cssText=`
// color:red;
// background-color:yellow;
// border:2px solid black
// `

// head3.style.add(
// color="red";
// background-color="yellow";
// border:"2px solid black"
// ) -> research work


//getter(getAttribute) & setter(setAttribute)
// let anchor=document.getElementById("anchor");
// let input=document.querySelector("#input");

// console.log(anchor.getAttribute("target"));
// console.log(anchor.getAttribute("href"));
// console.log(input.getAttribute("type"));


// anchor.setAttribute("href","https://www.geeksforgeeks.org/");
// console.log(anchor.getAttribute("href"));
// anchor.setAttribute("href","https://www.amazon.in/");
// console.log(anchor.getAttribute("href"));
// input.setAttribute("type","file")

// let para=document.querySelector("#para");

// para.classList.add("pen", "mobile","carpet");
// console.log(para.classList.contains("carpet"));
// para.classList.remove("carpet");//one at a time.
// console.log(para.classList.contains("carpet"));
// para.classList.toggle("carpet");
// para.classList.toggle("pen");

//toggle -> if a class is added , remove it
//if a class is removed , add it
//ON -> OFF | Off -> ON

//DOM Traversal
// let section=document.getElementById("section");

// //1 level up
// console.log(section.parentElement);
// console.log(section.parentElement.parentElement);

// //1 level down
// console.log(section.children);
// console.log(section.children[0].children[1]);

// //1 level left
// console.log(section.previousElementSibling);
// console.log(section.previousElementSibling.children[0]);


// // 1 level right
// console.log(section.parentElement.nextElementSibling);


// function print(){
//     console.log("button is clicked!")
// }

function A(){
    console.log("A")
}

function B(){
    console.log('B')
}

function C(){
    console.log("C")
}

//way-2
let button=document.getElementById("btn");

// button.onclick=print;
button.onclick=A;
button.onclick=B;
button.onclick=C;

//Way-3 using event listeners

// button.addEventListener("click",function fn(){
//     A();
//     B();
//     C();
// })

// button.addEventListener("click",print);




