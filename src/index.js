const express=require('express');

const cors = require('cors')

const app=express();

const connect=require('./config/db');


const productController=require('./controller/product.controller');

const userController=require('./controller/user.controller');
const { register, login } = require("./controller/auth.controller");

app.use(express.json());
app.use(cors());

app.post("/register", register);

app.post("/login", login);

app.use('/product',productController); //product/:cat for the catogery of the product

app.use('/user',userController);



app.listen(2400,async ()=>{
    try{
         await connect();
         console.log('listening on the port 2400');
    }catch(err){
        console.log(err.message);
    }

})