import {
  UserCircleIcon,
  EnvelopeIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { SlideMeIn } from "./slideMeIn";

export const SectionHeading = ({ heading, subHeading, id }) => {
  return (
    <SlideMeIn>
      <div className="flex items-center justify-center space-x-1">
        {id === "about" ? (
          <UserCircleIcon className="w-6 h-6 text-orange" />
        ) : id === "contact" ? (
          <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-orange" />
        ) : id === "stack" ? (
          <Square3Stack3DIcon className="w-6 h-6 text-orange" />
        ) : id === "projects" ? (
          <RocketLaunchIcon className="w-6 h-6 text-orange" />
        ) : null}
        <h2 className="font-bold text-2xl text-gray-200">
          {heading} {subHeading}
        </h2>
      </div>
    </SlideMeIn>
  );
};
