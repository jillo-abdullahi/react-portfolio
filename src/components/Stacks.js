import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faDatabase,
  faCloud,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

const Stacks = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="front-end col s12 m6 l3">
          <div className="stack-box">
            <FontAwesomeIcon icon={faDesktop} className="icon" />
            <span className="heading-tertiary">front-end</span>
            <ul>
              <li>React &bull; Redux</li>
              <li>Angular</li>
              <li>HTML5 &bull; CSS3</li>
            </ul>
          </div>
        </div>
        <div className="back-end col s12 m6 l3">
          <div className="stack-box">
            <FontAwesomeIcon icon={faServer} className="icon" />
            <span className="heading-tertiary">back-end</span>
            <ul>
              <li>Python &bull; Django</li>
              <li>Flask</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
        <div className="database col s12 m6 l3">
          <div className="stack-box">
            <FontAwesomeIcon icon={faDatabase} className="icon" />
            <span className="heading-tertiary">database</span>
            <ul>
              <li>Postgres</li>
              <li>MySQL</li>
              <li>Firestore</li>
            </ul>
          </div>
        </div>
        <div className="deployment col s12 m6 l3">
          <div className="stack-box">
            <FontAwesomeIcon icon={faCloud} className="icon" />
            <span className="heading-tertiary">deployment</span>
            <ul>
              <li>Heroku</li>
              <li>Firebase</li>
              <li>Github Pages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
