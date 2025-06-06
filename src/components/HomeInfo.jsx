import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>{" "}
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText} <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Bhuvan Kumar</span>👋
      <br />An AI & ML graduate from India
    </h1>
  ),

  2: (
    <InfoBox
      text="Built technical expertise and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),

  3: (
    <InfoBox
      text="Worked on one solid project recently. Curious about the impact?"
      link="/Projects"
      btnText="Visit my portfolio"
    />
  ),

  4: (
    <InfoBox
      text="Looking to build something great? I’m just a few keystrokes away!"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
