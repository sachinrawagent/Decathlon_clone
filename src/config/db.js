const mongoose =require('mongoose');

const connect=()=>{
    return mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.6rhal.mongodb.net/Decathlon?retryWrites=true&w=majority')
}
module.exports = connect;
