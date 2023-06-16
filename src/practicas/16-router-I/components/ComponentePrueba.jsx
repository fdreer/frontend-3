import {useParams} from 'react-router-dom'

function DinamicComponent() {
  const params = useParams()
  return (
    <>
      <h3>Componente dinamico</h3>
      <p>{params.id}</p>
    </>
  )
}
export default DinamicComponent
