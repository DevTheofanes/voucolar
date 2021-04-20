import Modal from 'react-modal'
import { MdClose } from "react-icons/md";
import { Container, HeaderModal } from './styles';

export function FormModal({isOpen, onRequestClose, title, children}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <MdClose color="#111" size={20}/>
      </button>
        
      <Container>
        <HeaderModal>
          <h2>{title}</h2>
        </HeaderModal>

        {children}
      </Container>
    </Modal>
  );
}
      
      