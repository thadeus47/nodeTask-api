const express = require('express');
const router = express.Router();
const Student = require('../models/Student')

router.get('/api/v1/student', async(req,res)=>{
    try {
        const students = await Student.find()
        res.json(students)
    } catch (err) {
        res.json({message:err})
    }
})

//get 
router.get('/api/v1/student/:studentId', async (req, res)=>{
    try {
        const students = await Student.findOne({studentId:req.params.studentId})
        res.json(students)
    } catch (err) {
        res.json({message:err})
    }
})

//post 
router.post('/api/v1/student', async (req,res)=>{
    try {
        const student = new Student({
            studentId:req.body.studentId,
            name:req.body.name,
            email:req.body.email
        })
        const savedStudent = await student.save()
        res.json(savedStudent)

    } catch (err) {
        res.json({message:err})
    }
})

//put
router.put('/api/v1/student/:studentId', async (req,res)=>{
    try {
        const updatedStudent = await Student.updateOne({studentId:req.params.studentId}, {
            studentId: req.body.studentId,
            name: req.body.name,
            email: req.body.email
        })
        res.json(updatedStudent)
    } catch (err) {
        res.json({message:err})
    }
})

//delete
router.delete('/api/v1/student/:studentId', async (req,res)=>{
    try {
        const deletedStudent = await Student.deleteOne({studentId:req.params.studentId})
        res.json(deletedStudent)
    } catch (err) {
        res.json({message:err})
    }
})



module.exports = router;