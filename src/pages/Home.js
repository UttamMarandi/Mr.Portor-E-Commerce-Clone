import React from "react";
import Header from "../components/Header";
import PorterBanner from "../Images/porter_banner.jpg";
import PorterBanner2 from "../Images/porter_banner_2.jpg";

const Home = () => {
  return (
    <div className="home_page">
      <Header />
      <div className="main max-w-6xl mx-auto">
        <div className="top_banner_text pt-6 pb-6 border-b-2 border-gray-400">
          <h2 className="text-center">THE MEN'S STYLE DESTINATION</h2>
        </div>
        <div className="top_banner_img pt-7 pb-7 border-b-2 border-gray-400 ">
          <img src={PorterBanner} alt="Banner" />
        </div>
        <div className="top_banner_2_img pt-7 pb-7">
          <img src={PorterBanner2} alt=" Banner 2" />
        </div>
        {/* section 2 */}
        <div className="section_2 grid grid-flow-col pb-10">
          <div className="left_container col-span-4 p-7">
            <h3 className="text-sm">THE JOURNAL</h3>
            <h2 className="text-4xl leading-10 pt-5">
              Go Out: An Urban Hike Through The Streets Of Tokyo
            </h2>
          </div>
          <div className="right_container col-span-8 p-7">
            <p className="pt-11">
              For while Tokyo is certainly a lot to take in, the Japanese
              capital is also a playground ripe for outdoor adventure and
              exploration and a brilliant place to go walking.
            </p>
            <button className="pt-4 underline">Show More</button>
          </div>
        </div>
        {/* Section 3 */}
      </div>
    </div>
  );
};

export default Home;
