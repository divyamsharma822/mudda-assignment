import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Home = () => {
    const [data, setData] = useState([
        {
            _id: "62f2b2910d7278f55429d4fb",
            firstName: "Divyam",
            lastName: "Sharma",
            email: "abc@gmail.com",
            mobileNo: "123455678990",
            gender: "Male",
            designation: "CEO",
            reportingManager: "Anish",
            salary: 1000000,
            employeeCode: 699,
            location: "Lucknow",
            state: "UP",
            country: "USA",
            department: "CSE",
            deletedAt: "2022-08-10T06:58:21.391Z",
            dateOfJoining: "2022-08-09T19:16:33.197Z",
            __v: 0,
        },
    ]);

    //For Add New Data Model
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getEmployees = () => {
        const url = "http://localhost:3000/api/employees";
        axios
            .get(url)
            .then((response) => {
                const result = response.data;
                const { success, employees } = result;
                if (success === "true") {
                    setData(employees);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getEmployees();
    }, []);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <div className='main-heading'>
                <h1 className='text-center'>EMPLOYEE DASHBOARD</h1>
                <div className='container-fluid'>
                    <div className='table-responsive'>
                        <table className='table table-hover'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((currElement, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{currElement.firstName}</th>
                                            <th>{currElement.lastName}</th>
                                            <th>{currElement.email}</th>
                                            <th>{currElement.mobileNo}</th>
                                            <th>
                                                <button className='btn btn-success'>
                                                    Activate
                                                </button>{" "}
                                                <button
                                                    className='btn btn-primary'
                                                    onClick={() => handleOpen()}
                                                >
                                                    Create
                                                </button>
                                            </th>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='modal-modal-title'
                        aria-describedby='modal-modal-description'
                    >
                        <Box sx={style}>
                            <Typography
                                id='modal-modal-title'
                                variant='h6'
                                component='h2'
                            >
                                Text in a modal
                            </Typography>
                            <Typography
                                id='modal-modal-description'
                                sx={{ mt: 2 }}
                            >
                                Duis mollis, est non commodo luctus, nisi erat
                                porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default Home;
