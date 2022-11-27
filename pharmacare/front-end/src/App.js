import {  Datepicker,Row,Col,Card} from antd;
import './App.css';
import { useActionData } from 'react-router-dom';

function App() {
  return (
  <Row gutter={16}>
    <Col className='gutter-row' span={6} xs={24} xl={8}>
  <div>Hello
  <Card title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
       <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
  </Col>
  <Col className='gutter-row' xl={16} xs={24}>
  <Card title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
       <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

  </Col>
  </Row>
  );
}

export default App;
