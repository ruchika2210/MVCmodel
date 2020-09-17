const express=require("express")
const app=express()
const User=require('./model/user')
app.set('view engine','ejs')
app.use(express.urlencoded())
const bcrypt=require('bcryptjs')

app.get('/',(req,res) =>{
    // res.send("hello world")
    res.render('pages/index')
})

app.post('/logindone', async (req,res) =>{
    
    const username= new User(req.body.username)
    const password=new User(req.body.pwd)
    // console.log(username,password)

    // if(username=='Ruchika' && password=='chika')
    // {
    //     res.render('pages/home')
    // }
    // else{
    //     res.render('pages/index')
    // }

    try{
        await username.save()
        await password.save()
        res.status(201).send(username,password)

    }
    catch(error){
        res.status(400).send(error)
    }
})







app.listen(5000,() =>console.log("Server is running at 5000"))