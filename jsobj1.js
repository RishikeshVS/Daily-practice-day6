//creating objects
const person1={name:"ramu",age:20,gender:"male"};

const person2={};
person2.name="somu";
person2.age=20;
person2.gender="female";

const person3=new Object();
person3.name="riya";
person3.age=24;
person3.gender="female";

console.log(person1);
console.log(person2);
console.log(person3);

//accessing object properties way-1
console.log(person1.name);
console.log(person2.age);
console.log(person3.gender);

//updating object property 
person3.name="riyaaaaa";

//accessing object properties way-2
console.log(person1["gender"]);
console.log(person2["age"]);
console.log(person3["name"]);

//copy of object
const x=person3;
x.age=25;
console.log(x);

//creating new property of existing object
x.isalive=true;
console.log(x);

//deleting object property
delete x.isalive;
console.log(x);
delete x["gender"];
console.log(x);

a="name";
b="age";
console.log(x[a] +" is "+x[b]+ " years old");

