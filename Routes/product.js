const express = require('express')
const router = express.Router();

// Controllers
const { 
    create,
    list,
    read,
    update,
    remove } = require('../Controllers/product')  // import list จาก /Controllers/product

// End point 
router.post('/product',create)
router.get('/product',list) // List อ่านมาทั้งหมด
router.get('/product/:id',read) // Read สามารถอ่านแค่ method เดียวได้ เช่น อ่านจาก id (เฉพาะเจาะจง)
router.put('/product',update)
router.delete('/product',remove)



module.exports = router