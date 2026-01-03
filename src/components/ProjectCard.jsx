
import {useState} from "react";

function ProjectCard () {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }
    function ProjectButton() {
        return (
            <button onClick={toggleOpen}>
                {isOpen ? 'true': 'false' } button
            </button>
        )
    }
    return (
        <div>
            <ProjectButton/>
            {!isOpen && <p>button is open</p>}
        </div>
    );
}

export default ProjectCard;