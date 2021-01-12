import React from "react";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/breeds">Dog Breeds</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navigation;
