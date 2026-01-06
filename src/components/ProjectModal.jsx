import {useState, useEffect} from 'react'

function ProjectModal() {
    const [isOpen, setIsOpen] = useState(() => {
        const storedIsOpenValue = localStorage.getItem('modalIsOpen');
        return storedIsOpenValue === 'true';
    });

    useEffect(() => {
        localStorage.setItem('modalIsOpen', String(isOpen));
    }, [isOpen]);

    return (
        <>
            <ModalButton onToggle={() => setIsOpen(pre => !pre)} />
            {isOpen && (
                <>
                    <div className="modal content">
                        <div className="modal">
                            <ModalClose onClose={() => setIsOpen(false)} />
                            <ModalContent />
                        </div>
                        <div className="overlay content"/>
                    </div>
                </>
            )}
        </>
    )
}

function ModalButton({onToggle}) {
    return (
        <button onClick={onToggle}> Modal </button>
    )
}

function ModalClose({onClose}) {
    return(
        <button onClick={onClose}> Close </button>
    )
}


function ModalContent() {
    return (
        <>
            <ModalInnerTitle modalTitle={"I'm a Modal window"}/>
            <ModalInnerContent modalContent={"This is the inner Content"}/>
        </>
    )
}

function ModalInnerTitle({ modalTitle }) {
    return (
        <h1 className="modal__title">{modalTitle}</h1>
    )
}
function ModalInnerContent({ modalContent }) {
    return (
        <p>{modalContent}</p>
    )
}

export default ProjectModal;