import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
// import TrackVisibility from "react-on-screen";
const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Omer`} <span className="wrap">web developer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa
              quam iusto, vero nobis sequi!
            </p>
            <button
              onClick={() => {
                console.log("connect");
              }}
            >
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
