// Controllers ส่งไปยัง Routes (End point)



// Create สร้าง
exports.create = async(req,res)=>{
    console.log('hello Create');
    res.send('Hello Create')
} // async การทำงานเป็นลำดับขั้น

// List อ่านมาทั้งหมด
exports.list = async(req,res)=>{
    console.log('hello List');
    res.send('Hello List')
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