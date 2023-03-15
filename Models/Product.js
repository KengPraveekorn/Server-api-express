const mongoose = require('mongoose')

// Schema เอาไว้เชื่อมต่อกับฐานข้อมูล เปรียบเสมือน Table
const productSchema = mongoose.Schema({
    // กำหนดแบบง่ายๆ
    name: String,  
    // กำหนดแบบมีอะไร
    detail:{       
        type: String,
        require: true  // (ต้องการให้ใส่) ไม่ส่งมาจะ error
    },
    price:{
        type: Number,
    },
    remark:{
        type: String,
        default: 'Product Popular'  // กำหนดค่าเริ่มต้น  
    }
}, { timestamps: true })  // เอาค่านี้ด้วย (เก็บค่าเวลา)


// exports เป็น model เราเรียกเป็น model
module.exports = mongoose.model('Products',productSchema) 