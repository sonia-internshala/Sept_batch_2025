//3 ways of strings
//I -> " "(double upper quotes)
// let first_name="John";
// console.log(first_name);

// //II -> ''(single upper quotes)
// let last_name="Doe";
// console.log(last_name);

// //III -> ``(backticks/template literals)
// let middle_name=`Kumar`;
// console.log(middle_name);

// console.log(`My name is ${first_name} ${middle_name} ${last_name}`);
// console.log(`${5+3}`);


//In-built / built-in functions associated with strings

// let str="Work is worship worship.";
// let str2="          HE   L  LO            ";

// //length - count characters/ length of string.
// console.log(str.length);


// //WORK IS WORSHIP -> uppercase
// console.log(str.toUpperCase());

// //HELLO-> lowercase
// console.log(str2.toLowerCase());

// //charAt
// console.log(str.charAt(70));

// //indexOf
// console.log(str.indexOf("worship"));
// console.log(str.indexOf("rk"));
// console.log(str.indexOf(" "));

// //includes
// console.log(str.includes("#$"))
// console.log(str.includes("rs"))

// //startsWith
// console.log(str.startsWith("_"));
// console.log(str.startsWith("Wor"));

// //endsWith
// console.log(str.endsWith("_"));
// console.log(str.endsWith("hip."));

// //trim
// console.log(str2);
// console.log(str2.trim());

// //split

// console.log(str.split("$"));

// // slice, substring -> piece of something
// console.log(str.slice(2,7));
// console.log(str.substring(2,7));

// // start index <= end index
// console.log(str.slice(7,2));//empty answer
// console.log(str.substring(7,2));


// console.log(str.slice(-6));
// console.log(str.substring(-6));// negative are considered 0 in case of substring
// // substr-> research work


// //replace -> badalna/exchange
// console.log(str.replace("tv","money"));
// console.log(str.replace("worship","money"));

// //replaceAll -> badalna/exchange
// console.log(str.replaceAll("tv","money"));
// console.log(str.replaceAll("worship","money"));



// console.log("hello" + "world");//hello world
// console.log("3"+5); //35
// console.log("3"+"5"); //35
// console.log(3+5);
// console.log("3"- 5); //-2
// console.log("3"* 5); //15
// console.log("3"/ 5); 

// console.log("hello" - "world"); //"No Number" - "No Number"  
// console.log("hello" * "world"); //"No Number" * "No Number"  
// console.log("hello" / "world"); //"No Number" / "No Number"  

// console.log("4" - "world"); //"Number" - "No Number"  
// console.log("4" * "world"); //"Number" * "No Number"  
// console.log("4" / "world"); //"Number" / "No Number"  
