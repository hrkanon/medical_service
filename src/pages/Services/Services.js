import React from "react";
import useFetch from "../../Hooks/useFetch";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useFetch();
  const allServices = services.filter((service) => service.type !== "doctor");

  return (
    <div>
      <div className="container mt-5">
        <div>
          <h2 className="text-center mt-5">Our Services</h2>
          <hr />
        </div>
        <div className="row g-3 mt-4">
          {allServices.map((service) => (
            <Service service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;