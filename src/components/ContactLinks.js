import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactLinks = ({ links }) => {
  const { linkedIn, github, twitter } = links;

  const socialLinks = [
    { icon: faGithub, href: github },
    { icon: faLinkedin, href: linkedIn },
    { icon: faXTwitter, href: twitter },
  ];

  return (
    <div className="flex items-center justify-center space-x-3 px-3 py-2">
      {socialLinks.map(({ icon, href }, index) => (
        <a
          className="text-white hover:text-orange transition-all duration-150"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <FontAwesomeIcon icon={icon} style={{ fontSize: "26px" }} />
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
