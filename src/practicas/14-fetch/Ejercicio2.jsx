import {useState} from 'react'

function Ejercicio2() {
  const [facts, setFacts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function getAndSaveFacts() {
    const endpoint = `https://cat-fact.herokuapp.com/facts`

    try {
      setLoading(true)
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw {
          status: response.status,
          statusText: response.statusText,
        }
      }
      const facts = await response.json()
      const factsMapped = mappingFact(facts)
      setFacts(factsMapped)
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
      console.log('finally')
    }
  }

  function mappingFact(facts) {
    return facts.map(fact => ({
      id: fact._id,
      text: fact.text,
    }))
  }

  return (
    <>
      <h2>Ejercicio 2</h2>
      <button onClick={getAndSaveFacts}>Search data</button>
      {loading && <p>Loading...</p>}
      {error && (
        <p>
          Error: {error.status} - {error.statusText}
        </p>
      )}
      <ul>
        {facts.map(fact => (
          <li key={fact.id}>{fact.text}</li>
        ))}
      </ul>
    </>
  )
}

export default Ejercicio2
