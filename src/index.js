const express=require('express');

const cors = require('cors')

const app=express();

const connect=require('./config/db');


const productController=require('./controller/product.controller');

const userController=require('./controller/user.controller');

app.use(express.json());
app.use(cors());


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
// app.get('/',(req,res)=>{

//     return res.json({msg:"Hello bhailog"});
// })