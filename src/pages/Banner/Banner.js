import React from "react";
import "./Banner.css";
import img from "../../images/banner-img-1.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 heading my-auto text-center">
            <h1 className="heading-one ">HIGHEST QUALITY MEDICAL TREATMENT</h1>
            <h3> YOUR HEALTH IS OUR CONCERN</h3>
            <button className="btn btn-warning rounded-pill">
              Our Services
            </button>
          </div>
          <div className="col-md-6 text-center">
            <img className="banner-img img-fluid" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
