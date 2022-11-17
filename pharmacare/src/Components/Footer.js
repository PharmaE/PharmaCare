import React from "react";
import './Footer.css';
import {List, Row} from 'antd';
import { Header } from "antd/lib/layout/layout";
import Link from "antd/lib/typography/Link";

export default function Footer(){
    return(
      <List className="footer-list">
        <Row className="footer-row">
        <List.Item className="footer-listitem">
          <Header className="footer-heading">About Us</Header>
          <Link className="footer-link">Aim</Link><br/>
          <Link className="footer-link">Vision</Link><br/>
          <Link className="footer-link">Testimonials</Link><br/>
        </List.Item>
        <List.Item className="footer-listitem">
          <Header className="footer-heading">Services</Header>
          <Link className="footer-link">Therapiya</Link><br/>
          <Link className="footer-link">Pharmacology</Link><br/>
          <Link className="footer-link">Testimonials</Link><br/>

        </List.Item>
        <List.Item className="footer-listitem">
          <Header className="footer-heading">Contact Us</Header>
          <Link className="footer-link">Toronto</Link><br/>
          <Link className="footer-link">Missisauga</Link><br/>
          <Link className="footer-link">Alberta</Link><br/>

        </List.Item>


        </Row>
        <footer className="footer">
          &copy; Website 2022|All Rights Reserved Privacy | Terms | Help <br/>
          Ajima & Jaspreet
        </footer>

      </List>


    )
}