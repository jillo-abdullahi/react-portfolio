import React from "react";
import {
  MapPinIcon,
  AcademicCapIcon,
  FaceSmileIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
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
                <span className="text-2xl text-gray-200 font-medium">
                  Hello, I am
                </span>
              </div>

              <span className="text-5xl text-orange font-semibold">
                Jillo Woche
              </span>
              <hr className="bg-orange border border-orange w-64" />
              <span className="font-semibold pt-2 text-2xl text-gray-200">
                Full Stack Software Engineer
              </span>
              <span className="flex items-center justify-center space-x-1">
                <MapPinIcon className="text-orange h-4 w-4" />{" "}
                <span className="text-sm text-white">Nairobi, Kenya</span>
              </span>
            </div>
          </div>

          <div className="rounded-full bg-[#272F37] border border-gray-900 mt-2">
            <ContactLinks />
          </div>
        </div>
      </header>
      <section id="about" className="bg-[#353D45]">
        <div className="mb-6 mt-20">
          <SectionHeading heading={"About"} subHeading={"me"} id="about" />
        </div>

        <div className="content">
          <div className="flex flex-col space-y-10 items-center w-full">
            <div className="description w-full max-w-4xl">
              <p className="text-base text-gray-200">
                Innovative Full Stack Software Engineer with a keen eye for
                detail and a commitment to continuous learning. Armed with a
                solid foundation in both front-end and back-end development, I
                thrive on tackling complex challenges and delivering elegant
                solutions within the web2 and web3 space.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <AcademicCapIcon className="w-6 h-6 text-orange" />
                <h3 className="text-orange text-xl font-semibold">
                  Education and work experience
                </h3>
              </div>

              <AboutMeTimeline />
            </div>
          </div>
        </div>
      </section>

      <section id="stacks" className="pb-12">
        <div className="mb-6 mt-20">
          <SectionHeading heading={"My"} subHeading={"tech stack"} id="stack" />
        </div>
        <div className="description w-full max-w-4xl">
          <p className="text-base text-gray-200 text-center">
            I work hard to improve my skills regularly.
          </p>
        </div>
        <Stacks />
      </section>

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
            <div className="description w-full max-w-4xl">
              <p className="text-base text-gray-200 text-center">
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

      <section id="contact" className="contact pb-10">
        <div className="pt-20">
          <div className="mb-2">
            <SectionHeading
              heading={"Contact"}
              subHeading={"me"}
              id="contact"
            />
          </div>
          <div className="w-full flex flex-col space-y-4 items-center justify-center pb-4">
            <div className="description w-full max-w-4xl">
              <p className="text-base text-gray-200 text-center flex items-center justify-center space-x-2">
                <span>I would love to hear from you!</span>
                <FaceSmileIcon className="text-orange w-5 h-5 inline" />
              </p>
            </div>
            {/* button to send email and schedule call */}
            <div className="flex items-center justify-start space-x-3">
              <a
                type="button"
                className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-3 py-3 text-sm font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
                href="mailto:jayloabdullahi@gmail.com"
                target="_blank"
              >
                <EnvelopeIcon className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200" aria-hidden="true" />
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
          </div>
        </div>
        <div className="content flex flex-col">
          {/* divider  */}
          <div className="relative flex py-5 items-center w-full max-w-2xl self-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400 uppercase">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <ContactMeForm />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
