// src/pages/About.jsx
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences, workExperiences } from "../constants";
import Download from "../components/Download";
import Footer from "../components/Footer";

function TooltipPortal({ visible, content, x, y }) {
  const [isRendered, setIsRendered] = useState(visible);
  const animationDuration = 150; // ms

  // Effect to allow for exit animations
  useEffect(() => {
    let timeoutId;
    if (visible) {
      setIsRendered(true);
    } else {
      timeoutId = setTimeout(() => setIsRendered(false), animationDuration);
    }
    return () => clearTimeout(timeoutId);
  }, [visible]);

  if (!isRendered) return null;

  // --- Styles (GitHub-like) ---
  const style = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`, // this 'y' is the bottom edge of the icon (page coords)
    zIndex: 9999,
    pointerEvents: "none",

    // The tooltip box itself
    background: "white",
    color: "black",
    padding: "6px 10px",
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 500,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    whiteSpace: "nowrap",

    // Animation
    transition: `opacity ${animationDuration}ms ease-out, transform ${animationDuration}ms ease-out`,
    transformOrigin: "center top",
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateX(-50%) translateY(8px) scale(1)"
      : "translateX(-50%) translateY(0px) scale(0.95)",
  };

  return createPortal(
    <div style={style} role="tooltip" aria-hidden={!visible}>
      {content}
    </div>,
    document.body
  );
}

const About = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });

  // keep currently hovered/focused element ref
  const hoverRef = useRef(null);

  // show tooltip: position at the center-top of the element
  const showTooltip = (e, content) => {
    const target = e.currentTarget || e.target;
    if (!target || !target.getBoundingClientRect) return;

    const rect = target.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;

    // center X of the element (viewport coords -> page coords)
    const centerX = rect.left + rect.width / 2 + scrollX;

    // y coordinate for bottom edge: place tooltip below element (page coords)
    const bottomY = rect.bottom + scrollY;

    setTooltip({
      visible: true,
      content,
      x: Math.round(centerX),
      y: Math.round(bottomY),
    });
    hoverRef.current = target;
  };

  const hideTooltip = () => {
    // hide immediately (starts exit animation in TooltipPortal)
    setTooltip((t) => ({ ...t, visible: false }));
    hoverRef.current = null;
  };

  // hide on scroll/resize/touch to prevent sticky tooltip
  useEffect(() => {
    // Use passive options for scroll/touch to avoid blocking the main thread
    const passiveOptions = { passive: true, capture: true };

    const onScroll = () => hideTooltip();
    const onResize = () => hideTooltip();
    const onTouchStart = () => hideTooltip();
    const onTouchMove = () => hideTooltip();

    // Add listeners
    window.addEventListener("scroll", onScroll, passiveOptions);
    window.addEventListener("resize", onResize);
    window.addEventListener("touchstart", onTouchStart, passiveOptions);
    window.addEventListener("touchmove", onTouchMove, passiveOptions);

    return () => {
      // Remove with the same options used above (important!)
      window.removeEventListener("scroll", onScroll, passiveOptions);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("touchstart", onTouchStart, passiveOptions);
      window.removeEventListener("touchmove", onTouchMove, passiveOptions);
    };
  }, []);

  // Touch handling: show on touchstart, hide after short delay when touchend
  const handleTouchStart = (e, name) => {
    // Show tooltip for the touched item
    showTooltip(e, name);
  };
  const handleTouchEnd = () => {
    // keep visible briefly on mobile then hide
    setTimeout(() => hideTooltip(), 900); // slightly shorter for snappier UX
  };

  return (
    <>
      <section className="max-container">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">Bhuvan Kumar</span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Aspiring Software Engineer with a strong foundation in AI and Machine Learning,
            focused on delivering practical, solution-oriented applications through hands-on
            development and continuous learning. Committed to leveraging technical skills to
            drive innovation and create impactful software solutions.
          </p>
        </div>

        {/* Skills */}
        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative w-20 h-20"
                onMouseEnter={(e) => showTooltip(e, skill.name)}
                onMouseLeave={hideTooltip}
                onFocus={(e) => showTooltip(e, skill.name)}
                onBlur={hideTooltip}
                onTouchStart={(e) => handleTouchStart(e, skill.name)}
                onTouchEnd={handleTouchEnd}
                tabIndex={0}
                aria-label={skill.name}
                title={skill.name}
              >
                <div className="block-container w-20 h-20">
                  <div className="btn-back rounded-x1" />
                  <div className="btn-front rounded-x1 flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === NEW: Work Experience === */}
        <div className="py-12">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I’ve gained real-world experience through roles in AI automation and customer support. Here’s a quick overview of my professional journey:
            </p>
          </div>

          <div className="mt-12">
            <VerticalTimeline>
              {workExperiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-x1 font-poppins font-semibold">{experience.title}</h3>
                    <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">{experience.location}</p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`work-experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        {/* === EXISTING: Academic / Timeline === */}
        <div className="py-12">
          <h3 className="subhead-text">Academic Background</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              Pursued a Bachelor’s degree focused on artificial intelligence and machine learning,
              gaining practical experience by collaborating on diverse academic projects. Below is an
              overview of my education:
            </p>
          </div>

          <div className="mt-12">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-x1 font-poppins font-semibold">{experience.title}</h3>
                    <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">{experience.location}</p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-slate-200" />
        <Download />
      </section>

      <Footer />

      {/* Tooltip portal: appears above hovered/focused skill */}
      <TooltipPortal visible={tooltip.visible} content={tooltip.content} x={tooltip.x} y={tooltip.y} />
    </>
  );
};

export default About;
