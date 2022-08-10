const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

//Route Imports 
const employee = require("./routes/employeeRoute");

app.use("/api/",employee);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;