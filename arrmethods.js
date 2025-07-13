var arr1=[1,2,3,4,5];
var arr2=["ram","sam","jack","johnny"];
var arr3=[10,20,30,40,50];
var names1=["julie","bheem","sishu","kenniji"];
var names2=["chan","krish","kio"];
fruits=["apple","orange","lemon"];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(names1);
console.log(names2);
console.log("\n");

console.log("Accessing elements:-");
console.log(arr1[1]);
console.log(arr2[3]);
console.log(arr3[4]);
console.log(names1[3]);
console.log(names2[0]);
console.log(fruits[2]);
console.log("\n");

console.log("1.Length");
console.log(arr1.length);
console.log("Length of int array:" +arr1.length);
console.log("Length of string array:" +arr2.length);
console.log("\n");

console.log("2.To string");
// strarr=arr1.toString();
// console.log(strarr);
// console.log(strarr.length);
console.log(arr1.toString());
console.log(arr2.toString());
console.log("\n");

console.log("3.At");
console.log(arr1.at(3));
console.log(arr2.at(1));
console.log(arr2.at("3"));
console.log("\n");

// console.log("4.Join");
console.log(arr1.join("*"));
console.log(arr2.join("^"));
console.log("\n");

console.log("5.Pop");
console.log("The array is:" +arr1);
console.log("The popped last element is:" +arr1.pop());
console.log("After popping,the array is:" +arr1);
console.log("\n");

console.log("6.Push");
console.log("The array is:" +arr2);
console.log(arr2.push("das"));    //returns the length number of the element going to be inserted (left to right)count from right to left
console.log(arr2.push("pradeep"));
console.log("After pushing,the array is:" +arr2);
console.log("\n");

console.log("7.Shift");   //like pop
console.log("The array is:" +arr2);
console.log("The popped first element is:" +arr2.shift());
console.log("After popping,the array is:" +arr2);
console.log("\n");

console.log("8.Unshift");   //like push
console.log("The array is:" +arr2);
console.log(arr2.unshift("riya"));   //returns the length number of the element going to be inserted (right to left)count from left to right
console.log("After pushing,the array is:" +arr2);
console.log("\n");

console.log("9.Delete");
console.log("The array is:" +arr3);
delete arr3[2];
delete arr3[0];
console.log("After deleting the array is:" +arr3);
console.log("\n");

console.log("10.Concat");
console.log("The arrays are:");
console.log(names1);
console.log(names2);
var names=names1.concat(names2);
console.log("After concatenating:" +names);
console.log("\n");

console.log("11.Splice-1");
console.log("The array is:" +fruits);
fruits.splice(2,0,"kiwi","grapes");   
console.log("After splicing:" +fruits);
console.log("\n");

console.log("11.Splice-2");
console.log("The array is:" +fruits);
fruits.splice(2,2,"watermelon","banana");   
console.log("After splicing:" +fruits);
console.log("\n");

console.log("12.Slice");
console.log("The array is:" +fruits);
console.log(fruits.slice(1));
var x=fruits.slice(1);
var y=fruits.slice(0,3);
var z=fruits.slice(2,6);
console.log(x);
console.log(y);
console.log(z);
console.log(fruits);
console.log("\n");

console.log("13.Copy Within");
console.log("The array is:" +fruits);
var a=fruits.copyWithin(1,2,1);     
console.log(a);
console.log("\n");

console.log("14.Flat");
var demo1=["sing","dance",["eat","drink"],"walk"];
console.log("The array is:" +demo1);
console.log("After flatting:" +demo1.flat());
console.log("\n");

console.log("15.ToSpliced");
var demo2=[5,10,15,20,25];
console.log("The array is:" +demo2)
var b=demo2.toSpliced(1,2);     //from index position 1...2 elements will be deleted
console.log(b);
console.log("\n");









