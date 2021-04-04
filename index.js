var abc=require('express')
var myapp=abc()
myapp.get('/' ,(req,res)=>{
    res.send("Hiiii")

})
myapp.get('/name',(req,res)=>{
    res.send("Amrutha Padman")
})
myapp.get('/place',(req,res)=>{
    res.send("Wayanad")
})
myapp.get('/Qualification',(req,res)=>{
    res.send("Btech")
})
myapp.get('/Course',(req,res)=>{
    res.send("Mobile Application Development")
})

myapp.listen(3000,()=>{
    console.log("running http://localhost:3000")
})