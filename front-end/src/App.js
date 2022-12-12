import React, { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Space, Row } from "antd";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Medication from "./Pages/Medication";
import Doc from "./Pages/Doc"; 

function App() {
  const [status, setStatus] = useState(false);

  const authenticate = () => {
    setStatus(true);
  };

  const logout = () => {
    setStatus(false);
  };

  return (
    <>
      <Space direction="vertical" style={{display:'flex'}} >
        <Row className="nav">
          <h1>PharmaCare</h1>
          <nav className="link">
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/doc">Docs</Link>
            <Link to="/about">About</Link>
            <Link to="/contactus">Contact Us</Link>
          </nav>
        </Row>
        <nav>
          <Link to="/">Log Out</Link>
          
        </nav>
      </Space>

      <div>
        <Routes>
          <Route path="/" element={<Login auth={authenticate} />} />
          <Route path="/home" element={<Home logout={logout} status={status} />}/>
          <Route path="/shop" element={<Medication/>}/>
          <Route path="/doc" element={<Doc/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
