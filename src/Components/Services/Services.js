import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ServiceCart from "../ServiceCart/ServiceCart";
import "./Services.css";
import serviceBG from "../../images/service-bg.png";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = "./services.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="services">
        <div className="col-6">
          <img className="service-bg" src={serviceBG} alt="" />
        </div>
        <div className="col-6 services-quote">
          <h1 className="fw-bolder">Our Services</h1>
          <p className="text-muted">
            This is Our Interesting Services for all the people. Hopefully that
            might be interesting for you. Stay Connected with us
          </p>
        </div>
      </div>
      <div className="container services-card mt-5">
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <ServiceCart key={service.id} service={service} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
