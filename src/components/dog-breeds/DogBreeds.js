import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import axios from "axios";
import styles from "./DogBreeds.module.css";

const DogBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [breedImages, setBreedImages] = useState([])

  useEffect(() => {
    console.log("Dog breeds page");
    const breedsApi = async () => {
      const { data, status } = await axios.get(
        "https://dog.ceo/api/breeds/list/all"
      );
      if (status >= 200 && status < 300) {
        const { message } = data;
        const breedsName = Object.keys(message);
        setBreeds(breedsName);
      }
    };
    breedsApi();
    handleBreedChange("random")
  }, []);

  const handleBreedChange = async (breed) => {
    console.log(breed);
    let url;
    if(breed === "random"){
      url = "https://dog.ceo/api/breeds/image/random/3";
    }else {
      url = `https://dog.ceo/api/breed/${breed}/images/random/3`;
    }
    const { data, status } = await axios.get(url);
    if(status >= 200 && status < 300){
      const {message} = data;
      setBreedImages(message);
    }
    
  };

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  console.log(breeds);
  console.log(breedImages);

  return (
    <Container fluid>
      <Row className={styles.rowStyle}>
        <Col lg={2}>
          <h3>Select a dog breed</h3>
        </Col>
        <Col lg={4}>
          <Form>
            <Form.Control
              as="select"
              size="md"
              onChange={(event) => handleBreedChange(event.target.value)}
            >
              <option key="random" value="random">Random</option>
              {breeds.map((breed, i) => (
                <option key={i} value={breed}>
                  {capitalize(breed)}
                </option>
              ))}
            </Form.Control>
          </Form>
        </Col>
      </Row>
      <Row className={styles.rowStyle}>
        {breedImages.map((breedImage) => (
          <Col>
            <Image
              src={breedImage}
              rounded
              fluid
              style={{ maxHeight: "500px" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DogBreeds;
