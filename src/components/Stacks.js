import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faDatabase,
  faCloud,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { skills } from "../portfolioData";
import { StackCard } from "./shared/stackCard";

const Stacks = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="front-end col s12 m6 l3">
          <StackCard
            icon={<FontAwesomeIcon icon={faDesktop} className="icon" />}
            title="front-end"
            skills={skills.frontend}
          />
        </div>
        <div className="back-end col s12 m6 l3">
          <StackCard
            icon={<FontAwesomeIcon icon={faServer} className="icon" />}
            title="back-end"
            skills={skills.backend}
          />
        </div>
        <div className="database col s12 m6 l3">
          <StackCard
            icon={<FontAwesomeIcon icon={faDatabase} className="icon" />}
            title="databases"
            skills={skills.databases}
          />
        </div>
        <div className="deployment col s12 m6 l3">
          <StackCard
            icon={<FontAwesomeIcon icon={faCloud} className="icon" />}
            title="devops"
            skills={skills.devops}
          />
        </div>
      </div>
    </div>
  );
};

export default Stacks;
