var abc=require('express')
var bodyParser = require('body-parser')


var myapp=abc()
myapp.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
myapp.use(bodyParser.json())

myapp.post('/name',(req,res)=>{
    var getName=req.body.name
    res.send(getName)
})
myapp.get('/n',(req,res)=>{
    
    res.send("Welcome to my website")
})

myapp.post('/add',(req,res)=>{
    var getNum1=parseFloat(req.body.num1)
    var getNum2=parseFloat(req.body.num2)
    var result=getNum1+getNum2
    res.json({"result":result})


})




myapp.listen( process.env.PORT || 3000,()=>{
    console.log("running http://localhost:3000")
})