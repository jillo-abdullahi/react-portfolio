import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase, faCloud, faDesktop } from '@fortawesome/free-solid-svg-icons';

const Stacks = () => {
    return (
        <div className="content">
        <div className="row">
            <div className="front-end col s12 m6 l3">
                <div className="stack-box">
                    <FontAwesomeIcon icon={faDesktop} className="icon"/>
                    <h3 className="heading-tertiary">front end</h3>
                    <ul>
                        <li>React &bull; Redux</li>
                        <li>JavaScript</li>
                        <li>HTML &bull; CSS</li>
                    </ul>
                </div>
            </div>
            <div className="back-end col s12 m6 l3">
                <div className="stack-box">
                    <FontAwesomeIcon icon={faServer} className="icon"/>
                    <h3 className="heading-tertiary">back end</h3>
                    <ul>
                        <li>Python &bull; Django</li>
                        <li>Python &bull; Flask</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
            <div className="database col s12 m6 l3">
                <div className="stack-box">
                    <FontAwesomeIcon icon={faDatabase} className="icon"/>
                    <h3 className="heading-tertiary">database</h3>
                    <ul>
                        <li>Postgres</li>
                        <li>MongoDB</li>
                        <li>Firestore</li>
                    </ul>
                </div>
            </div>
            <div className="deployment col s12 m6 l3">
                <div className="stack-box">
                    <FontAwesomeIcon icon={faCloud} className="icon"/>
                    <h3 className="heading-tertiary">deployment</h3>
                    <ul>
                        <li>Heroku</li>
                        <li>Firebase</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Stacks;
