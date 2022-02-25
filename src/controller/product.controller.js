// const product=require('../model/products.model');


const express=require('express');
const { append } = require('vary');
const product = require('../model/products.model');

const app=express();

const router=express.Router();


app.use(express.json());


router.post('/',async (req,res)=>{
    const pro=await product.create(req.body);
    // console.log(pro);
    return res.send('Product added succesfully');

})

router.get('',async (req,res)=>{
    const page=req.query.page || 1;
    const size=8;
    // const prod=await product.find().lean().exec();
    console.log("In the get route ")
    // const prod=await product.find({Brand:req.query.Brand}).lean().exec();
    const prod=await product.find({Type:req.query.catogery}).skip((page-1)*size).limit(size).lean().exec();
    // if(prod.length==0){
    //     return res.send('Not found enter the correct item');
    // }
    console.log(prod.length);

    return res.send(prod);
})

router.get('/filter', async (req,res)=>{
    const prod= await product.find({Brand:req.query.Brand}).lean().exec();
    console.log(req.query.Brand);
    return res.send(prod);
})

module.exports=router;
