var obj={fname:"jack",lname:"son",age:20,gender:"male"};

//Object.keys()
console.log(Object.keys(obj));

//Object.values()
console.log(Object.values(obj));

//Object.entries()
console.log(Object.entries(obj));

//hasOwnProperty()-only check its key not value
console.log(obj.hasOwnProperty("fname"));
console.log(obj.hasOwnProperty("mainname"));
console.log(obj.hasOwnProperty("jack"));

//Object.assign()
var obj1={place:"ngl",phone:1234,blood:"O+"};
var result=Object.assign(obj,obj1);
console.log(result);

//Object.freeze()
const person1={name:"ramu",age:20,gender:"male"};
person1.age=25;
Object.freeze(person1);
person1.blood="A-";
person1.name="somu";
console.log(person1);

const person2={};
Object.freeze(person2);
person2.name="somu";
person2.age=20;
person2.gender="female";
console.log(person2);


