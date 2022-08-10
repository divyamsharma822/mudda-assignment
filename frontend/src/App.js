import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./components/Home/Home";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Home />} />

            </Routes>
        </Router>
    );
};

export default App;
