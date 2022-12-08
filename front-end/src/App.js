import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import "./App.css";
import { useActionData } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Medication from "./Pages/Medication";
import MyCard from "./Components/MyCard";

function App() {
  const [medications, setMedications] = useState(null);
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

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            {status && medications.map((medicationObj) => {
                return <MyCard tittle={medicationObj.title} />;
              })}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
