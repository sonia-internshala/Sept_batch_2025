let obj={
    naam:"Sonia",
    age:24,


    //shadowing
    toString: function(){
        console.log(`My name is ${obj.naam} and age is ${obj.age}`)
    }
}
obj.toString();
// obj.animal();
