import { useState } from "react"


const App = () => {
  const [quote, setQuote] = useState('')
  const RandomQuote = () => {
    fetch('http://api.quotable.io/random')
      .then(res => res.json())
      .then((res) => setQuote(res.content))
  }

  const handleChange = () => {
    RandomQuote()
  }
  return (
    <div className="p-5">
      <div className="quote bg-light m-auto p-5 fs-2 rounded">
        <q>
        {
         quote
        }
        </q>
      </div>
      <div className="m-auto text-center p-3">
        <button onClick={handleChange} className="px-5 py-2 bg-main fs-4 text-light rounded">Change Quote</button>
      </div>
    </div>
  )
}

export default App
