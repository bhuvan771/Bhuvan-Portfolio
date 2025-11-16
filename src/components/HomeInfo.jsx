import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const DragInstruction = () => (
  <div
    className="
      fixed bottom-6 left-1/2 -translate-x-1/2 z-50
      pointer-events-none

      /* sizing: wide on very small screens, auto on larger screens */
      w-[60%] max-w-[420px] sm:w-auto

      /* padding & shape */
      px-4 py-2 sm:px-5 sm:py-3 rounded-full

      /* visual style: subtle glass look */
      bg-blue-600/70 backdrop-blur-sm border border-white/8
      shadow-lg

      /* text */
      text-white text-sm sm:text-base

      /* layout */
      flex items-center gap-3 justify-center

      /* subtle breathing animation (slow) */
      animate-hard-blink

    "
    role="status"
    aria-hidden="true"
  >
    {/* Icon circle */}
    <span
      className="
        flex items-center justify-center
        w-8 h-8 sm:w-9 sm:h-9 rounded-full
        bg-white/10 ring-1 ring-white/6
        text-sm sm:text-lg
      "
      aria-hidden="true"
    >
      🎮
    </span>

    {/* Text block */}
    <div className="flex flex-col leading-tight pointer-events-none">
      <span className="font-semibold">Hold &amp; drag to move</span>
      <span className="text-[11px] sm:text-xs text-white/80 -mt-0.5">
        Use one finger on mobile
      </span>
    </div>
  </div>
);

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
  const [showInstruction, setShowInstruction] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const showTimer = setTimeout(() => {
      setShowInstruction(true);
    }, 2000);

    // Hide on first drag
    const handlePointerMove = () => {
      setShowInstruction(false);
      window.removeEventListener("pointermove", handlePointerMove);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      {renderContent[currentStage] || null}
      {currentStage === 1 && showInstruction && <DragInstruction />}
    </>
  );
};

export default HomeInfo;
