import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const ContactLinks = (props) => {
  const { linkedIn, github, facebook, instagram, twitter } = props.links;

  return (
    <div className="contact-links">
      <div className="heading">
        <span className="secondary-heading-small">connect with me online</span>
      </div>
      <div className="links">
        <div className="social-link">
          <a
            className="profile-link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{"fontSize":"30px"}}/>
          </a>
        </div>
        <div className="social-link">
          <a
            className="profile-link"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{"fontSize":"30px"}}/>
          </a>
        </div>
        <div className="social-link">
          <a
            className="profile-link"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} style={{"fontSize":"30px"}}/>
          </a>
        </div>
        <div className="social-link">
          <a
            className="profile-link"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{"fontSize":"30px"}}/>
          </a>
        </div>
        <div className="social-link">
          <a
            className="profile-link"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} style={{"fontSize":"30px"}} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
