import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Button, Card, ListGroup, Image } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go back
      </Link>
      <Row>
        <Col md={7}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    Status:
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    Price:
                    <Col>
                      <h4>{product.price}</h4>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={` ${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
