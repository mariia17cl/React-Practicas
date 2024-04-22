import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMG_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)

        fetch(
          `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
        )
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1> App de gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_ENDPOINT_IMG_URL}${imageUrl}`}
          alt={`Image extrated using the first three word for ${fact}`}
        />
      )}
    </main>
  )
}
