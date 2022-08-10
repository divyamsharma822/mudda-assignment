const Employee = require("../models/employeeModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Apifeatures = require("../utils/apifeatures");

// Create Employee
exports.createEmployee = catchAsyncErrors(async (req, res, next) => {
    const employee = await Employee.create(req.body);

    res.status(201).json({
        success: true,
        employee,
    });
});

// Update Employee
exports.updateEmployee = catchAsyncErrors(async (req, res, next) => {
    let employee = await Employee.findById(req.params.id);

    if (!employee) {
        return next(ErrorHandler("Employee Not Found", 500));
    }

    employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        employee,
    });
});

// Get all Employee's list with searching functionality
exports.getAllEmployees = catchAsyncErrors(async (req, res, next) => {
    const apiFeature = new Apifeatures(Employee.find(), req.query).search();

    const employees = await apiFeature.query;

    res.status(200).json({
        success: true,
        employees,
    });
});

// Get count of Employees and filter using query parameters
exports.countEmployees = catchAsyncErrors(async (req, res, next) => {
    const apiFeature = new Apifeatures(Employee.find(), req.query).search();

    const employees = await apiFeature.query;

    const employeeCount = employees.length;

    res.status(200).json({
        success: true,
        employeeCount,
    });
});

// Deactivate / Activate Employee
exports.action = catchAsyncErrors(async (req, res, next) => {
    let employee = await Employee.findById(req.params.id);

    if (!employee) {
        return next(ErrorHandler("Employee Not Found", 500));
    }

    if (req.params.action === "deactivate") {
        employee.deletedAt = Date.now();
    } else if (req.params.action === "activate") {
        employee.deletedAt = null;
    }
    await employee.save({ validateBeforeSave: false });
    
    res.status(200).json({
        success: true,
    });
});
