import React, { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Space, Row } from "antd";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import MedicationList from "./Pages/MedicationList";
import Doc from "./Pages/Doc"; 
import Footer from "./Pages/Footer";
import ContactUs from "./Pages/ContactUs";
import Cart from "./Pages/Cart";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";


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
          <h1 className="h1">PharmaCare</h1>
          <nav className="link">
            <Link to="/home" className="li">Home</Link>
            <Link to="/shop" className="li">Shop</Link>
            <Link to="/doc" className="li">Docs</Link>
            <Link to="/contactus" className="li">Contact Us</Link>
            <MDBBtn floating tag="a" className="Button">
                        <i class="fas fa-shopping-basket"></i>
                        <MDBIcon fas icon="comment-alt" />
                      </MDBBtn>
          <Link to="/" className="lilog">Log Out</Link>

          </nav>
        </Row >
    </Space>
    <div>
        <Routes>
          <Route path="/" element={<Login auth={authenticate} />} />
          <Route path="/home" element={<Home logout={logout} status={status} />}/>
          <Route path="/shop" element={<MedicationList/>}/>
          <Route path="/doc" element={<Doc/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/cart" element={<Cart/>}/>

        </Routes>
    </div>
    
      <Footer/>

    </>
  );
}

export default App;
