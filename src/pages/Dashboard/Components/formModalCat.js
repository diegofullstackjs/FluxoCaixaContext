import React,{useState} from 'react';
import {  Modal,Form,
    Button} from 'react-bootstrap'
// import { Container } from './styles';

export default function ModalCat({contextCategoria,message}) {
    const [show, setShow] = useState(false);
    const [form,setform] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {

      setform({
          ...form,
          [e.target.name] : e.target.value
      })
    }
    const handleSubmit = e => {
      contextCategoria(form)
    }
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
          {
            message?
              message.type === "success" ? 
              <p className="text-success">{message.message}</p> : <p className="text-danger">{message.message}</p> 
             : ''
          }
        <Form>
            <Form.Group controlId="name">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" name="name" onChange={handleChange} placeholder="Pagamento..." />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Pequena descriçao</Form.Label>
              <Form.Control as="textarea" name="description" onChange={handleChange} rows="3" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            ADCIONAR
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
