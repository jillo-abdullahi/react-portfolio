import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "../static/images/icon-work.svg";
import { ReactComponent as SchoolIcon } from "../static/images/icon-school.svg";
import { ReactComponent as StarIcon } from "../static/images/icon-star.svg";
import { experiences } from "../portfolioData";

export const AboutMeTimeline = () => {
  return (
    <VerticalTimeline
      layout="1-column-left"
      animate={false}
      lineColor="rgb(229 231 235)"
    >
      {experiences.map(
        (
          { type, title, company, companyUrl, date, location, description },
          index
        ) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#272F3790",
              color: "#fff",
              borderRadius: "10px",
              padding: "20px 30px",
              boxShadow: "none",
              border: `1px solid ${type === "work" ? "#272F37" : "#e7a11a"}`,
            }}
            contentArrowStyle={{
              borderRight: `7px solid  ${
                type === "work" ? "#272F3790" : "#e7a11a90"
              }`,
            }}
            iconStyle={{ background: "#e7a11a", color: "#fff" }}
            date={date}
            dateClassName="text-orange/100 dateStyle"
            icon={type === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div className="timeLineContent text-left space-y-3">
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-orange/90">{title}</h3>
                <h4 className="font-normal text-orange/80">
                  <a
                    href={companyUrl}
                    target="_blank"
                    className="hover:underline"
                  >
                    {company}
                  </a>{" "}
                  - {location}
                </h4>
              </div>
              <ul>
                {description.map((desc, index) => (
                  <li className="text-gray-200" key={index}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        )
      )}

      <VerticalTimelineElement
        iconStyle={{ background: "#272F37", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};
