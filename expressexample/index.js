const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send("<a href='/home'>Home</a> || <a href='/contact'>Contact</a>")
   
})

app.get('/home',(req,res)=>{
    // res.send('<h1>My Home page</h1>')
    res.sendFile(__dirname+'/Home.html')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>My Contact page</h1>')
})

app.listen(2001,()=>{
    console.log("listening to port 2001");
})