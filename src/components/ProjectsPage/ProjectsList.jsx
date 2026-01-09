import ProjectCard from "./ProjectCard";

function ProjectsList({projects, onSelect}) {

    return (
        <li>
            {projects.map((project) =>
                <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={onSelect}
                />
            )}
        </li>
    )
}


export default ProjectsList;