let a=20;
let b=25;
let c = a+b;
console.log("Addition is "+c);

let arr = [10,20,30,40,50];
console.log("Array is "+arr[3]);

let obj = {
    name:"Test",
    age:25,
    salary:24000
};

let arr_obj = [
    {
        rollno:101,
        name:"Test",
        age:28,
        salary:24000
    },
    {
        rollno:102,
        name:"abc",
        age:18,
        salary:25600
    },
    {
        rollno:103,
        name:"Pqr",
        age:25,
        salary:45678
    }
]
console.log("Name is "+obj.name);
console.log("Age is "+obj.age);
console.log("Salary is "+obj.salary);

console.log("Name is "+arr_obj[0].name);
console.log("Name is "+arr_obj[1].name);

//Diff b/w foreach & map
let newarr = arr_obj.map((i)=>{
    return i;
    // console.log("Salary is "+i.salary);
})
 arr_obj.forEach((i)=>{
    // return i.salary;
    console.log("Salary is "+i.salary);
})

console.log(newarr);

let findAge = arr_obj.filter((i)=>{
    return i.age>20;
});
// includes
//arr.includes(25) //returns boolean value - true, false
console.log(findAge);
let arrayData = [1,2,3,4,5];
let sum = arrayData.reduce((total,i)=>{
    return total+i;
})
console.log("Sum is "+sum);
let p=5;
let q = p**3; //5*5*5 - power function 
console.log("Q is "+q);

//++ +1 ==a++ ++a
//-- -1 == a-- --a
let i=10;
let j=i++; //i=11 j=10 postfix - first assign value & then increment
j=++i; //i=12 j=12 Prefix - First increment & then assign value 

let str = "10"; //string
let str1 = null; //number
console.log("datatype of str "+typeof str);
console.log("datatype of str1 "+typeof str1);

console.log("A==b "+(str==str1));
console.log("A==b "+(str===str1));

