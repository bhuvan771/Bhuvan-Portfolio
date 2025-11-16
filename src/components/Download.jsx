import React from "react";
import { FaDownload } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="cta text-center">
      <p className="cta-text">
        Want to know more about me?
        <br className="sm:block hidden" />
        Download my resume!
      </p>

      <a
        href="/BhuvanKumar_Resume.pdf"
        download
        className="btn w-full sm:w-auto flex justify-center items-center gap-2 mx-auto"
      >
        <FaDownload />
        Download Resume
      </a>
    </section>
  );
};

export default CTA;
