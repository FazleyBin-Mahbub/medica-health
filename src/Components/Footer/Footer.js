import React from "react";
import "./Footer.css";
import footerBanner from "../../images/footer-banner.webp";
const Footer = () => {
  return (
    <div>
      <div className="footer mt-4">
        <div className="col-4">
          <img src={footerBanner} alt="" />
          <p className="text-white">
            Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit
            amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo
            erat accumsan sed. Vivamus vel tristique nibh.
          </p>
        </div>
        <div className="col-4 text-white">
          <h4>Useful Links</h4>
          <ul>
            <li>FAQ</li>
            <li>Book an appointments</li>
            <li>Contact</li>
            <li>Testmonials</li>
            <li>Doctors</li>
            <li>Services</li>
            <li>Our Partners</li>
            <li>Emergency Cases</li>
          </ul>
        </div>
        <div className="col-4 text-white">
          <h4>Contact Us</h4>
          <div>
            <p>Monday - Friday 08:00 - 21:00</p>
            <p>Saturday & Sunday - CLOSED</p>
          </div>
          <div>
            <p>Lamas Carbajal Str, no 14-18</p>
            <p>41770 Montellano</p>
          </div>
          <div>
            <p>0080 673 729 766</p>
            <p>contact@business.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
