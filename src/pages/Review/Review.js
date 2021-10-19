import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div id="review" className="my-5 ">
      <div className="review-details">
        <h2 className="fw-bold text-center review-heading">
          <span className="text-warning">What Others Said</span> About Medicare
        </h2>
        <p className="text-center">
          5 star customer reviews are often given to MedService for the doctors,
          technology and the fast, helpful patient support team.
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-md-3 col-12 text-center">
          <p>
            The hospital is really nice but the support for any questions or
            issues is amazing. especially your emergency response in the
            emergency section is really quick and handle situation efficiently.
          </p>
          <div>
            <hr className="w-100 text-dark border-dark" />
            <h4 className="fw-bold">Kaniz Fatema</h4>
            <div className="star text-center">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning "></i>
              <i class="fas fa-star text-warning "></i>
              <i class="fas fa-star text-warning"></i>
            </div>
          </div>
        </div>
        <div className="col-md-3  col-12 text-center">
          <p>
            Amazing and lighting fast support from a team that is always there.
            The environment of MedService inside and outside is soothing and
            relaxing. Thank you MedService for your Wonderful Team!
          </p>
          <div>
            <hr className="w-100 text-dark border-dark" />
            <h4 className="fw-bold"> Jahanara Ferdous</h4>
          </div>
          <div className="star text-center">
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning "></i>
            <i class="fas fa-star text-warning "></i>
            <i class="fas fa-star text-warning"></i>
          </div>
        </div>
        <div className="col-md-3 col-12 text-center">
          <p>
            This is the best hospital I have ever seen in Bangladesh. Doctors,
            stuffs and the technology you use everything is the international
            standard. Keep growing MedService!!
          </p>
          <div>
            <hr className="w-100 text-dark border-dark" />
            <h4 className="fw-bold">John Smith</h4>
          </div>
          <div className="star text-center">
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning "></i>
            <i class="fas fa-star text-warning "></i>
            <i class="fas fa-star text-warning"></i>
          </div>
        </div>
        <div className="col-md-3 col-12 text-center">
          <p>
            MedService is one of the leading hospital in Bangladesh. they have
            friendly stuff, doctors and the cost of the service is preety
            reasonable compare to their service. Keep it up MedService!!
          </p>
          <div>
            <hr className="w-100 text-dark border-dark" />
            <h4 className="fw-bold">Abul Kalam</h4>
          </div>
          <div className="star text-center">
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning "></i>
            <i class="fas fa-star text-warning "></i>
            <i class="fas fa-star text-warning"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
