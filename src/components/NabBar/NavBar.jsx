import React from 'react'
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../../assets/Images/logo.svg";
import navIcon1 from "../../assets/Images/nav-icon1.svg";
import navIcon2 from "../../assets/Images/nav-icon2.svg";

import "./NavBar.scss"

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false); 

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#">
                    <img src={navIcon1} alt="Linked In" />
                    <img src={navIcon2} alt="Github" />
                </a>
            </div>
            <button className='vvd' onClick={() => console.log("connect")}></button>
            <span>Let's Connect</span>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar