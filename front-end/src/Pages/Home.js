import React from "react";
import { Card, Col, Row } from "antd";


const { Meta } = Card;

export default function Home() {
  return (
    <>
   
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
        <Row gutter={25}>
        <Col span={2}>
        <Card
          hoverable
          style={{ width: 180 }}
          cover={
            <img
              alt="example"
              src="https://www.rexall.ca/static/version1669727032/frontend/Rexall/default/en_US/images/icons/callout-icon-covid-19.png?t=1669727099"
            />}>
            <Meta title="Get Your COVID-19 Vaccine"  />
        </Card>
        <Card
          hoverable
          style={{ width: 180 }}
          cover={
            <img
              alt="example"
              src="https://www.rexall.ca/static/version1669727032/frontend/Rexall/default/en_US/images/icons/callout-icon-flu-shot.png?t=1669727099"
            />}>
            <Meta title="Get Your Flu Shot"  />
        </Card>
        </Col>
        </Row>
      </div>
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
