import React from "react";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import Section6 from "../Section6/Section6";
import Header from "../Header/Header";
import Scroll from "../Scroll/Scroll";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div className="main-div">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Scroll />
      <Footer />
    </div>
  );
}
export default Main;
