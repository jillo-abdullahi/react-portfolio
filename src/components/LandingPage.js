import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import Stacks from './Stacks';
import ProjectCard from './ProjectCard';
import portfolioData from '../portfolioData';
import ContactForm from './ContactForm';
import ContactLinks from './ContactLinks';

const LandingPage = () => {
    const topProjects = portfolioData.topProjects;
    const otherProjects = portfolioData.otherProjects;

    const top = topProjects.map(project => {
        return (<ProjectCard project={project} key={project.id} />)
    });

    const others = otherProjects.map(project => {
        return (<ProjectCard project={project} key={project.id} />)
    });
    return (
        <main>
            <header>
                <div className="header-title">
                    <h2>Jillo Woche</h2>
                    <p>Full Stack Software Engineer</p>
                </div>
                <div className="header-button">
                    <a className="btn-project" href="#portfolio-section">see projects</a>
                </div>
                <div className="logo">
                    <img className="logo-image" src="images/logo.png" alt="logo"/>
                </div>
            </header>
            <section id="about-section">
                <div className="heading">
                    <h2 className="secondary-heading">Front end focused <br></br>with full stack experience</h2>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="description col s12 l6">
                            <h3 className="heading-tertiary">motivated to produce results</h3>
                            <p className="paragraph">As a tenacious self-taught programmer, I use continuous iteration to produce results quickly and continuously improve products.</p>
                            <h3 className="heading-tertiary">an agile collaborator</h3>
                            <p className="paragraph">I have contributed to open source projects, worked on engineering teams, and always stay attuned to the newest frameworks.</p>
                        </div>
                        <div className="images col s12 l6">
                            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src="images/python.png" alt="python"/></a>
                            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer"><img src="images/javascript.png" alt="javasript"/></a>
                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="images/react.png" alt="react"/></a>
                            <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer"><img src="images/django.png" alt="django"/></a>
                        </div>
                    </div>

                </div>
            </section>
            <section id="stacks-section">
                <Stacks />
            </section>
            <section id="portfolio-section">
                <div className="heading">
                    <h2 className="secondary-heading">projects portfolio</h2>
                </div>
                <div className="content">
                    <div className="projects row">{ top }</div>
                    <div className="projects row"> { others }</div>
                </div>
            </section>
            <section className="contact">
                <div className="heading">
                    <p className="contact-heading">
                        Please feel free to contact me for any work or suggestions below <FontAwesomeIcon icon={faSmile} /></p>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col s12 m6"><ContactLinks links={ portfolioData.socialLinks }/></div>
                        <div className="col s12 m6"><ContactForm /></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LandingPage;
