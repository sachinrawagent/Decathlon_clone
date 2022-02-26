const express=require('express');
const path=require("path");
const cors = require('cors')
require("dotenv").config();
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

app.get("",  (req, res) => {
    res.sendFile(path.join(__dirname, '../src', 'index.html'));

  });


app.listen(process.env.PORT || 2400, '0.0.0.0'
,async ()=>{
    try{
         await connect();
         console.log('listening on the port 2400');
    }catch(err){
        console.log(err.message);
    }

})
