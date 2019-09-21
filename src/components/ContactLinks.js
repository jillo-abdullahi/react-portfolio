import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const ContactLinks = (props) => {
    const { linkedIn, github, resume } = props.links;

    return (
        <div className="contact-links">
            <div className="portfolio-image">
                <img src="images/me.jpg" alt="my head shot"/>
            </div>
            <div className="links">
                <div className="row">
                    <div className="col s4">
                        <a className="profile-link" href={ github } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub }/>  Github</a>
                    </div>
                    <div className="col s4">
                        <a className="profile-link" href={ linkedIn } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin }/>  LinkedIn</a>
                    </div>
                    <div className="col s4">
                        <a className="profile-link" href={ resume } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faFile }/>  Resumé</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactLinks;
