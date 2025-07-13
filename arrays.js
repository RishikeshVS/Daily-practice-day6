//Array Creation
var arr1=[1,2,3,4,5];
var arr2=["leo","rolex","vikram"];
console.log(arr1);
console.log(arr2);

var arr3=new Array(10,20,30,40,50);
console.log(arr3);

//Indexing and Accessing Elements
console.log(arr1[4]);
console.log(arr2[0]);
console.log(arr3[3]);

//Modifying Arrays
arr2[2]="anbu";
console.log(arr2);
arr2[3]="das";
console.log(arr2);
arr3[2]=0;
console.log(arr3);

//Iterating Over Arrays
var country=["ind","usa","uk","srilanka","china"];
for(var i=0;i<country.length;i++)
{
    console.log(country[i]);
}

//forEach
country.forEach(function(each)
{
    console.log(each);
});

country.push("pak");
console.log(country);
country.pop();
console.log(country);
country.unshift("pakistan");
console.log(country);
country.shift();
console.log(country);
console.log(country.indexOf("uk"));
console.log(country.includes("usa"));

//Multidimensional Arrays
const matrix2d=[[0,1,2],[3,4,5],[6,7,8]];
console.log(matrix2d[0][2]);
console.log(matrix2d[1][2]);
console.log(matrix2d[2][2]);

//Array Destructuring
var nums=[10,20,30];
const [x,y,z]=nums;
console.log(nums);

console.log(x);
console.log(y);
console.log(z);


