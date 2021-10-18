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
    // <div>
    //   <h2>Showing Details</h2>
    //   <img src={details?.imageTwo} alt="" />
    //   <h4>{details?.name}</h4>
    // </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>{details?.name}</h2>
          <p>
            {details?.descriptionOne} {details?.descriptionTwo}
          </p>
        </div>
        <div className="col-md-6">
          <img className="details-img" src={details?.imageTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
