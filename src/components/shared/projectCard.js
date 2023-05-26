import { ProjectStatusBadge } from "../shared/projectStatusBadge";

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
            <div className="flex items-center justify-end">
              <ProjectStatusBadge isProjectComplete={completed} />
            </div>
          )}

          <div className="title flex">
            <h3 className="mb-5 text-gray-200 hover:text-orange featured-size font-semibold externals w-fit">
              <a href={preview} target="_blank">
                {title}
              </a>
            </h3>
          </div>

          <div className="text-gray-200 p-[25px] border border-gray-800 rounded-xl bg-[#272F3790]">
            <p>{description}</p>
          </div>

          <ul className="flex flex-wrap mt-[25px] mb-[10px] text-orange/90">
            {stacks.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="flex items-center mt-[10px] text-slate-600 dark:text-slate-lightest externals">
            {github && (
              <a
                class="capitalize pr-4 underline text-gray-200 hover:text-orange/90"
                href={github}
                target="_blank"
              >
                View code
              </a>
            )}
            {preview && (
              <a
                class="waves-effect waves-light btn bg-orange/90 hover:bg-orange font-bold capitalize text-blue focus:bg-orange"
                href={preview}
                target="_blank"
              >
                <i class="material-icons left">open_in_new</i>Preview
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-image opacity-5 md:opacity-100">
        <a href={preview} target="_blank">
          <img
            src={image}
            alt=""
            className="w-full object-cover rounded-xl border border-gray-700 hover:border-[#e7a11a60]"
          />
        </a>
      </div>
    </li>
  );
};
