import React, { useState } from "react";
import { Card } from "antd";
import { useState } from "react";
export function Medication() {
  const [age, setAge] = setState(0);
  return (
    <Col>
      <Card
        title="default size card"
        extra={<a href="#">More</a>}
        style={{ width: "30" }}
      >
        <hr />
        <h2>{props.medicine}</h2>
        <h2>{props.Date}</h2>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
      </Card>
    </Col>
  );
}
