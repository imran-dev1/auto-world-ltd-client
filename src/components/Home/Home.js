import React from "react";
import Banner from "./Banner/Banner";
import CallToAction from "./CallToAction/CallToAction";
import Counter from "./Counter/Counter";
import ItemsSection from "./ItemsSection/ItemsSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
          <ItemsSection></ItemsSection>
          <Counter></Counter>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
