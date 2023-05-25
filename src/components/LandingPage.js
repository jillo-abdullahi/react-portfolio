import React, { useEffect, useState } from "react";
import Stacks from "./Stacks";
import ProjectCard from "./ProjectCard";
import portfolioData, { externalLinks } from "../portfolioData";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import ProfileImage from "../static/images/me.webp";
import { SectionHeading } from "./shared/sectionHeading";
import { AboutMeTimeline } from "./AboutMeTimeline";

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
            <span className="font-bold text-2xl uppercase text-gray-200">
              Hello, I am
            </span>
            <span className="uppercase text-5xl text-[#e7a11a] font-bold">
              Jillo Woche.
            </span>
            <hr className="landing-divider" />
            <span className="font-bold pt-2 uppercase text-2xl text-gray-200">
              Full Stack Software Engineer
            </span>
          </div>
        </div>
        <div>
          <ContactLinks links={portfolioData.socialLinks} showHeader={false} />
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
                <a
                  className="navigation-link text-gray-200"
                  href="#about-section"
                >
                  about me
                </a>
              </div>
              <div className="col sm3">
                <a
                  className="navigation-link text-gray-200"
                  href="#stacks-section"
                >
                  Tech Stack
                </a>
              </div>
              <div className="col sm3">
                <a
                  className="navigation-link text-gray-200"
                  href="#portfolio-section"
                >
                  projects
                </a>
              </div>
              <div className="col sm3">
                <a
                  className="navigation-link text-gray-200"
                  href="#contact-section"
                >
                  contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="about-section" className="bg-[#353D45]">
        <div className="mb-6">
          <SectionHeading heading={"About"} subHeading={"me"} />
        </div>

        <div className="content">
          <div className="flex flex-col space-y-8 items-center w-full">
            <div className="description w-full max-w-4xl">
              <p className="text-lg text-gray-200">
                Hello there! I'm a full-stack software engineer who loves diving
                into both web2 and web3 technologies. With a passion for
                problem-solving, I embark on coding adventures to create elegant
                and efficient solutions.
              </p>
              <p className="text-lg text-gray-200">
                My superpower lies in crafting clean, bug-free code that brings
                ideas to life. I'm always up for a challenge and eager to stay
                on the cutting edge of technology.
              </p>
              <p className="text-lg text-gray-200">
                Let's collaborate and bring digital dreams to reality!
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col items-center space-y-2">
                <h3 className="text-orange text-2xl font-semibold">
                  Education and work experience
                </h3>
                <hr className="landing-divider" />
              </div>

              <AboutMeTimeline />
            </div>
          </div>
        </div>
      </section>

      <section id="stacks-section">
        <div className="mb-6">
          <SectionHeading heading={"My"} subHeading={"tech stack"} />
        </div>
        <div className="description w-full max-w-4xl">
          <p className="text-lg text-gray-200 text-center">
            I work hard to improve my skills regularly.
          </p>
        </div>
        <Stacks />
      </section>

      <section id="portfolio-section" className="bg-[#353D45]">
        <div className="mb-6">
          <SectionHeading heading={"Featured"} subHeading={"projects"} />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="description w-full max-w-4xl">
            <p className="text-lg text-gray-200 text-center">
              Here are some of my projects. For a full list, please check out my{" "}
              <a
                href={externalLinks.repositories}
                className="text-orange hover:underline"
                target="_blank"
              >
                Github
              </a>{" "}
              profile.
            </p>
          </div>
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
