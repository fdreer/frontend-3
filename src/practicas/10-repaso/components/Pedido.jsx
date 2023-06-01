export default function Pedido({pedido, deletePedido}) {
  return (
    <li
      style={{
        listStyle: 'none',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '200px',
      }}
    >
      <h4>{pedido.name}</h4>
      <button onClick={() => deletePedido(pedido)}>DELETE</button>
    </li>
  )
}
