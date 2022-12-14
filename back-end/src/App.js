import React, { useState, } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Space, Row } from "antd";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Medication from "./Pages/Medication";
import Doc from "./Pages/Doc";
import Footer from "./Pages/Footer";

function App() {
  const commerce = new Commerce(process.env.REACT_APP_PUBLICKEY_SANDBOX);
  const [status, setStatus] = useState(false);
  const [cart, setCart] = useState();

  const authenticate = () => {
    setStatus(true);
  };

  const logout = () => {
    setStatus(false);
  };
  const addToCart = (productId, variantInfo) => {
    if (variantInfo) {
      commerce.cart.add(productId, 1, variantInfo).then((res) => {
        setCart(res.cart);
      });
    } else {
      window.alert("Please Select a Shirt Size");
    }
  };
  useEffect(() => {
    commerce.cart.retrieve().then((res) => {
      setCart(res);
    });
  }, []);

  return (
 <></>
  );
}

export default App;
