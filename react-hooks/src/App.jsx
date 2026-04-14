import { useState, useEffect } from 'react'
import { Popup } from './Popup'

import useIsUnmounted from './hooks/useIsUnmounted'

// helps to handle strick mode
window.env = 'development'

function App() {
  const [show, setShow] = useState(false)

  const isUnmounted = useIsUnmounted()
  console.log('isUnmounted', isUnmounted)

  return (
    <>
      <button onClick={() => setShow(true)}>show popup</button>
      {show && <Popup setShow={() => setShow(false)} />}
    </>
  )
}

export default App
