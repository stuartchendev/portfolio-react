function ProjectCard ({ project, onSelect}) {
    const HandleSetActiveProjectId = () => {
        onSelect(project.id);
    }

    return (
        <div className="card" onClick={HandleSetActiveProjectId} style={{ border: "1px solid lightgray", margin:"0.5rem" }}>
            <ProjectHead projectId={project.id} projectTitle={project.title}/>
            <ProjectShortDescription projectDescription={project.shortDescription}/>
            <ul>
                {project.tags.map((tag, index) =>
                    <ProjectTags key={index} tag={tag}/>
                )}
            </ul>
        </div>
    );
}


function ProjectHead ({projectId, projectTitle}) {
    return(
        <>
            <label>{'Id: ' + projectId}</label>
            <br/>
            <label>{'Title: '+ projectTitle}</label>
        </>
    )
}

function ProjectShortDescription({projectDescription}) {
    return(
        <p>{projectDescription}</p>
    )
}

function ProjectTags ({tag}) {
    return(
        <li>{tag}</li>
    )
}

export default ProjectCard;