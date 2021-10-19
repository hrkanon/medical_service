import React from "react";
import "./About.css";
import about from "../images/banner-img-2.jpeg";

const About = () => {
  return (
    <div className="my-5 about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto">
            <img className="img-fluid py-5 rounded" src={about} alt="" />
          </div>
          <div className="col-md-6 my-auto">
            <h2 className="fw-bold mt-2 text-decoration-underline">ABOUT US</h2>
            <p>
              For over three decades, we have specialised in specific areas of
              medicine - mental health, orthopaedics, neurology, surgery and
              general medicine. This approach has given us an in-depth
              understanding of specific disorders and their treatments, enabling
              us to focus on providing the best treatment options and care for
              our patients. Each year, our 10,500 employees treat and care for
              around 320,000 patients at currently 26 locations in Germany and
              the United Kingdom. Our aim is to give every patient the prospect
              of a better quality of life. To do so, our reinvestment model
              ensures we maintain a high standard of quality and are able to be
              innovative and forward thinking with our infrastructure, clinical
              delivery and staff development. Additionally, our collaboration
              with experienced specialists, expert healthcare professionals,
              clinical partners and patient groups ensures we provide the
              best-possible experience and care for patients and their families
              when visiting our hospitals.
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-div text-center ">
                    <i class="fas fa-ambulance icon medical-icon"></i>
                  </div>
                  <h5>Emergency Care</h5>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-div text-center ">
                    <i class="fas fa-procedures icon medical-icon"></i>
                  </div>
                  <h5>Operation Theater</h5>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-div text-center ">
                    <i class="fas fa-stethoscope icon medical-icon"></i>
                  </div>
                  <h5>Outdoor Checkup</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-div text-center ">
                    <i class="fas fa-user-nurse icon medical-icon"></i>
                  </div>
                  <h5>Cancer Service</h5>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-div text-center ">
                    <i class="fas fa-burn icon medical-icon"></i>
                  </div>
                  <h5>Blood Test</h5>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-div text-center ">
                    <i class="fas fa-capsules icon medical-icon"></i>
                  </div>
                  <h5>Pharmacy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
