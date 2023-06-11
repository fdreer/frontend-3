import {useEffect, useState} from 'react'

function Ejercicio1() {
  const [title, setTitle] = useState('')
  async function getPost(num) {
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${num}`

    const post = await (await fetch(endpoint)).json()
    setTitle(post.title)
  }

  useEffect(() => {
    getPost(1)
  }, [])

  return (
    <>
      <h2>Ejercicio 1</h2>
      {title && <p>Titulo: {title}</p>}
    </>
  )
}

export default Ejercicio1
