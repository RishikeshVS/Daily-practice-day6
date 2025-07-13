//Function Declaration
function fun1()
{
    console.log("hi i am function!!");
}
fun1();

//Function Expression1
var fun2=function()
{
    console.log("hi guys");
}
fun2();

//Function Expression2
var add=function(a,b)
{
    console.log(a+b);
}
add(2,2);

//Arrow Functions1
var fun3=()=>console.log("hello");
fun3();

//Arrow Functions2
var sub=(a,b)=>
{
    console.log(a-b);
}
sub(5,5);

//Parameters and Arguments
function mul(a,b)
{
    return a*b;
}
console.log(mul(4,4));

//Return Statement
function double(n)
{
    return n*n;
}
console.log(double(2));

//Function Scope
global="I am global";
function scope()
{
    local="I am local";
    console.log(local);
}
scope();     
console.log(local);   //Error: localVariable is not defined
console.log(global);

//Higher-Order Functions
function math(a,b,op)
{
    return op(a,b);
}
function addition(a,b)
{
    return a+b;
}
console.log(math(5,5,addition));

//CallbackFunction
function User(name,callback) 
{
  setTimeout(() => 
    {   
        callback("Hello "+name);
    },2000);
}
User("Rishi",function(greeting) 
{
  console.log(greeting); 
});
