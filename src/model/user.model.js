const mongoose=require('mongoose');


const registerSchema=mongoose.Schema({

    email:{type:String,required:true},
    password:{type:String,required:true},
    username:{type:String,required:false},
    phone:{type:String,required:false}
})
const loginSchema=mongoose.Schema({

    email:{type:String,required:true},
    password:{type:String,required:true},
})

const register=mongoose.model('user_Register',registerSchema);
const login=mongoose.model('user_login',loginSchema);


module.exports={register,login};