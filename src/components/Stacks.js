import React from "react";
import {
  ComputerDesktopIcon,
  ServerStackIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { skills } from "../portfolioData";
import { StackCard } from "./shared/stackCard";

const Stacks = () => {
  return (
    <div className="content">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <StackCard
            icon={<ComputerDesktopIcon className="text-orange w-8 h-8" />}
            title="front-end"
            skills={skills.frontend}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <StackCard
            icon={<ServerStackIcon className="text-orange w-8 h-8" />}
            title="back-end"
            skills={skills.backend}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <StackCard
            icon={<CircleStackIcon className="text-orange w-8 h-8" />}
            title="databases"
            skills={skills.databases}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <StackCard
            icon={<WrenchScrewdriverIcon className="text-orange w-8 h-8" />}
            title="devops"
            skills={skills.devops}
          />
        </div>
      </div>
    </div>
  );
};

export default Stacks;
