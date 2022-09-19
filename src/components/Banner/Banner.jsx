import React from "react";
import { useState, useEffect } from "react";

import { ArrowRightCircle } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

import headerImg from "../../assets/Images/header-img.svg";

import "./Banner.scss";
import "animate.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["Junior Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) => 
              <div className={isVisible ? "animate__animated animate__pulse": ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  {`👋Hi there I'm Brooke `}
                  <span className="wrap">{text}</span>
                </h1>
                <p>
                  Working in this field has always been something I have wanted to do, and with the currently landscape of the tech industry it has
                  become a reality. I have been trained on HTML, CSS, JavaScript and React. Working through project to keep learning and growing to
                  become a valuable asset to any team.
                </p>
                <a href="#connect">
                <button>
                  Let's Connect <ArrowRightCircle size={25} />{" "}
                </button>
                </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
