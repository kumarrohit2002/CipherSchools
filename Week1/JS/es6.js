let x=15;
{
    const x=5;
    console.log(x);
    // x=45  //can not be change const variable
}
console.log(x);


// function
console.log("Function");
var z=function(x,y){
    return x+y;
};

console.log(z(10,20));

//Arrow Function

const f=(x,y)=>{
    return x+y;
}
console.log(f(20,30));

// short hand syntax of Arrow function
const A=(x,y)=>x+y;

console.log(A(50,50));


console.log("sepered Operator");

const q1=["jan","feb","mar"];
const q2=["apr","may","jun"];
const q3=["jul","aug","sep"];
const q4=["oct","nov","dec"];

const year=[...q1, ...q2, ...q3, ...q4];
console.log(year)

const Number=[44,55,23,43,54,23];
let maxVal=Math.max(...Number);
console.log(maxVal);


//for of loop
for(const i of Number){
    console.log(i);
}

var name="RohitKumar";
let text="";
for(let ch of name){
    text+=ch+" ";
}

console.log(text);

// map

const fruits=new Map([
    ["Apple",500],
    ["Banana",400],
    ["Orange",200]
]);
console.log(fruits);
console.log(fruits.get("Apple"));

// set
const letter=new Set();
letter.add('a');
letter.add('b');
letter.add('a');
console.log(letter);

//class
class Car{
    constructor(name,mfgYear){
        this.name=name;
        this.mfgYear=mfgYear;
    }
}

const myCar1=new Car("Mercedes",2022);
const myCar2=new Car("Porsche",2020);
console.log(myCar1,myCar2);


//promise
const myfunction=() =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("This is Inside Promise");
            resolve();
        },2000);
    });
};


myfunction().then(()=>{
    console.log("Resolve");
}).catch(()=>{
    console.log("Rejected");
});


//Object
const Person={
    firstName:"Rohit",
    lastName:"Kumar",
    age:21,
    eyeColor:"Blue"
}

let ID=Symbol("id");
Person[ID]=123;
console.log(Person);


//default argument
const addTwoNumber=(a,b=20)=>a+b;

console.log(addTwoNumber(20))

//rest argument
const addNumbers=(...args)=>{
    let s=0;
    for(let i of args){
        s+=i;
    }
    return s;
}

const n=addNumbers(20,30,40,50);
console.log(n);









