// Controllers ส่งไปยัง Routes (End point)

// import Model
const Products = require('../Models/Product')

// Create สร้าง
exports.create = async(req,res)=>{
    try{
        // code
        console.log(req.body);
        const newProducts = await new Products(req.body).save() // new modle ขึ้นมาใหม่แล้วส่งไปทั้ง object
        res.json(newProducts)  // ส่งข้อมูลไปบอกหน้าบ้าน

    }catch(err){
        // err
        console.log(err);
        res.status(400).send('Server Create Error')  // ส่ง error ไปหน้าบ้าน
    }
} // async การทำงานเป็นลำดับขั้น

// List อ่านมาทั้งหมด
exports.list = async(req,res)=>{
    try{
        // code
        const listProducts = await Products.find({}).exec()  // เรียก model มาค้นหาแล้วก็ execute
        res.json(listProducts)
    }catch(err){
        // err
        console.log(err);
        res.status(400).send('Server List Error')
    }
} // async การทำงานเป็นลำดับขั้น

// Read สามารถอ่านแค่ method เดียวได้ เช่น อ่านจาก id (เฉพาะเจาะจง)
exports.read = async(req,res)=>{
    console.log('hello Read');
    res.send('Hello Read')
} // async การทำงานเป็นลำดับขั้น
 
// Update แก้
exports.update = async(req,res)=>{
    console.log('hello Update');
    res.send('Hello Update')
} // async การทำงานเป็นลำดับขั้น

// Delete ลบ
exports.remove = async(req,res)=>{
    console.log('hello Remove');
    res.send('Hello Remove')
} // async การทำงานเป็นลำดับขั้น