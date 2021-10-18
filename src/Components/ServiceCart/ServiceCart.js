import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ServiceCart.css";
const ServiceCart = (props) => {
  const { name, desc, image, id } = props.service;
  return (
    <div>
      <Col className="cart">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title className="fw-bolder service-title">{name}</Card.Title>
            <Card.Text className="text-muted service-desc">{desc}</Card.Text>
            <NavLink to={`/services/${id}`}>
              <button className="appointment-btn">Appoinment Now</button>
            </NavLink>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ServiceCart;
