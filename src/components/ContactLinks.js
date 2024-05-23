import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faStackOverflow,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { externalLinks } from "../portfolioData";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ContactLinks = ({ isInFooter }) => {
  const { linkedIn, github, twitter, facebook, stackoverflow, instagram } =
    externalLinks;

  const socialLinks = [
    { icon: faGithub, href: github },
    { icon: faLinkedin, href: linkedIn },
    { icon: faXTwitter, href: twitter },
  ];

  const footerSocialLinks = [
    {
      icon: faStackOverflow,
      href: stackoverflow,
      name: "Stackoverflow",
    },
    {
      icon: faFacebook,
      href: facebook,
      name: "Facebook",
    },
    {
      icon: faInstagram,
      href: instagram,
      name: "Instagram",
    },
    {
      icon: faLinkedin,
      href: linkedIn,
      name: "LinkedIn",
    },
  ];

  // footer link box
  const FooterLinkBox = ({ icon, href, name }) => {
    return (
      <a
        className="w-full sm:w-64 rounded-lg border border-gray-800 bg-[#272F3790] hover:bg-[#272F37] flex items-center justify-between group cursor-pointer p-2 transition duration-300"
        href={href}
        target="_blank"
      >
        <div className="flex items-center justify-start space-x-2">
          <div className="rounded-md bg-gray-700/50 border-gray-700 border p-2 w-10 h-10 flex items-center justify-center">
            <FontAwesomeIcon
              icon={icon}
              style={{ fontSize: "24px" }}
              className="text-gray-200 transition"
            />
          </div>
          <div className="text-left">
            <div className="text-gray-100">{name}</div>
          </div>
        </div>
        <ArrowRightIcon className="group-hover:-rotate-45 group-hover:text-white origin-center w-5 text-gray-200 transition duration-300" />
      </a>
    );
  };

  // show different styles when rendered in the footer section
  const footerLinks = (
    <div className="flex flex-col space-y-2 w-full">
      {footerSocialLinks.map(({ icon, href, name }, index) => {
        return (
          <FooterLinkBox icon={icon} href={href} key={index} name={name} />
        );
      })}
    </div>
  );

  const headerLinks = (
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

  return isInFooter ? footerLinks : headerLinks;
};

export default ContactLinks;
