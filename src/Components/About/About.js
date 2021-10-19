import React from "react";
import "./About.css";
import aboutImg from "../../images/medica-image.webp";
const About = () => {
  return (
    <div className="text-center">
      <div className="about-sec">
        {/* about us heading  */}
        <h2 className="fw-bolder">About Us</h2>
      </div>
      {/* elemenetor container  */}
      <div className="elemenetor-container">
        <div className="col-6">
          <img src={aboutImg} alt="" />
        </div>
        <div className="col-6">
          <span className="about-us-title fw-bolder">About us</span>
          <h1 className="fw-bolder pt-4">
            {/* about us content  */}
            Welcome to Medica Health Center
          </h1>
          <p className="text-muted fw-bolder">
            When you come to counseling, we work with you, your situation /
            issue and together we find the best treatment for you. All the tools
            we will use, you will be able to apply later in life, without
            necessarily turning to the coach every time.
          </p>
          {/* contact us button  */}
          <button className="about-more-info-btn fw-bolder">
            More Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
