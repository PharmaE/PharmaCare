import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import Login from "./Login";
import Home from "./Home";
import Medication from "./Medication";
import Doc from "./Doc"; 

import {Link, Route, Router} from 'react-router-dom';
require('react-bootstrap');


export default function Navbar(){
    return(
        <Router>
            <div className="Navigationbar">
            <Navbar staticTop>
                <Navbar.Header>
                  <Navbar.Brand>
                    Pharma Care
                  </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to="/">Home</Link></NavItem>
                        <NavItem><Link to="/">Shop</Link></NavItem>
                        <NavItem><Link to="/">Docs</Link></NavItem>
                        <NavItem><Link to="/">About</Link></NavItem>
                        <NavItem><Link to="/">Contact Us</Link></NavItem>

                    </Nav>
                    <Nav pullRight>
                    <NavItem><Link to="/">Sign Up</Link></NavItem>
                    <NavItem><Link to="/">Sign In</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/shop" component={Medication}/>
            <Route path="/docs" component={Doc}/>
            


            </div>

           
        </Router>
    )
}