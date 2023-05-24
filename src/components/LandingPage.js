import React, { useEffect, useState } from "react";
import Stacks from "./Stacks";
import ProjectCard from "./ProjectCard";
import portfolioData from "../portfolioData";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import ProfileImage from "../static/images/me.webp";

const LandingPage = () => {
  const topProjects = portfolioData.topProjects;
  const otherProjects = portfolioData.otherProjects;

  const top = topProjects.map((project) => {
    return <ProjectCard project={project} key={project.id} />;
  });

  const others = otherProjects.map((project) => {
    return <ProjectCard project={project} key={project.id} />;
  });

  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      handleScroll();
    };

    var header = document.getElementById("header-nav");
    var aboutSection = document.getElementById("about-section");
    var stackSection = document.getElementById("stacks-section");
    var portfolioSection = document.getElementById("portfolio-section");
    var contactSection = document.getElementById("contact-section");

    var sticky = header.offsetTop;

    function handleScroll() {
      if (window.pageYOffset > sticky) {
        setStickyHeader(true);
        aboutSection.classList.add("header-room");
        stackSection.classList.add("header-room");
        portfolioSection.classList.add("header-room");
        contactSection.classList.add("header-room");
      } else {
        setStickyHeader(false);
        aboutSection.classList.remove("header-room");
        stackSection.classList.remove("header-room");
        portfolioSection.classList.remove("header-room");
        contactSection.classList.remove("header-room");
      }
    }
  });
  return (
    <main>
      <header id="home">
        <div className="flex flex-col space-y-8 items-center header-title">
          <div className="rounded-full bg-transparent border-8 border-[#E7A11A78]">
            <div className="profile-img">
              <img src={ProfileImage} alt="profile" />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="font-bold text-2xl uppercase">my name is</span>
            <span className="uppercase text-5xl text-[#e7a11a] font-bold">
              Jillo Woche
            </span>
            <hr className="landing-divider" />
            <span className="font-bold pt-2 uppercase text-2xl">
              Full Stack Software Engineer
            </span>
          </div>
        </div>
        <div>
          <ContactLinks links={portfolioData.socialLinks} showHeader={false} />
        </div>
        {/* <div className="header-buttons">
          <div className="row">
            <div className="col s12 projects-btn-section">
              <a
                href="#portfolio-section"
                className="landing-btn waves-effect waves-light btn-small"
              >
                view projects
              </a>
            </div>
          </div>
        </div> */}
        <div
          id="header-nav"
          className={
            stickyHeader ? "sticky-header-navigation" : "header-navigation"
          }
        >
          <div className="nav-nav-content">
            <div className="nav-content row">
              <div className="col sm3">
                <a className="navigation-link" href="#about-section">
                  about
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#stacks-section">
                  Tech Stack
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#portfolio-section">
                  projects
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#contact-section">
                  contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="about-section">
        <div className="heading">
          <span className="secondary-heading">about me</span>
        </div>
        <div className="content">
          <div className="row">
            <div className="description col s12">
              <p className="paragraph">
                Hello and welcome! My name is Jillo Woche and I am a full stack
                software engineer with a passion for creating visually stunning
                and user-friendly web experiences. With over 6 years of
                experience in the industry, I have honed my skills in both
                traditional Web2 technologies such as HTML, CSS, JavaScript, and
                TypeScript, as well as cutting-edge Web3 frameworks like
                Solidity and Ethereum.
              </p>

              <p className="paragraph">
                I am constantly seeking out new challenges and opportunities to
                learn and grow as a developer, and have had the privilege of
                working on a wide range of projects including building
                responsive websites for businesses and developing decentralized
                applications on the blockchain.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="stacks-section">
        <div className="heading">
          <span className="secondary-heading">my tech stack</span>
        </div>
        <Stacks />
      </section>
      <section id="portfolio-section">
        <div className="heading">
          <h2 className="secondary-heading">projects</h2>
        </div>
        <div className="content">
          <div className="projects row">{top}</div>
          <div className="projects row"> {others}</div>
        </div>
      </section>
      <section id="contact-section" className="contact">
        <div className="content">
          <div className="row">
            <div className="contacts-content col s12">
              <ContactForm />
            </div>
          </div>
        </div>
        <footer>
          <div className="nav-nav-content">
            <div className="nav-content row">
              <div className="col sm3">
                <a className="navigation-link" href="#home">
                  home
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#stacks-section">
                  My Tech Stack
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#portfolio-section">
                  my portfolio
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#contact-section">
                  contact me
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default LandingPage;
