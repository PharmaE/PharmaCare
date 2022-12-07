import { Row,Col,Divider} from 'antd';
import './App.css';
import {useState ,useEffect } from 'react';
import { useActionData } from 'react-router-dom';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import Login from "../../../front-end/src/Pages/Login";
import Home from "../../../front-end/src/Pages/Home";
import Medication from "/Medication";


function App() {

  const[medication, setMedication]=useState(null);

  

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/').then((response)=>{
      setMedication(response.data);
      setStatus(true);
    }).catch(()=>{
      console.log('api call failed');
      setStatus(false);
    })
    
  },[])

  const [status, setStatus] = useState(false);

  const authenticate = ()=>{
    setStatus(true)
  }

  const logout = ()=>{
    setStatus(false)
  }


  return (
    <>

  <div>
  <Routes>
   

   <Route path="/" element={<Login auth={authenticate}/>} />
   <Route path="/home" element={<Home logout={logout} status={status}/>} />
   
 </Routes>
</div>
<div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
      {store.map((storeObj) => {
        <Medication tittle={storeObj.title}></Medication>;
      })}
      </Col>
      </Row>
</div>

</>
);
}

export default App;


