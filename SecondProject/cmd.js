var pr = require('process')
var data = pr.argv
console.log("Total data entered..."+data.length);

data.map((i)=>{
    console.log("You entered this -- "+i);
})