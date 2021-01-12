import React, { useState, useEffect } from "react";
import { randomDogApi } from "../../api";
import { Image, Container, Row, Col } from "react-bootstrap";
import styles from "./RandomDog.module.css";

const RandomDog = () => {
  const [randomImage, setrandomImage] = useState({});

  useEffect(() => {
    console.log("Random Dog Page.");
    const apiCall = async () => {
      console.log("Api call is happening");
      const { data, status } = await randomDogApi();
      if (status >= 200 && status < 300) {
        setrandomImage(data);
      }
    };
    apiCall();
  }, []);

  console.log(randomImage.message);

  return (
    <Container fluid>
      <Row className={styles.rowStyle}>
        <Col>
          <h3>Dogs Make You Happy!</h3>
        </Col>
      </Row>
      <Row className={styles.rowStyle}>
        <Col>
          <Image
            src={randomImage.message}
            rounded
            fluid
            style={{ maxHeight: "500px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default RandomDog;
