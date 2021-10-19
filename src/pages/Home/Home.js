import React from "react";
import About from "../../About/About";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Review></Review>
    </div>
  );
};

export default Home;
