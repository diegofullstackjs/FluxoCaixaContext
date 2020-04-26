import React, { useEffect, useContext } from 'react';
import ModalCat from './Components/formModalCat'
import ModalBox from './Components/formModalBox'
import {
  Row,
  Col,
} from 'react-bootstrap'
import {AuthContext} from '../../context/'
import {UserInfo} from '../../context/info'

export default function DashboardPage() {
  const {auth} = useContext(AuthContext)
  const {data} = useContext(UserInfo)
  useEffect(()=> {
    document.title= `Dashboard ${auth.user}`
  })
  return (
    <Row>
        <Col md={12}><h1>{data.loading? "Carregando informaçoes" : `Bem vindo ${auth.user}`} </h1></Col>
        <Col md={4} >
          <Row>
              <Col md={12}><ModalCat/></Col>
              <Col md={12} className="mt-2"><ModalBox /></Col>
          </Row>
        </Col>
    </Row>
     
  );
}
