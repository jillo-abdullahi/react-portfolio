import { ProjectStatusBadge } from "../shared/projectStatusBadge";
import ButtonGroup from "../shared/buttonGroup";

export const ProjectCard = ({ project }) => {
  const { title, description, image, preview, github, stacks, completed } =
    project;
  return (
    <li
      key={title}
      className="grid grid-col-featured gap-[10px] items-center idea"
    >
      <div className="project-content z-30">
        <div>
          {!completed && (
            <div className="flex items-center justify-end mb-2">
              <ProjectStatusBadge />
            </div>
          )}

          <div className="title flex">
            <h3 className="mb-5 text-orange text-xl font-semibold externals w-fit">
              <a href={preview} target="_blank ">
                {title}
              </a>
            </h3>
          </div>

          <div className="text-gray-200 p-[25px] border border-gray-900 rounded-xl bg-[#272F3790] shadowy">
            <p>{description}</p>
          </div>

          <ul className="flex flex-wrap mt-[25px] mb-[10px] text-orange/90">
            {stacks.map((tech, index) => (
              <li className="text-sm font-medium" key={index}>{tech}</li>
            ))}
          </ul>

          <div className="flex items-center mt-[10px] text-slate-600 dark:text-slate-lightest externals">
            <ButtonGroup previewLink={preview} sourceCodeLink={github} />
          </div>
        </div>
      </div>
      <div className="project-image opacity-5 md:opacity-100">
        <a href={preview} target="_blank">
          <img
            src={image}
            alt=""
            className="w-full object-cover rounded-xl"
          />
        </a>
      </div>
    </li>
  );
};
