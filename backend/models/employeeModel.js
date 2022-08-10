const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    mobileNo: {
        type: String,
        required: [true, "Please Enter Your Mobile Number"],
    },
    gender: {
        type: String,
        required: [true, "Please Mention Your Gender"],
    },
    designation: {
        type: String,
        required: [true, "Please Enter Your Designation"],
    },
    dateOfJoining: {
        type: Date,
        default: Date.now,
    },
    reportingManager: {
        type:String,
        required: [true, "Please Enter Your Reporting Manager's Name"],
    },
    salary:{
        type:Number,
        required: [true, "Please Enter Your Salary"],
    },
    employeeCode:{
        type:Number,
        required: [true, "Please Enter Your Employee Code"],
    },
    location:{
        type:String,
        required: [true, "Please Enter Your Location"],
    },
    state:{
        type: String,
        required: [true, "Please Enter Your State Name"],
    },
    country:{
        type:String,
        required: [true, "Please Enter Your Country Name"],
    },
    department:{
        type:String,
        required: [true, "Please Enter Your Department"],
    },
    deletedAt:{
        type:Date,
        default: null,
    },
});

module.exports = mongoose.model("Employee", employeeSchema);