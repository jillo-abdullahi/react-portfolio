import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const ContactLinks = (props) => {
  const { linkedIn, github, facebook } = props.links;

  return (
    <div className="contact-links">
      <div className="heading">
        <span className="secondary-heading-small">connect with me online</span>
      </div>
      <div className="links">
        <div className="col s12 m4 social-link">
          <a
            className="profile-link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </div>
        <div className="col s12 m4 social-link">
          <a
            className="profile-link"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
        <div className="col s12 m4 social-link">
          <a
            className="profile-link"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
