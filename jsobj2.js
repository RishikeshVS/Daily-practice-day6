//Object Methods

const op={
    add:function(a,b)
    {
        return a+b;
    },
    sub:(a,b)=>
    {
        return a-b;
    },
};
console.log(op.add(2,2));
console.log(op.sub(5,5));

//Nested Objects

const person1={name:"sam",age:20,gender:"male",hobbies:{hob1:"read",hob2:"write",hob3:"sing"}};
console.log(person1);
console.log(person1.name);
console.log(person1.hobbies.hob1);
console.log(person1.hobbies["hob2"]);
console.log(person1["hobbies"]["hob3"]);

//Object Destructuring

const details={name:"raj",age:20};
const {name,age}=details;
console.log(name);
console.log(age);
