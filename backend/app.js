const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

//Route Imports
const employee = require("./routes/employeeRoute");
const { default: Home } = require("../frontend/src/components/Home/Home");

app.use("/api/", employee);

// app.use(express.static(path.join(__dirname, "../frontend/public")));

// app.get("/", (req, res) => {
//   res.send(Home);
// });

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
