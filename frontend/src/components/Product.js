import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>
      <Card.Text>
        <Rating
          value={product.rating}
          text={` ${product.numReviews} reviews`}
        ></Rating>
      </Card.Text>
      <Card.Text> {product.price} EUR </Card.Text>
    </Card>
  );
};

export default Product;