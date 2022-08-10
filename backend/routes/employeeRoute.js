const express = require("express");
const { createEmployee ,updateEmployee, getAllEmployees, countEmployees, action } = require("../controllers/employeeController");
const router = express.Router();

// Routes
router.route("/employee").post(createEmployee);
router.route("/employee/:id").put(updateEmployee);
router.route("/employees").get(getAllEmployees);
router.route("/employees/count").get(countEmployees);
router.route("/employee/:id/:action").put(action);

module.exports = router;
