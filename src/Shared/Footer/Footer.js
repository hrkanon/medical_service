import React from "react";
import "./Footer.css";
import logo from "../../images/logo-2.png";

const Footer = () => {
  return (
    <div className=" mt-5 bg-dark text-white w-100">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-3 ">
            <h4>Contact Us</h4>
            <p>
              <i class="fas fa-phone"></i> +91 892 944 8112
            </p>
            <p>
              <i class="far fa-envelope"></i> care@lyfboat.com
            </p>
            <p>
              <i class="fab fa-facebook-square icon"></i>
              <i class="fab fa-instagram-square icon px-2"></i>
              <i class="fab fa-twitter-square icon"></i>
              <i class="fab fa-linkedin px-2 icon"></i>
            </p>
          </div>
          <div className="col-md-3 mx-auto">
            <div>
              <h4>About Us</h4>
              <p>Careers</p>
              <p>Services</p>
              <p>General Health Advisory</p>
              <p>Our Blog</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div>
              <h4>Patients</h4>
              <p>How it Works</p>
              <p>Find a Hospital</p>
              <p>Find a Doctor</p>
              <p>Review Policy</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div>
              <h4>Providers</h4>
              <p>How it Workes</p>
              <p>Hospital Registration</p>
              <p>Doctor Registration</p>
              <p>My Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
