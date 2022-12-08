import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

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
      <div>
        <Routes>
          <Route path="/" element={<Login auth={authenticate} />} />
          <Route
            path="/home"
            element={<Home logout={logout} status={status} />}
          />
        </Routes>
      </div>


    </>
  );
}

export default App;
