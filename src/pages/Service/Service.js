import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, descriptionOne, imageOne } = props.service;

  return (
    <div id="services" className=" col-md-4">
      <div className=" card m-2 p-4 ">
        <div>
          <div className="text-center">
            <img className="service-img" src={imageOne} alt="" />
          </div>
          <div className="service-info mt-3">
            <h3>{name}</h3>
            <p>{descriptionOne}</p>
            <div className="details">
              <Link to={`/details/${id}`}>
                Details <i class="fas fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
