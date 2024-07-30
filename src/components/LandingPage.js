import React from "react";
import {
  AcademicCapIcon,
  FaceSmileIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { SlideMeIn } from "./shared/slideMeIn";
import Stacks from "./Stacks";
import { externalLinks } from "../portfolioData";
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
        <div className="h-[10%] w-full max-w-7xl">
          <NavBar />
        </div>
        <div className="h-[90%] flex flex-col items-center justify-center relative w-full max-w-7xl">
          <div className="flex flex-col space-y-8 items-center header-title">
            <div className="rounded-full bg-transparent border-8 border-[#E7A11A78]">
              <div className="profile-img">
                <img src={ProfileImage} alt="profile" />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 content justify-center">
              <div className="flex items-center space-x-1">
                <WavingHand />
                <span className="text-2xl text-gray-300 font-medium">
                  Hello, I am
                </span>
              </div>

              <span className="text-4xl text-orange font-semibold">
                Jillo Woche
              </span>
              <hr className="bg-orange border border-orange w-56" />
              <span className="font-medium pt-2 text-xl text-gray-300">
                Full Stack Software Engineer
              </span>
              <div className="flex items-center justify-center space-x-1">
                <MapPinIcon className="text-orange h-4 w-4" />{" "}
                <span className="text-sm text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div className="rounded-full bg-[#353D45] border border-gray-800 mt-3 fadeIn">
            <ContactLinks />
          </div>
        </div>
      </header>

      {/* About me section  */}
      <section id="about" className="bg-[#353D45]">
        <div className="mb-6 mt-20">
          <SectionHeading heading={"About"} subHeading={"me"} id="about" />
        </div>

        <div className="content">
          <div className="flex flex-col space-y-10 items-center w-full">
            <SlideMeIn direction="up" triggerOnce>
              <div className="description w-full max-w-4xl">
                <p className="text-base text-gray-200">
                  Innovative Full Stack Software Engineer with a keen eye for
                  detail and a commitment to continuous learning. Armed with a
                  solid foundation in both front-end and back-end development, I
                  thrive on tackling complex challenges and delivering elegant
                  solutions within the web2 and web3 space.
                </p>
              </div>
            </SlideMeIn>

            <div className="flex flex-col space-y-2 pb-12">
              <SlideMeIn direction="up" triggerOnce>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <AcademicCapIcon className="w-6 h-6 text-orange" />
                  <h3 className="text-orange text-lg font-normal">
                    Education and work experience
                  </h3>
                </div>
              </SlideMeIn>

              <AboutMeTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Stacks section  */}
      <section id="stacks" className="pb-12">
        <div className="mb-6 mt-20">
          <SectionHeading heading={"My"} subHeading={"tools of trade"} id="stack" />
        </div>
        <SlideMeIn>
          <div className="description w-full max-w-4xl pb-2">
            <p className="text-base text-gray-200 text-center">
              I work hard to improve my skills regularly.
            </p>
          </div>
        </SlideMeIn>
        <Stacks />
      </section>

      {/* projects section  */}
      <section id="projects" className="bg-[#353D45] pb-12">
        <div className="pt-20">
          <div className="mb-6">
            <SectionHeading
              heading={"Featured"}
              subHeading={"projects"}
              id="projects"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <SlideMeIn>
              <div className="description w-full max-w-4xl">
                <p className="text-base text-gray-200 text-center px-5">
                  Here are some of my projects. For a full list, please check
                  out my{" "}
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
            </SlideMeIn>
          </div>
        </div>

        <div className="content">
          <ul className="space-y-12">
            {portfolioProjects.map((project, index) => (
              <SlideMeIn cascade={true} key={index}>
                <ProjectCard project={project} />
              </SlideMeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* contact section  */}
      <section id="contact" className="contact pb-10 withBubblesBackground">
        <div className="pt-20">
          <div className="mb-2">
            <SectionHeading
              heading={"Contact"}
              subHeading={"me"}
              id="contact"
            />
          </div>
          <div className="w-full flex flex-col space-y-4 items-center justify-center pb-4">
            <SlideMeIn>
              <div className="description w-full max-w-4xl">
                <p className="text-base text-gray-200 text-center flex items-center justify-center space-x-2">
                  <span>I would love to hear from you!</span>
                  <FaceSmileIcon className="text-orange w-5 h-5 inline" />
                </p>
              </div>
            </SlideMeIn>
            {/* button to send email and schedule call */}
            <SlideMeIn>
              <div className="flex items-center justify-start space-x-3">
                <a
                  type="button"
                  className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-3 py-3 text-sm font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
                  href="mailto:jayloabdullahi@gmail.com"
                  target="_blank"
                >
                  <EnvelopeIcon
                    className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
                    aria-hidden="true"
                  />
                  <span>email me</span>
                </a>
                <a
                  type="button"
                  className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-3 py-3 text-sm font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
                  href={externalLinks.calLink}
                  target="_blank"
                >
                  <CalendarDaysIcon
                    className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
                    aria-hidden="true"
                  />
                  <span>schedule call</span>
                </a>
              </div>
            </SlideMeIn>
          </div>
        </div>

        <div className="content flex flex-col">
          {/* divider  */}
          <SlideMeIn
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="relative flex py-5 items-center w-full max-w-2xl self-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400 uppercase">
                or
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
          </SlideMeIn>
          <SlideMeIn>
            <ContactMeForm />
          </SlideMeIn>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
