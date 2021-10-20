import { Carousel } from "react-bootstrap";
import "./Review.css";
import useFetch from "../../Hooks/useFetch";

const Review = () => {
  const [services] = useFetch();

  const patients = services.filter((service) => service.type === "patient");

  return (
    <div id="review">
      <div className="review-details my-5">
        <h2 className="fw-bold text-center review-heading">
          <span className="text-warning">What Others Said</span> About Medicare
        </h2>
        <p className="text-center">
          5 star customer reviews are often given to MedService for the doctors,
          technology and the fast, helpful patient support team.
        </p>
      </div>
      <Carousel variant="none" className="w-75 mx-auto mb-3">
        {patients.map((patient) => (
          <Carousel.Item className="text-center" key={patient.id}>
            <p>{patient.review}</p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="review-line"></div>
              <div>
                <img
                  className=" review-img mx-2 rounded-circle"
                  src={patient.imageOne}
                  alt="First slide"
                />
              </div>
              <div className="review-line"></div>
            </div>
            <h5 className="mt-2">
              {patient.name} <small> - {patient.treatment} Treatment</small>
            </h5>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Review;
