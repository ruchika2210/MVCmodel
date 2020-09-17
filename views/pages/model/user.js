const mongoose=require('mongoose')
const validator=require('validator')
 const User=mongoose.model('users',{
     name:{
         type:String,
         required:true,
         trim:true
     },

     password:{
         type:String,
         trim:true,
         required:true,
        minlength:7,
        validate(value){
        if(value.toLowerCase().includes('password')){
            throw new Error('password not valid')
        }
        }

     }
 })

 module.exports=User