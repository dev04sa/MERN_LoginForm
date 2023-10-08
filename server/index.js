const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/Login').then( ()=> console.log("Success") );


const UserSchema= new mongoose.Schema({
    email:String,
    password:String,
})

const UserModel=mongoose.model("user",UserSchema);

app.post('/login',(req,res)=> {
    const {email,password}=req.body;
    UserModel.findOne({email : email})
    .then(user=> {
        if(user) {
            if(user.password===password) {
                res.json("Login Sucessfully");
            } else {
                res.json("Password is Incorrect");
            }
        } else {
            res.json("No user exist");
        }
    })
})





app.listen(3001,()=> {
    console.log("running")
})