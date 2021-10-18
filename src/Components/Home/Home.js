import React from "react";
import "./Home.css";
import bannerImg from "../../images/banner-img.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="col-6">
          <h1 className="home-text">
            We Provide top <br /> medical Services
          </h1>
          <p className="home-para">More than 30 professionals</p>
        </div>
        <div className="col-6">
          <img className="home-img" src={bannerImg} alt="" />
        </div>
      </div>
      <div className="explore">
        <div className="emergency">
          <h4>For Emergencies</h4>

          <p className="pt-5 fw-bolder">
            An emergency room (ER) doctor treats infections and injuries in a
            hospital emergency room or urgent care facility.
          </p>
          <p className="fw-bolder text-white pt-5">Read More</p>
        </div>
        <div className="doctors">
          <h4>The Doctors</h4>
          <p className="pt-5 fw-bolder">
            For Need Any Doctor you need to appointment. For any Emergencies
            Purpose you can contact with us.
          </p>
          <p className="fw-bolder text-white pt-5">Read More</p>
        </div>
        <div className="appointment">
          <h5>Book an Appointment</h5>
          <div className="mt-3">
            <input
              className="appointment-input"
              type="text"
              placeholder="Name"
            />
            <br />
            <br />
            <input
              className="appointment-input"
              type="text"
              placeholder="Phone"
            />
            <br />
            <br />
            <input
              className="appointment-input"
              type="email"
              placeholder="email"
            />
          </div>
          <NavLink to="/services/:id">
            <button className="appointment-btn">Make an Appointment</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
