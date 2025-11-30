// class Person{
//     constructor(name,degree){
//         this.name=name;
//         this.degree=degree;
//     }
//     sleep(){
//         console.log("sleeps!");
//     }
//     codes(){
//         console.log(`${this.name} pursuing ${this.degree} codes.`)
//         console.log(this);
//     }
// }

// let p1=new Person("Sonia","WP");//constructor is automatically called
// let p2=new Person("Prateek","B.Tech.");
// p2.codes();
// console.log(p2);

// let p3=new Person("Nikita","BBA");
// console.log(p3);

// p3.codes();


//Inheritance

class Person{
    constructor(name,degree){
        this.name=name;
        this.degree=degree;
    }
    sleep(){
        console.log("sleeps!");
    }
    codes(){
        console.log(`${this.name} pursuing ${this.degree} codes.`)
        console.log(this);
    }
}
class Student extends Person{
    // constructor(name,degree,university,age){
    //     // super("Sonia", "B.Tech.")//calls the constrcutor of parent class
    //     // super();
    //     super(name,degree);
    //     this.university=university;
    //     this.age=age;
    // }
    //default constructor
    // constructor(){

    // }
    studies(){
        console.log(`${this.name} of ${this.degree}  of age ${this.age} studies in ${this.university}`)
    }
}
// class Person extends Student{

// }

let s1=new Student("Raju","BBA","Government University",24);
s1.studies();
s1.sleep();
s1.codes();


//methods and properties
//age, name, degree, blood grp attributes height weight(key)
//sleep, eat , walk, run code


// let obj={

// }
// let pen={
//     fn:function(){
//         console.log("hello");
//     }
// }
// obj.__proto__=pen;//setting pen as prototype/parent of obj.Then obj can use fn(prototypal inheritance).
// obj.fn();
