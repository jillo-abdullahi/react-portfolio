import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stacks from "./Stacks";
import { externalLinks } from "../portfolioData";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import ProfileImage from "../static/images/me.webp";
import { SectionHeading } from "./shared/sectionHeading";
import { AboutMeTimeline } from "./AboutMeTimeline";
import { ProjectCard } from "./shared/projectCard";
import { portfolioProjects } from "../portfolioData";
import WavingHand from "./WavingHand";
import ContactMeForm from "./ContactMeForm";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <main>
      <header id="home">
        <div className="h-[10%] pt-4 w-full max-w-7xl">
          <NavBar />
        </div>
        <div className="h-[90%] flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-8 items-center header-title">
            <div className="rounded-full bg-transparent border-8 border-[#E7A11A78]">
              <div className="profile-img">
                <img src={ProfileImage} alt="profile" />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 content justify-center">
              <div className="flex items-center space-x-1">
                <WavingHand />
                <span className="text-2xl text-gray-200 font-normal">
                  Hello, I am
                </span>
              </div>

              <span className="text-5xl text-orange font-bold">
                Jillo Woche
              </span>
              <hr className="landing-divider" />
              <span className="font-bold pt-2 text-2xl text-gray-200">
                Full Stack Software Engineer
              </span>
              <span className="flex items-center justify-center space-x-1">
                <MapPinIcon className="text-orange h-4 w-4" />{" "}
                <span className="text-sm text-white">Nairobi, Kenya</span>
              </span>
            </div>
          </div>

          <div className="rounded-full bg-[#272F37] border border-gray-900 mt-2">
            <ContactLinks links={externalLinks} showHeader={false} />
          </div>
        </div>
      </header>
      <section id="about" className="bg-[#353D45]">
        <div className="mb-6">
          <SectionHeading heading={"About"} subHeading={"me"} />
        </div>

        <div className="content">
          <div className="flex flex-col space-y-8 items-center w-full">
            <div className="description w-full max-w-4xl">
              <p className="text-lg text-gray-200">
                I am a full-stack software engineer who loves diving
                into both web2 and web3 technologies. With a passion for
                problem-solving, I embark on coding adventures to create elegant
                and efficient solutions.
              </p>
              <p className="text-lg text-gray-200">
                My superpower lies in crafting clean, bug-free code that brings
                ideas to life. I'm always up for a challenge and eager to stay
                on the cutting edge of technology.
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

      <section id="stacks">
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

      <section id="projects" className="bg-[#353D45] pb-12">
        <div className="content">
          <div className="mb-6">
            <SectionHeading heading={"Featured"} subHeading={"projects"} />
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="description w-full max-w-4xl">
              <p className="text-lg text-gray-200 text-center">
                Here are some of my projects. For a full list, please check out
                my{" "}
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
        </div>

        <div className="content">
          {/* projects  */}
          <ul className="space-y-12">
            {portfolioProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="content">
          <div className="mb-6">
            <SectionHeading heading={"Contact"} subHeading={"me"} />
          </div>
          <div className="w-full flex items-center justify-center pb-4">
            <div className="description w-full max-w-4xl">
              <p className="text-lg text-gray-200 text-center">
                I would love to hear from you!{" "}
                <FontAwesomeIcon icon={faSmile} className="text-orange" />
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="contacts-content col s12">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="contacts-content col s12">
              <ContactMeForm />
            </div>
          </div>
        </div>
        <footer>
          <div className="nav-nav-content">
            <div className="nav-content row">
              <div className="col sm3">
                <a className="navigation-link" href="#home">
                  <FontAwesomeIcon icon={faUser} className="text-orange" />
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#stacks">
                  My Tech Stack
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#projects">
                  my portfolio
                </a>
              </div>
              <div className="col sm3">
                <a className="navigation-link" href="#contact">
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
