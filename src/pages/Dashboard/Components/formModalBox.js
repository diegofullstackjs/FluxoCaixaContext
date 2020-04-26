import React,{useState} from 'react';
import {  Modal,Form,
    Button} from 'react-bootstrap'
// import { Container } from './styles';

export default function ModalBox({contextCategoria}) {
    const [form,setform] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {

      setform({
          ...form,
          [e.target.name] : e.target.value
      })
    }
    
  return (
    <>
      <Button variant="primary" block onClick={handleShow}>
        Criar um novo Caixa
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Novo Caixa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="name">
              <Form.Label>Caixa</Form.Label>
              <Form.Control type="text" name="name" onChange={handleChange} placeholder="Pizzaria do gordo" />
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
          <Button variant="success" onClick={handleClose}>
            ADCIONAR
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
