const mongoose = require('mongoose')

const Student = mongoose.Schema({
    studentId:{
        unique:true,
        required:true,
        type:Number
    },
    name:{
        required:true,
        type:String
    },
    email:{
        unique:true,
        required:true,
        type:String
    }
})

module.exports = mongoose.model('students', Student)