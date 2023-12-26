import { Button, Modal } from "keep-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line react/prop-types
export default function ModalComponent ({ showModal, toggleModal, onSubmit, children }) {
    return (
        <Modal
            icon={<FontAwesomeIcon icon="fa-solid fa-fire" />}
            size="md"
            show={showModal}
            onClose={toggleModal}
        >
            <form onSubmit={onSubmit}>
                <Modal.Header>Nuevo pokémon</Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer className="justify-end">
                    <Button type="outlineGray" onClick={toggleModal}>
                        Cancelar
                    </Button>
                    <button type="submit" className="group rounded-md flex h-min w-fit items-center justify-center text-center font-medium active:focus:scale-95 duration-150 text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-4 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100">
                        <span className="text-body-4 px-5 py-3 flex items-center justify-center cursor-pointer transition-all duration-75 ease-in">Guardar</span>
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}