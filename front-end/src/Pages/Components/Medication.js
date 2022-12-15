import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Medication(props) {
  
  

  return (
    <React.Fragment>
      <CardContent>
        <Card title=""style={{backgroundColor: "#00acc1", paddingLeft:'18px'}}>
          <h2>{props.name}</h2>
          <h2>{props.price}</h2>
          <h2>{props.rating}</h2>
          <h2>{props.countInStock}</h2>

         
        </Card>
      </CardContent>
    </React.Fragment>
  );
}