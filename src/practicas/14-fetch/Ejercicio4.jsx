import {useState} from 'react'

function Ejercicio4() {
  const [valuesForm, setValuesForm] = useState({title: '', body: ''})
  const [response, setResponse] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (valuesForm.title === '' || valuesForm.body === '') return

    const endpoint = 'https://jsonplaceholder.typicode.com/posts'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valuesForm),
    }

    try {
      const response = await fetch(endpoint, options)
      if (!response.ok) {
        throw 'Error'
      }
      setResponse('Saved')
    } catch (err) {
      setResponse(err.message)
    } finally {
      e.target.reset()
      setValuesForm({title: '', body: ''})
    }
  }

  function handleChange(e) {
    setValuesForm({...valuesForm, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h3>Ejercicio 4</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="body"
          cols="20"
          rows="5"
          placeholder="Write here..."
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
      {response && <p>{response}</p>}
    </>
  )
}

export default Ejercicio4
