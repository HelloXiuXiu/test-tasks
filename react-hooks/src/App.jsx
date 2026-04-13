import { useState, useEffect } from 'react'
import { Popup } from './Popup'

import useTimeout from './hooks/useTimeout'

// helps to handle strick mode
window.env = 'development'

function App() {
  const [show, setShow] = useState(false)

  useTimeout(() => {
    console.log('kek')
  }, 2000)

  return (
    <>
      <button onClick={() => setShow(true)}>show popup</button>
      {show && <Popup setShow={() => setShow(false)} />}
    </>
  )
}

export default App
