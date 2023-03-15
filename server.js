const express = require('express')
const mongoose = require('mongoose')

// 3 ประสาน Middleware --> ทำฉันด้วย ทำฉันก่อน ทำฉันตลอด
const morgan = require('morgan')
const bodyParser = require('body-parser')  //  รับส่งข้อมูล JSON จากหน้าบ้านมาหลังบ้าน
const cors = require('cors')  // 

const {readdirSync} = require('fs')  // เรียกใช้ func สำหรับอ่าน folder auto 
const connectDB = require('./Config/db')

// Routes 2 
// const authRoutes = require('./Routes/auth')
// const productRoutes = require('./Routes/product')


// app
const app = express();

// db
connectDB()

// middleware
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "10mb" }))
app.use(cors())


// วิธี Route 1
// app.get('/register',(req,res)=>{
//     // code
//     console.log('hellow register');
//     res.send('Hello Goodmorning')
// })


// วิธี Route 2
// app.use('/api',authRoutes) // path --> /api/auth
// app.use('/api',productRoutes) // path --> /api/product


// วิธี Route 3
readdirSync('./Routes')
.map((r)=>app.use('/api',require('./Routes/'+ r)))  // .map --> วน loop เพื่ออ่าน


app.listen(5000,()=>{
    console.log('Server is running on port 5000!');
})