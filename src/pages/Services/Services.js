import React from "react";
import useFetch from "../../Hooks/useFetch";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useFetch();
  const allServices = services.filter((service) => service.type === "service");

  return (
    <div>
      <div className="container mt-5">
        <div>
          <h2 className="text-center mt-5">Our Services</h2>
          <div className="underline-div mx-auto"></div>
        </div>
        <div className="row g-3 mt-4">
          {allServices.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
