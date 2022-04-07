import React from "react";
import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navigation";
import Statistics from "../Component/Statistics";
// import Search from "../Component/Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <Statistics />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
