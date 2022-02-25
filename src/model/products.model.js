const mongoose=require('mongoose');


const productSchema=new mongoose.Schema({
    img:{type:String,required:false},
    price:{type:String,required:false},
    MRP:{type:String,required:false},
    Name:{type:String,required:false},
    Rating:{type:String,required:false},
    Type:{type:String,required:false},
    Brand:{type:String,required:false},
    NewPrice:{type:Number,required:true}
})

const product=mongoose.model('product_info',productSchema);

module.exports=product;
