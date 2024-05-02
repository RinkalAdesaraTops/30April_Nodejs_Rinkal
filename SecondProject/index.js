//http 1)core modules - require
const http = require('http')
const { add,sub,mult,div,cube } = require('./calc.js')

// let c1 = new cube(5);

http.createServer((req,res)=>{
    console.log("Hellooooooo");
    console.log("Add is "+add(5,2));
    console.log("Cube is "+cube(3));
    res.write("Helloooooo");
    res.end("Hiiiiiiiiiiiiiiii");
}).listen(1001,"localhost",(req,res)=>{
    console.log("Listening on port 1001");
})
