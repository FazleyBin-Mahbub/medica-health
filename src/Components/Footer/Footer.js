import React from "react";
import "./Footer.css";
import footerBanner from "../../images/footer-banner.webp";
import timeLogo from "../../images/time.webp";
import locationLogo from "../../images/location.webp";
import messageLogo from "../../images/message.webp";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content mt-4">
          <div className="col-md-4 col-sm-12 medica-part">
            {/* medica part  */}
            <img src={footerBanner} alt="" />
            <p className="text-white medica-para">
              Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit
              amet, maximus vehicula nibh. Praesent pulvinar porta elit, a
              commodo erat accumsan sed. Vivamus vel tristique nibh.
            </p>
          </div>
          {/* Medica part end  */}

          {/* useful links  */}
          <div className="col-md-4 col-sm-12 text-white useful-links">
            <h6>Useful Links</h6>
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
          {/* useful links end  */}

          {/* contact us section  */}
          <div className="col-md-4 col-sm-12 text-white contact-us">
            <h6>Contact Us</h6>
            <div className="contact">
              <div className="time">
                <img src={timeLogo} alt="" />
                <p className="ps-3">
                  Monday - Friday 08:00 - 21:00 <br />
                  Saturday & Sunday - CLOSED
                </p>
              </div>
              <div className="mt-4 location">
                <img src={locationLogo} alt="" />
                <p className="ps-3">
                  Lamas Carbajal Str, no 14-18 <br /> 41770 Montellano
                </p>
              </div>
              <div className="mt-4 message">
                <img src={messageLogo} alt="" />
                <p className="ps-3">
                  0080 673 729 766
                  <br />
                  contact@business.com
                </p>
              </div>
            </div>
          </div>
          {/* contact section end  */}
        </div>
        <hr className="footer-divider" />
        <p className="footer-titlte"> &copy; All Rised Reserved || Medica-2021 @Fazley Bin Mahbub</p>
      </div>
    </div>
  );
};

export default Footer;
