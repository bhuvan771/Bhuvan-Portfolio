import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-4">
        <p className="text-center sm:text-left">
          © 2025 <strong>Bhuvan Kumar</strong>. All rights reserved.
        </p>

        <div className="flex gap-4 justify-center sm:justify-end items-center w-full sm:w-auto">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target={link.link.startsWith("mailto:") ? "_self" : "_blank"}
              rel={link.link.startsWith("mailto:") ? "" : "noopener noreferrer"}
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
