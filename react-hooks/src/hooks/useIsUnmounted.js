import { useRef, useEffect } from 'react'

// hook may help with canseling async actions when 
// component is already unmounted
// warning: it's an antipattern, better handle cleanups any other ways
export default function useIsUnmounted() {
  const ref = useRef(false)

  useEffect(() => {
    ref.current = false
    return () => ref.current = true
  }, [])

  return ref.current
}