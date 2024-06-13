//opp -> Object Orianted Programing
//Object: it is a uniqe entity that contain some properties ans methods(function)
// 1.Object literal
// 2.Object Contructor


// 1.Object Literal
// const person={
//     firstName: 'Rohit',
//     lastName: 'Kumar',

//     getFullName:function(){
//         return `The name of the person is ${person.firstName} ${person.lastName}`;
//     },

//     phoneNumber:{
//         mobile:123434,
//         landline:31334
//     }

// }

// console.log(person.getFullName());
// console.log(person.phoneNumber.mobile);



// function person(firstName, lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }

// let person1=new person("Rohit","Kumar");
// let person2=new person("Ankita","thakur");

// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);


// const coder={
//     isStudying:false,
//     printIntroduction: function(){
//         console.log(`My name is ${this.name}. and I studying? : ${this.isStudying}`);
//     },
// };

// const me=Object.create(coder);
// me.name="Rohit Kuamr";
// me.isStudying=true;
// me.printIntroduction();


//Classes : classes are blueprints of an Object

// class Vehicle{
//     constructor(name,marker,engine){
//         this.name=name;
//         this.marker=marker;
//         this.engine=engine;
//     }

//     getDetails(){
//         return `the name of the Vehicle: ${this.name}`;
//     }
// };

// let v1=new Vehicle("creta","Hyundia","2500cc");
// let v2=new Vehicle("O5","Audi","3000cc");

// console.log(v1.name,v2.name);
// console.log(v2.marker);
// console.log(v1.getDetails());



//2nd ways

function Vehicle(name,marker,engine){
    this.name=name;
    this.marker=marker;
    this.engine=engine;
}

Vehicle.prototype.getDetails=function(){
    return `the name of the Vehicle: ${this.name}`;
}



let v1=new Vehicle("creta","Hyundia","2500cc");
let v2=new Vehicle("O5","Audi","3000cc");

console.log(v1.name,v2.name);
console.log(v2.marker);
console.log(v1.getDetails());


// Abstraction: It means displaying only the essentail information and hiding the details.

// Encapsulation: the process of wrapping properties with in a single unit is called encapsulation.


// class person{
//     constructor(name,id){
//         this.name = name;
//         this.id=id;
//     }

//     address(newAddress){
//         this.address=newAddress;
//     }

//     getDetails(){
//         console.log(`Name is: ${this.name} ans address is: ${this.address}`);
//     }
// }

// preson1=new person("Rohit",34);
// preson1.address("Bihar");
// preson1.getDetails();


// class person{
//     constructor(name,id){
//         this.name = name;
//         this.id=id;

//         let getDetails_NOACCESS = function(){
//             return `Name is: ${this.name} and id is: ${this.id}`;
//         };
//         this.getDetails_ACCESS = function(){
//             return `Name is: ${this.name} and id is: ${this.id}`;
//         };
//     }
// };

// let Person1=new person("Rohit",32);

// console.log(Person1.name);
// // console.log(Person1.getDetails_NOACCESS());  //error because noAccess
// console.log(Person1.getDetails_ACCESS());



//Inheritance: 

class person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName=lastName;
    }
};

class student extends person{
    constructor(firstName,lastName,rollno){
        super(firstName,lastName);
        this.rollno=rollno;
    }

    getDetails(){
        console.log(`Name is: ${this.firstName} ${this.lastName} and rollNo: ${this.rollno}`);
    }


};


let p=new student("rohit","kumar",32);
p.getDetails();





