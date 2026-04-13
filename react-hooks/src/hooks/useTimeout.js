import { useEffect, useRef } from 'react'

// if delay changes, create a new setTimeout
// if a new callback is passed in, don't cause a re-trigger
export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    const timer = setTimeout(callbackRef.current, delay)

    return () => clearTimeout(timer)
  }, [delay])
}