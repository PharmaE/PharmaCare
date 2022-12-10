import React, { useState } from "react";
import { Card, Col, Row, Button} from "antd";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';



const { Meta } = Card;

export default function Home() {
  const [size, setSize] = useState("large");
  const [open, setOpen] = React.useState(true);
  return (
    <>
    <div>
      {/*  Code for the  Alert Box*/}
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Apointment Booked!! Details are mailed 
        </Alert>
      </Collapse>
      </Box>

     {/* ****The Content of Home page ****/}
    </div>
      <div>
        <h1> Find The Best Doctor Near By You</h1>
        <h3>
          The Pharma Care is your best alternative to online and traditional
          big-box pharmacies.
        </h3>
        <p>
          Get the same conveniences free delivery, a free app, online refills &
          transfers, plus you will love our helpful, friendly and caring staff
          who go the extra mile on the phone and online.
        </p>
      </div>
      <div>

        {/********** The Card to book appointment for the vaccine***********/}
        <Row gutter={25}>
          <Col span={2}>
            <Card
              hoverable
              style={{ width: 280 }}
              cover={
                <img
                  alt="example"
                  src="https://www.rexall.ca/static/version1669727032/frontend/Rexall/default/en_US/images/icons/callout-icon-covid-19.png?t=1669727099"
                />
              }
            >
              <Meta title="Get Your COVID-19 Vaccine" />
              <br />
              <Button type="primary" size={size} disabled={open} variant="outlined" onClick={() => {setOpen(true);}}>
            Book Apointment
           </Button>
            </Card>
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src="https://www.rexall.ca/static/version1669727032/frontend/Rexall/default/en_US/images/icons/callout-icon-flu-shot.png?t=1669727099"/>}>
              <Meta title="Get Your Flu Shot" />
              <br />
            <Button type="primary" size={size} disabled={open} variant="outlined" onClick={() => {setOpen(true);}}>
            Book Apointment
           </Button>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Code for the Pharmacy Servies */}
      <h1>Pharmacy Serivces</h1>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={2}>
            <Card title="Caregivers" bordered={false}>
              PharmaCare is here to help support you with caregiving for your
              loved ones
            </Card>
          </Col>
          <Col span={2}>
            <Card title="Diabetes" bordered={false}>
              PharmaCare Pharmacists can help you manage diabetes.
            </Card>
          </Col>
          <Col span={2}>
            <Card title="Be Well" bordered={false}>
              Be Well™ simplifies the way you manage your medications & connect
              with your pharmacy.
            </Card>
          </Col>
          <Col span={2}>
            <Card title="Online Servies" bordered={false}>
              Connect with a Doctor virtually from the comfort of your home.
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
