import Medication from "/Medication";
import "./App.css";
import {Row,Col} from AudioWorkletNode;

function App() {
  const store = [{ title: "tylanole" }, { name: "chris" }, { age: "32" }];
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
      {store.map((storeObj) => {
        <Medication tittle={storeObj.title}></Medication>;
      })}
      </Col>
      </Row>
    </div>
  );
}

export default App;
