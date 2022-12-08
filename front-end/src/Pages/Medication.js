import React from "react";
import { Card} from "antd";
import CardContent from "@mui/material/CardContent";

export default function Medication(props) {
  
  return (
    <React.Fragment>
      <CardContent>
      <Card title="Medicine Info" style={{padding:'18px', width: "30" }}>
        <h2>{props.Medication}</h2>
        <h2>{props.Directions}</h2>
        <h2>{props.Quantity}</h2>
        <h2>{props.Refills}</h2>
        <h2>{props.Prescriber}</h2>
        <h2>{props.Use}</h2>
      </Card>
    </CardContent>
    </React.Fragment>
  );
}