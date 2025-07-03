import React from "react";
import { FaDownload } from "react-icons/fa"; // ✅ Import the download icon

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Want to know more about me?
        <br className="sm:block hidden" />
        Download my resume!
      </p>

      {/* ✅ Download Resume Button with Icon */}
      <a
        href="/Bhuvankumarr.pdf" // 📂 Place your resume in /public/resume.pdf
        download
        className="btn flex items-center gap-2"
      >
        <FaDownload />
        Download Resume
      </a>
    </section>
  );
};

export default CTA;
