import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactLinks = ({ links, showHeader }) => {
  const { linkedIn, github, twitter } = links;

  return (
    <div className="contact-links">
      {showHeader && (
        <div className="heading">
          <span className="secondary-heading-small">
            connect with me online
          </span>
        </div>
      )}
      <div className="links">
        <div className="social-link">
          <a
            className="profile-link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "30px" }} />
          </a>
        </div>
        <div className="social-link">
          <a
            className="profile-link"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "30px" }} />
          </a>
        </div>
        <div className="social-link">
          <a
            className="profile-link"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
