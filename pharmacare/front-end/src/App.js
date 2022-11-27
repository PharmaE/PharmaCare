import {  Datepicker,Row,Col,Divider} from antd;
import './App.css';
import {useState ,useEffect } from 'react';
import { useActionData } from 'react-router-dom';
import axios from 'axios';

function App() {
  const[medication, setMedication]=useState(null);
  const[status,setStatus]=useEffect(false);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/').then((response)=>{
      setMedication(response.data);
      setStatus(true);
    }).catch(()=>{
      console.log('api call failed');
      setStatus(false);
    })
    
  },[])


  return (
    <div>
  <Row gutter={16}>
    <Col className='gutter-row' span={6} xs={24} xl={8}>
 </Col>
  
  
  <Col className='gutter-row' xl={16} xs={24}>
Header
  </Col>
  </Row>
  <Divider orientation='left'>
    Item
  </Divider>
    <Row gutter={16}></Row>

  
  </div>
  );
}

export default App;

