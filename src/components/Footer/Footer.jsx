import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import logo from "../../assets/Images/logo.svg";
import navIcon1 from "../../assets/Images/nav-icon1.svg";
import navIcon2 from "../../assets/Images/nav-icon2.svg";

import "./Footer.scss"
const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <Col sm={6}>
                    <img src={logo} alt="" className='footer-img'/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className='social-icon'>
                        <a href=""><img src={navIcon1} /></a>
                        <a href=""><img src={navIcon2} /></a>
                    </div>
                    <p>CopyRight 2022. All Rights Reserved By Brooke Waldorf-Wells </p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer