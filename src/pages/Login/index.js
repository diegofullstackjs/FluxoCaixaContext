import React, { useState,useContext } from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap'
import {AuthContext} from '../../context/'
export default function LoginPage() {
    const {signIn,auth} = useContext(AuthContext)
    const [form,setform] = useState()

    const Logar = e => {
        e.preventDefault();
        signIn(form)
    }
    const handleChange = e => {
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
    }
  return (
    <Row className="mt-2">
    <Col md={4} className="offset-md-4">
    <Form onSubmit={Logar}>
        <Form.Group controlId="LoginEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="LoginPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" block type="submit">
            LOGIN
        </Button>
    </Form>
    </Col>
</Row>
  );
}
