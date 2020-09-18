const express=require("express")
const app=express()
const User=require('./model/user')
const bodyparser=require('body-parser')
const mongoose =require('mongoose')
require('./model/db')
app.set('view engine','ejs')
app.use(express.urlencoded())
app.use(bodyparser.urlencoded({extended:false}))


app.get('/',(req,res) =>{
    // res.send("hello world")
    res.render('pages/index')
})

app.post('/logindone', async (req,res) =>{
    
    const username=req.body.username;
    const password=req.body.pwd;
    const user=new User({name:username,password})
    console.log(user);
    // console.log(username,password)

    // if(username=='Ruchika' && password=='chika')
    // {
    //     res.render('pages/home')
    // }
    // else{
    //     res.render('pages/index')
    // }

    try{
        await user.save()
        
        res.status(200).send({username,password})

    }
    catch(error){
        res.status(400).send(error)
    }
})







app.listen(5000,() =>console.log("Server is running at 5000"))