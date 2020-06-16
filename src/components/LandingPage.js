import React, { useEffect, useState } from "react";
import Stacks from "./Stacks";
import ProjectCard from "./ProjectCard";
import portfolioData from "../portfolioData";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import ProfileImage from "../static/images/me.png";
import YTLogo from "../static/images/logo_solid.png";

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
    var youtubeSection = document.getElementById("youtube-section");
    var contactSection = document.getElementById("contact-section");

    var sticky = header.offsetTop;

    function handleScroll() {
      if (window.pageYOffset > sticky) {
        setStickyHeader(true);
        aboutSection.classList.add("header-room");
        stackSection.classList.add("header-room");
        portfolioSection.classList.add("header-room");
        youtubeSection.classList.add("header-room");
        contactSection.classList.add("header-room");
      } else {
        setStickyHeader(false);
        aboutSection.classList.remove("header-room");
        stackSection.classList.remove("header-room");
        portfolioSection.classList.remove("header-room");
        youtubeSection.classList.remove("header-room");
        contactSection.classList.remove("header-room");
      }
    }
  });
  return (
    <main>
      <header id="home">
        <div className="header-title">
          <div className="profile-img">
            <img src={ProfileImage} alt="profile" />
          </div>
          <h4>my name is</h4>
          <h3>Jillo Woche</h3>
          <hr className="landing-divider" />
          <span>Web Developer &#183; Tech Youtuber</span>
        </div>
        <div className="header-buttons">
          <div className="row">
            <div className="col s12 m6 projects-btn-section">
              <a
                href="#portfolio-section"
                className="landing-btn waves-effect waves-light btn-small"
              >
                view projects
              </a>
            </div>
            <div className="col s12 m6 yt-btn-section">
              <a
                href="#youtube-section"
                className="landing-btn waves-effect waves-light btn-small"
              >
                view yt channel
              </a>
            </div>
          </div>
        </div>
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
                  stacks
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#portfolio-section">
                  portfolio
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#youtube-section">
                  youtube
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#contact-section">
                  contact
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
                Hi there! Jillo Woche is a front-end software developer and Tech
                Youtuber at{" "}
                <a
                  className="p-link"
                  href="https://www.youtube.com/channel/UCml6W5F8GW1X5y33AG0DfUw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gadgetopia.
                </a>{" "}
                He designs, develops, and maintains software tools and
                platforms. He is a tenacious self-taught programmer who uses
                continuous iteration to produce results quickly and continuously
                improve products. As an agile collaborator, he has worked with
                several local and remote engineering teams, and always stays
                attuned to the newest technologies and frameworks.
              </p>
              <p className="paragraph">
                When he is not punching in lines of code, he loves making tech
                Youtube videos for his channel, play console games on his Xbox,
                listen to{" "}
                <a
                  className="p-link"
                  href="https://open.spotify.com/user/jwoche90?si=uqJQ8K26RhKUDz5Qb66r8A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  music,
                </a>{" "}
                or spend quality time with his awesome family. Oh! Did I mention
                he is an avid soccer player?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="stacks-section">
        <div className="heading">
          <span className="secondary-heading">stacks i use</span>
        </div>
        <Stacks />
      </section>
      <section id="portfolio-section">
        <div className="heading">
          <h2 className="secondary-heading">projects portfolio</h2>
        </div>
        <div className="content">
          <div className="projects row">{top}</div>
          <div className="projects row"> {others}</div>
        </div>
      </section>
      <section id="youtube-section">
        <div className="heading">
          <span className="secondary-heading">
            subscribe to my youtube channel
          </span>
        </div>
        <div className="content">
          <div className="row">
            <div className="col s12">
              <div className="yt-description">
                <div className="yt-logo">
                  <a
                    href="https://www.youtube.com/channel/UCml6W5F8GW1X5y33AG0DfUw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={YTLogo} alt="yt-logo" />
                  </a>
                </div>
                <div className="yt-description">
                  <p>
                    Aloha! I upload tech reviews, tech tutorials, and explain
                    tech concepts on my Youtube channel, Gadgetopia. There is
                    the bleeding edge of tech from 8K OLED TVs to self-lacing
                    shoes. Then there is the simple gadgets we use on a daily
                    basis that make our lives so much easier. Welcome aboard and
                    let's explore all these together.
                  </p>
                  <p>
                    Please like my{" "}
                    <a
                      href="https://www.facebook.com/Gadgetopia-100697095003602"
                      className="p-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook page
                    </a>{" "}
                    to receive updates. Join me for quality tech videos by
                    smashing the subscribe button below. Don't forget to hit
                    that bell icon to receive a notification whenever fresh new
                    content drops.
                  </p>
                </div>
                <div className="yt-buttons">
                  <a
                    href="https://www.youtube.com/channel/UCml6W5F8GW1X5y33AG0DfUw/?sub_confirmation=1"
                    className="landing-btn waves-effect waves-light btn-small"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="large material-icons right">plus_one</i>
                    subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-section" className="contact">
        <div className="content">
          <div className="row">
            <div className="contacts-content col s12">
              <ContactForm />
              <ContactLinks links={portfolioData.socialLinks} />
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
                  stacks
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#portfolio-section">
                  portfolio
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#youtube-section">
                  youtube
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#contact-section">
                  contact
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
