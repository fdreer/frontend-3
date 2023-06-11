import {useEffect, useState} from 'react'
import Form from './Ejercicio5Form'

function Ejercicio5() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getPosts = async () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'

    try {
      setLoading(true)
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw 'No se pudo obtener los posts'
      }
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <h3>Ejercicio 5</h3>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <ul>
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </>
  )
}

export default Ejercicio5
