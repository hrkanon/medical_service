import React from "react";
import "./Banner.css";
import img from "../../images/banner-img-1.png";
import img2 from "../../images/banner-img-3.png";
import img3 from "../../images/banner-img-8-removebg-preview (2).png";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="row item-1">
          <div className="col-md-6 my-auto text-center pt-3">
            <h1 className="heading-one ">
              <span className="text-warning">WE PROVIDE</span> TOTAL <br />{" "}
              HEALTH CARE SOLUTION{" "}
            </h1>
            <h4>
              Everyday we bring hope to thousands of people hardest as a sign of
              God's unconditional love
            </h4>
          </div>
          <div className="col-md-6">
            <img className="d-block w-100" src={img} alt="First slide" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row item-2">
          <div className="col-md-6 my-auto text-center pt-3">
            <h1 className="heading-one ">
              THE RIGHT <span className="text-warning">PEDIATRICIAN</span>
            </h1>
            <h4 className="p-3">
              We at MediCare are always fully focused on helping your child and
              you to overcame any hurdle, whether it’s chicken pox or just a
              seasonal flue.
            </h4>
          </div>
          <div className="col-md-6">
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
