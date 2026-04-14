import { useRef, useEffect } from 'react'

export default function usePrevious(state) {
  const prevState = useRef()

  useEffect(() => {
    prevState.current = state
  }, [state])

  return prevState.current
}