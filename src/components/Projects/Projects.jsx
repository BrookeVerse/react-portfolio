import React from "react";

import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

import ProjectCards from "../ProjectCards/ProjectCards";
import colorSharp2 from "../../assets/Images/color-sharp2.png";
import webPageImg from "../../assets/Images/webpageProject.png";
import calcuImg from "../../assets/Images/calculatorProject.png";
import morseImg from "../../assets/Images/morseCodeProject.png";
import ticketTrackerImg from "../../assets/Images/ticketTrackerProject.png";
import punkApiImg from "../../assets/Images/punkAPIProject.png";

import "./Projects.scss";

const Projects = () => {
  const basics = [
    {
      title: "A Simple Web Page",
      description: "My First ever project, creating a simple web page using HTML, CSS and a little JavaScript.",
      imgUrl: webPageImg,
    },
    {
      title: "A Simple Calculator",
      description: "This was my first project that focused on JavaScript, using it to allow people to do simple calculations",
      imgUrl: calcuImg,
    },
    {
      title: "Morse Code Project",
      description: "Created this webpage project using HTML, CSS and Javascript using data to translate morse code to English and back again",
      imgUrl: morseImg,
    },
  ];

  const reacts = [
    {
      title: "Ticket Tracker",
      description: "My first React project using React, reproducting ticket trackers for employees and employers to see how many tasks each person is doing.",
      imgUrl: ticketTrackerImg,
    },
    {
      title: "Punk API",
      description: "Project using React and an API, creating a web page that is routed and allows users to find beers to get more information about that beer.",
      imgUrl: punkApiImg,
    },
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>When I started this journey I didn't know how to code anything. As you go through my project you will see my skills advance and become professional and more advanced.</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Basics</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Java</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {basics.map((basic, index) => {
                      return <ProjectCards key={index} {...basic} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {reacts.map((react, index) => {
                      return <ProjectCards key={index} {...react} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    Coming Soon...
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

export default Projects;
