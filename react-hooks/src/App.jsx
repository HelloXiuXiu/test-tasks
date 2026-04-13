import { useState, useEffect } from 'react'
import { Popup } from './Popup'

import useIsFirstRender from './hooks/useIsFirstRender'

// helps to handle strick mode
window.env = 'development'

function App() {
  const [show, setShow] = useState(false)

  const isFirstRender = useIsFirstRender()
  console.log('isFirstRender', isFirstRender)

  return (
    <>
      <button onClick={() => setShow(true)}>show popup</button>
      {show && <Popup setShow={() => setShow(false)} />}
    </>
  )
}

export default App
