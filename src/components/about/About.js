import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./About.module.css";

const About = () => {
  return (
    <Container fluid>
      <Row className={styles.rowStyle}>
        <Col>
        <h3>Its all about Dogs!</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
