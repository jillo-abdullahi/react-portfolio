import React from 'react';


const ProjectCard = (props) => {
    const {
        id,
        name,
        icon,
        description,
        stacks,
        source
     } = props.project;

    const stackContent = stacks.map(stack => {
            return (<li key={stacks.indexOf(stack) + 10}>{ stack }</li>)
     });
    return (
        <div className="col s12 l4">
        <div className="flip" key={id}>
                <div className="front" >
                    <div className="project-image"></div>
                    <img className="project-icon" src={ icon } alt="thunder"/>
                    <h4 className="project-heading">{ name }</h4>
                    <div className="project-details">
                        <ul>{ stackContent }</ul>
                    </div>
                </div>
                <div className="back">
                    <div className="back-box">
                        <div className="project-desc">
                            <span>{ description }</span>
                        </div>
                        <div className="header-button">
                            { props.project.url ? (<a className="btn-project btn-portfolio" href={ props.project.url } target="_blank" rel="noopener noreferrer">demo</a>) : null}
                            <a className="btn-project btn-portfolio" href={ source } target="_blank" rel="noopener noreferrer" >source</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
