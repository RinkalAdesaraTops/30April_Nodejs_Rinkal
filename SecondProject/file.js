var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    //open or create new file
    fs.open("myfile.html","w",(err,file)=>{
        if(err) throw err;
        console.log("New file created...");
    })
    data = {
        name:"jfg",
        age:25,
        salary:25000
    }
    //write in file
    // fs.writeFile("myfile.html","My First file",(err,file)=>{
    //     if(err) throw err;
    //     console.log("Data added successfully..");
    // })
    //Append file
    fs.appendFile("myfile.html",JSON.stringify(data),(err,file)=>{
        if(err) throw err;
        console.log("Data added successfully..");
    })

    res.end();
}).listen(2001,()=>{
    console.log("Listening on 2001 port ");
})