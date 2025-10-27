// let arr=[10,23.5,true,"Germany"];//heterogeneous
// console.log(arr);
// console.log(arr.length);

//accessing the elements of the array
//Methods
//Method -1 [ ] square brackets
// console.log(arr[3]);

// //Method -2 at
// console.log(arr.at(1));


// //index loop
// for(  let i=0    ; i<arr.length    ;i+=1 )
// {
//     console.log(arr[i]);
// }

// //for ..... of loop

// for(let value of arr){
//     console.log(value);
// }

//built-in operations in array
//join -> it uses a separator and it converts the array into string and join the array elements by that separator

// let result = arr.join("Pen@^%");
// console.log(arr);
// console.log(result);
// console.log(typeof(result));//immutable

//concat -> concatenation 
// let arr1=[23,45,true];
// let arr2=["hello","34.7","hello"];
// let arr3=[false,"hello"];

// let result=arr2.concat(arr3,arr1);
// let result1=arr2.concat(arr3).concat(arr1);
// let result2=result1.concat(arr1);
// console.log(result2);//immutable
// console.log(result);



//addition of data

//add the data at front -1 
// arr.unshift(19999999);

// //add the data at end -2 
// arr.push(3499999);
// console.log(arr);//mutable

// //deletion of data

// //delete at front
// arr.shift();

// //delete at end
// arr.pop();

// console.log(arr);//mutable

// let arr=[10,23.5,[true,["Germany"]],34,,56,78];
// let result=arr.flat(Infinity);
// console.log(arr);
// console.log(result);//immutable

let arr=[10,23.5,true,"Germany"];
//slice

// let result=arr.slice(1,3);
// console.log(arr);
// console.log(result);//immutable


//splice
// let result1=arr.splice(2,0,"pen",999);
// console.log(arr);
// console.log(result1);


// console.log("***********************************8");


// let result2=arr.splice(2,2,"pen",999);
// console.log(arr);
// console.log(result2);//mutable




