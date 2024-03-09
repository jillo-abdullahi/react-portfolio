// Old project card component


// import React from "react";

// const ProjectCard = (props) => {
//   const { id, name, description, stacks, source } = props.project;

//   const stackContent = stacks.map((stack) => {
//     return <li key={stacks.indexOf(stack) + 10}>{stack}</li>;
//   });
//   return (
//     <div className="col s12 m12 l4">
//       <div className="flip" key={id}>
//         <div className="front">
//           <div className="project-image"></div>
//           <h4 className="project-heading">{name}</h4>
//           <div className="project-desc-mobile">
//             <span>{description}</span>
//           </div>
//           <div className="mobile-built-with">
//             <span>built with:</span>
//           </div>
//           <div className="project-details">
//             <ul>{stackContent}</ul>
//           </div>

//           <div className="portfolio-buttons-mobile">
//             {props.project.url ? (
//               <a
//                 className="landing-btn waves-effect waves-light btn-small"
//                 href={props.project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 view demo
//               </a>
//             ) : null}
//             <a
//               className="landing-btn waves-effect waves-light btn-small"
//               href={source}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               source code
//             </a>
//           </div>
//         </div>
//         <div className="back">
//           <div className="back-box">
//             <div className="project-desc">
//               <span>{description}</span>
//             </div>
//             <div className="portfolio-buttons">
//               {props.project.url ? (
//                 <a
//                   className="landing-btn waves-effect waves-light btn-small"
//                   href={props.project.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   view demo
//                 </a>
//               ) : null}
//               <a
//                 className="landing-btn waves-effect waves-light btn-small"
//                 href={source}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 source code
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
