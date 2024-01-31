import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/index.js";
import Home from "../pages/home/index.js";
import Weather from "../pages/weather/index.js";
import Todo from "../pages/toDo/index.js";
import MatchDetails from "../pages/home/matchDetails/index.js";
import Signup from "../pages/signup/index.js";
import { Design } from "../pages/design/index.js";
import UserHome from "../pages/home/userHome/index.js";
import Logout from "../pages/logout/index.js";
import Product from "../pages/product/index.js";
import Addtocart from "../pages/addTocart/index.js";
import About from "../pages/about/index.js";
import Contact from "../pages/contact/index.js";
import LiveScore from "../pages/livescore/index.js";
import Counter from "../pages/counter/index.js";

function PersonalRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/match-details/:id" element={<MatchDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/user" element={<UserHome />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/design" element={<Design />} />
                <Route path="/product" element={<Product />} />
                <Route path="/add" element={<Addtocart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/livescore" element={<LiveScore />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </>
    );
};

export default PersonalRoutes;