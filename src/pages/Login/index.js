import React, { useState,useEffect } from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap'
import {api} from '../../services/index'
export default function LoginPage() {
    const [status,setStatus] = useState({
        loading: false
    });
    const [form,setform] = useState()

    function ShowMessage(status){
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
        ShowMessage(status)
    },[status])
    const Logar = e => {
        e.preventDefault();
      setStatus({
          loading: true
      })
      api.post('/user/login',form)
            .then((response) => {
                if(response.data.user)
                {
                    setStatus({
                        loading:false,
                        type: "success",
                        message: "Usuario Logado Corretamente",
                        user: response.data
                    })
                }
            }).catch((e) => {
                setStatus({
                    loading:false,
                    type: "error",
                    messsage: "Ocorreu um erro em nossos servidores"
                })
            })
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
         { status.message} 
        <Form.Group controlId="LoginEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="LoginPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" block type="submit">
           {
               status.loading? 'Carregando' : 'Entrar'
           }
        </Button>
    </Form>
    </Col>
</Row>
  );
}
