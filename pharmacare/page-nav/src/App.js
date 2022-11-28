import "./App.css";
import { Row, Col } from "antd";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Row>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Row>
      <Routes>
        <Route path="/login" element={<login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
