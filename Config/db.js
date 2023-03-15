const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        // code
        await mongoose.connect('mongodb://localhost:27017/product') //awiat รอก่อน รอให้ฉันทำงานให้เสร็จก่อน
        console.log('Connected mongoDB');
    }catch(err){
        // err
        console.log(err);
    }
}

module.exports = connectDB