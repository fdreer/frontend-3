import {useState} from 'react'

import Form from './components/Form'
import PedidoList from './components/PedidoList'

export default function Clase10() {
  const [pedidos, setPedidos] = useState([])

  const agregarPedido = pedido => {
    setPedidos([...pedidos, pedido])
  }

  const deletePedido = pedido => {
    setPedidos(pedidos.filter(p => p.id !== pedido.id))
  }

  return (
    <div style={{width: '800px', margin: '0 auto'}}>
      <h1>Clase 10 - Pedi3 Ya</h1>
      <Form agregarPedido={agregarPedido} />
      <hr />
      <h3>Lista de pedidos</h3>
      <PedidoList pedidos={pedidos} deletePedido={deletePedido} />
    </div>
  )
}
