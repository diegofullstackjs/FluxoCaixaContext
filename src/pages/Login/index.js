import React, { useState,useEffect } from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap'
import {api} from '../../services/index'
export default function LoginPage() {
    const [status,setStatus] = useState({});
    const [form,setform] = useState({
        email: '',
        password: ''
    })

    function showMessage(status){
        console.log(status)
        if(status.type === "error"){
            return (
                <p className="text-danger">{status.message}</p> 
            )
        }else if(status.type === "success"){
            return (
                <p className="text-success">{status.message}</p> 
            )
        }
    }
    useEffect(() => {
        showMessage(status)
    },[status])
    const Logar = e => {
        e.preventDefault();

        api.post('/user/login',form)
            .then((response) => {
                if(response.data._id)
                {
                    setStatus({
                        type: "success",
                        message: "Usuario cadastrado corretamente",
                        user: response.data
                    })
                }
            }).catch((e) => {
                setStatus({
                    type: "error",
                    messsage: "Ocorreu um erro em nossos servidores"
                })
            })
    }
    const onChange = e => {
        setform({
            ...form,
            [e.target.name] : e.target.value
        })

    }
  return (
    <Row className="mt-2">
    <Col md={4} className="offset-md-4">
    <Form onSubmit={Logar}>
         <showMessage />
        <Form.Group controlId="LoginEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" name="email" onChange={onchange} placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="LoginPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" name="password" onChange={onchange} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" block type="submit">
            Entrar
        </Button>
    </Form>
    </Col>
</Row>
  );
}
