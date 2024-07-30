import { SlideMeIn } from "./shared/slideMeIn";
import { experiences } from "../portfolioData";

export const AboutMeTimeline = () => {
  return (
    <div className="flex flex-col space-y-6">
      {experiences.map(
        (
          {
            title,
            company,
            companyUrl,
            companyLogo,
            date,
            location,
            description,
            isCurrent,
          },
          index
        ) => (
          <SlideMeIn cascade={true} key={index}>
            <div
              className={`border bg-[#272f3790] text-white rounded-xl py-5 px-6 shadowy ${
                isCurrent ? "border-orange" : "border-gray-900"
              }`}
            >
              <div className="timeLineContent text-left space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-orange/90">
                    {title}
                  </h3>
                  <h4 className="font-medium text-sm sm:text-base text-orange/80 flex items-center justify-start">
                    <a
                      href={companyUrl}
                      target="_blank"
                      className="hover:underline flex items-center justify-start space-x-2"
                    >
                      {companyLogo ? (
                        <img
                          src={companyLogo}
                          className="w-6 h-6 rounded-md"
                          alt="logo"
                        />
                      ) : null}
                      <span>{company}</span>
                    </a>
                    <span className="hidden sm:block">&nbsp;- {location}</span>
                  </h4>
                </div>
                <ul>
                  {description.map((desc, index) => (
                    <li className="text-gray-200" key={index}>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="text-orange/90 text-sm">{date}</div>
              </div>
            </div>
          </SlideMeIn>
        )
      )}
    </div>
  );
};
