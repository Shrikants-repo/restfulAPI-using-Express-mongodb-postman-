const mongoose = require('mongoose');
const validator = require('validator');


const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlenght : 3

    },
    email :{
        type:String,
        required : true,
        unique:[true,"EMAIL ID ALREADY PRESENT"],
        
    },
    phone:{
        type: Number,
        

    },
    address:{
        type : String,
        required : true,

    }

})


const student = new mongoose.model('Student',studentSchema)

module.exports=student;