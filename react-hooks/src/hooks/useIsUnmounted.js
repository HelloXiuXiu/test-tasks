import { useRef, useEffect } from 'react'

// WIP 
export default function useIsUnmounted(elementRef) {
  const ref = useRef(false)

  useEffect(() => {
    //
  }, [])

  return ref.current
}