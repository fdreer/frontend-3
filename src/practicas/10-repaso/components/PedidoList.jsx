import {useState} from 'react'
import Pedido from './Pedido'
export default function PedidoList({pedidos, deletePedido}) {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {pedidos.map(pedido => (
        <Pedido key={pedido.id} pedido={pedido} deletePedido={deletePedido} />
      ))}
    </ul>
  )
}
