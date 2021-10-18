import React from "react";
import "./Doctors.css";
import useFetch from "../../Hooks/useFetch";

const Doctors = () => {
  const [services] = useFetch();
  const allDoctors = services.filter((service) => service.type === "doctor");
  return (
    <div>
      <h2 className="text-center mt-5">Meet Our Doctors</h2>
      <hr />
      <div className="container">
        <div className="row mt-3 g-3">
          {allDoctors.map((doctor) => (
            <div key={doctor.id} className="col-md-4">
              <div className="card m-2 p-3">
                <div className=" text-center">
                  <img
                    className="doc-img rounded"
                    src={doctor.imageOne}
                    alt=""
                  />
                </div>
                <div className="meal-info text-center">
                  <h4>{doctor.name}</h4>
                  <p>{doctor.degree}</p>
                  <p>{doctor.degignation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
