import React from "react";
import "./Banner.css";
import img from "../../images/banner-img-1.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-white heading my-auto">
            <h1 className="heading-one ">HIGHEST QUALITY MEDICAL TREATMENT</h1>
            <h3> YOUR HEALTH IS OUR CONCERN</h3>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
