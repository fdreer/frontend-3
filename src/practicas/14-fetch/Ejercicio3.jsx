import {useEffect, useState} from 'react'

function Ejercicio3() {
  const [text, setText] = useState('')

  async function getRandomFact() {
    const endpoint = 'https://cat-fact.herokuapp.com/facts/random'

    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw new Error('Error')
      }
      const fact = await response.json()
      setText(fact.text)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRandomFact()
  }, [])

  return (
    <>
      <h3>Ejercicio 3</h3>
      <button onClick={getRandomFact}>Next fact</button>
      {text && <p>{text}</p>}
    </>
  )
}

export default Ejercicio3
