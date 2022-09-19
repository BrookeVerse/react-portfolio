import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import logo from "../../assets/Images/logo.svg";
import navIcon1 from "../../assets/Images/nav-icon1.svg";
import gitLogo from "../../assets/Images/gitLinkVector.svg";

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
                        <a href="https://www.linkedin.com/in/brooke-waldorf-wells-048269234/" target="_blank"><img src={navIcon1} /></a>
                        <a href="https://github.com/BrookeVerse" target="_blank"><img src={gitLogo} /></a>
                    </div>
                    <p>CopyRight 2022. All Rights Reserved By Brooke Waldorf-Wells </p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer