import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row as="py-3">
          <Col className="text-center">Copyright &copy; Mern-Shop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
