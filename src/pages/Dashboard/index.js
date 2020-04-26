import React, { useEffect, useContext } from 'react';
import ModalCat from './Components/formModalCat'
import ModalBox from './Components/formModalBox'
import TableFluxo from './Components/Table'
import {
  Row,
  Col,
} from 'react-bootstrap'
import {AuthContext} from '../../context/'
import {UserInfo} from '../../context/info'

export default function DashboardPage() {
  const {auth} = useContext(AuthContext)
  const {data,createCategorie} = useContext(UserInfo)
  useEffect(()=> {
    document.title= `Dashboard ${auth.user}`
  })
  console.log(data)
  return (
    <Row>
        <Col md={12}><h1 className="text-center">{data.loading? "" : `Bem vindo ${auth.user}`} </h1></Col>
        {
          data.loading? <h1>Carregando..</h1> :
          (
          <Col md={4} className="mt-2" >
            <Row>
                <Col md={12}><ModalCat contextCategoria={createCategorie} message={data.msg}/></Col>
                <Col md={12} className="mt-2"><ModalBox /></Col>
            </Row>
          </Col>
          )
        }
        {
          data.loading? <h1>Carregando Movimentaçoes</h1> :
          (
            <Row md={12}>
            <TableFluxo fluxo={data.dados.fluxo} />
           </Row>
          )
        }
    </Row>
     
  );
}
