import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './publications.css'

const Abstract = (props) => {

  const {show,
    handleClose,
    handleShow,
    title,
    abstract,
    fullPaperLink} = props

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size='xl'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" className="purple">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.abstract}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={props.fullPaperLink} target="_blank">Read Full Paper</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Abstract;