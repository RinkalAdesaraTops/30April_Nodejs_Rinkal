//http 1)core modules - require
const http = require('http')
const fs = require('fs')
//Local modules
const { add,sub,mult,div,cube } = require('./calc.js')
const dispMsg = require("./third.js")
let arr = ["test","abc","xyz"];
let arr1 = ["ug","djfgh"];
//... spread operator
let merge_arr = [...arr,...arr1] //merging
// arr[0],arr[1].
// destructuring
const [a,,c] = arr;
// let c1 = new cube(5);

http.createServer((req,res)=>{
    console.log("display func outside "+dispMsg());
    // console.log("A is "+a);
    // console.log("Merge array is "+merge_arr);
    // console.log("Hellooooooo");
    // console.log("Add is "+add(5,2));
    // console.log("Cube is "+cube(3));
    res.write("Helloooooo");
    res.end("Hiiiiiiiiiiiiiiii");
}).listen(1001,"localhost",(req,res)=>{
    console.log("Listening on port 1001");
})
