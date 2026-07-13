import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dash from "./Components/Dash";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Mainlayout from "./Components/Mainlayout";


const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
         
        </Route>
      </Routes>
    </>
  );
};

export default App;
