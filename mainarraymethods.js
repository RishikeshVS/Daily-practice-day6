//for each
console.log("for each-1:-");
var arr=[1,2,3,4,5];
arr.forEach(function(each)
{
    console.log(each);
});

//for each in arrow function
console.log("for each-2:-");
arr.forEach((each)=>
{
    console.log(each);
})

//map-returns array
console.log("map-1:-");
var nums=[5,10,15,20];
var result=nums.map(function(each)
{
    return each*2;
});
console.log(result);

//map-returns number
console.log("map-2:-");
var nums=[5,10,15,20];
nums.map(function(each)
{
    console.log(each*2);
})

//map in arrow function
console.log("map-3:-");
var nums=[5,10,15,20];
var result=nums.map((each)=>
{
    return each*2;
});
console.log(result);

//filter1
console.log("filter-1:-");
var ages=[12,13,19,17,23,54,7];
var result=ages.filter(function(each)
{
    return each>=18;
})
console.log(result);

//filter2
console.log("filter-2:-");
var nums=[5,10,15,20];
nums.filter((num)=>
{
    if(num%2==0)
        console.log(num);
})

//reduce-results in single output value
console.log("reduce:-");
var nums=[1,2,3,4,5];
var result=nums.reduce(function(newval,currval)
{
    return newval+currval;
},0);
console.log(result);

//find...this is an array inside array there is object
console.log("find:-");
var obj=[{name:"samson",age:18},{name:"jack",age:20}];
var res=obj.find(function(each)
{
    return each.name=="samson";
})
console.log(res);

//some...returns boolean true/false...if any one is true itself it returns true
console.log("some:-");
var num=[1,2,3,4,5];
var res=num.some(function(each)
{
    return each%2==0;
})
console.log(res);

//every...returns boolean true/false...everything must be true then only it returns true
console.log("every:-");
var res=num.every(function(each)
{
    return each%2==0;
})
console.log(res);

//sort-by string
console.log("sort-1:-");
var nums=[32,97,34,1,9,45,78,20,28,5,111];
var alpha=["apple","orange","grapes","ball","zebra","doll"];
console.log(nums.sort());
console.log(alpha.sort());

//sort in ascending perfectly
console.log("sort-2:-");
nums.sort((a,b)=>a-b);
console.log(nums);

//sort in descending perfectly
console.log("sort-3:-");
nums.sort((a,b)=>b-a);
console.log(nums);


