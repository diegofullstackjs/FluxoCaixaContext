import React,{useState} from 'react';
import {  Modal,Form,
    Button} from 'react-bootstrap'
// import { Container } from './styles';

export default function ModalCat() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" block onClick={handleShow}>
        Adcionar categoria
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adcionar uma nova categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="name">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" name="name" placeholder="Pagamento..." />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Pequena descriçao</Form.Label>
              <Form.Control as="textarea" name="description" rows="3" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" onClick={handleClose}>
            ADCIONAR
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
