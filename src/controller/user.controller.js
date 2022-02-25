const {register,login}=require('../model/user.model');

const express=require('express');

const app=express();

const router=express.Router();


app.use(express.json());

router.post('/register',async (req,res)=>{
    // console.log(req.body);
    const reg=await register.create(req.body);
    res.send({message:"User register successfully"});
})

router.post('/login', async (req,res)=>{
    const user= await register.find().lean().exec();
    // console.log(req.body);
    let email=req.body.email;
    let password=req.body.password;
    // console.log(user);
    let islogin=false,isemail=false,isPass=false;

    user.map((ele)=>{
        if(ele.email==email){
            isemail=true;
            if(ele.password==password){
                console.log(ele.password,password,ele.email,email)
                isPass=true;
                islogin=true;
            }
        }
    })
    if(islogin){
        res.send({message:"Login succesfully"});

    }else if(isemail){
        res.send({message:"Password is wrong"});

    }else{
        res.send({message:"Your email is not register please register first"});
    }
})


module.exports=router;