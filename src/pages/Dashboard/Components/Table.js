import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap'
export default function TableFluxo({fluxo}) {
    const [table,setTable] = useState([])
    useEffect(() => {
        setTable(fluxo)
    },[])
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Quantidade</th>
        <th>Categoria</th>
        <th>Usuario</th>
      </tr>
    </thead>
    <tbody>
    {
     table.map((item) => {
        return (
            <tr key={item._id}>
            <td>{item.tipo}</td>
            <td>{item.quantidade}</td>
            <td>{item.id_categorias.name}</td>
            <td>{item.id_user.nome}</td>
           </tr> 
        )
     })
    }
    </tbody>
   </Table>
    )
}
