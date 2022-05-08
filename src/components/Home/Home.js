import React from "react";
import Banner from "./Banner/Banner";
import CallToAction from "./CallToAction/CallToAction";
import ItemsSection from "./ItemsSection/ItemsSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ItemsSection></ItemsSection>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
