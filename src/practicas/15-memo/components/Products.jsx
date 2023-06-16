import {useMemo} from 'react'
import data from '../../../fakeApi/products.json'

function Products() {
  const productsWithPriceMoreThan50 = useMemo(() => {
    console.log('Ejecutando productsWithPriceMoreThan50')
    return data.filter(product => product.precio > 50)
  }, [])

  return (
    <>
      <h2>Ejercicio 2</h2>
      <h4>Productos con precio mayor a 50</h4>
      <ul>
        {productsWithPriceMoreThan50.map(product => (
          <li key={product.id}>{product.nombre}</li>
        ))}
      </ul>
    </>
  )
}
export default Products
