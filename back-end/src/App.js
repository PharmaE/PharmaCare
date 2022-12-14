import React, { useState, useEffect } from "react";
import "./App.css";

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
