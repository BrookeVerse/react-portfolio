import React from "react";

import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";

import meter1 from "../../assets/Images/meter1.svg";
import meter2 from "../../assets/Images/meter2.svg";
import meter3 from "../../assets/Images/meter3.svg";
import colourSharp from "../../assets/Images/color-sharp.png";

import "./Skills.scss";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>I have done two bootcamps for coding, I first started doing the basic bootcamp from SheCodes. I wanted to learn more and really make this my career path, so I joined _nology in which I was taught how to become a full stack developer. Being able to code a full frontend and backend project.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Jest Testing</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Java</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colourSharp} alt="" />
    </section>
  );
};

export default Skills;
