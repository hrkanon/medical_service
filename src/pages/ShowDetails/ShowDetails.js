import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";
import "./ShowDetails.css";

const ShowDetails = () => {
  const [details, setDetails] = useState([]);
  const { serviceId } = useParams();
  const [services] = useFetch();

  useEffect(() => {
    const detailsItem = services.find((service) => service.id == serviceId);
    console.log(detailsItem);
    setDetails(detailsItem);
  }, [services, serviceId]);

  return (
    <div className="container mt-3 show-details">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="text-center details-heading">{details?.name}</h2>
          <p className="text-center">
            {details?.descriptionOne} {details?.descriptionTwo}
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <img className="details-img " src={details?.imageTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
