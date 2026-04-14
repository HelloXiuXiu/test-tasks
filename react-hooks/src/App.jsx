import { useState, useEffect } from 'react'
import { Popup } from './Popup'

import usePrevious from './hooks/usePrevious'

// helps to handle strick mode
window.env = 'development'

function App() {
  const [show, setShow] = useState(1)

  const prev = usePrevious(show)
  console.log({ prev, cur: show})

  return (
    <>
      <button onClick={() => setShow(state => state + 1)}>show popup</button>
    </>
  )
}

export default App
