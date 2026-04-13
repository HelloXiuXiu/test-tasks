import { useRef, useEffect } from 'react'

export default function useIsFirstRender() {
  const ref = useRef(true)

   if (ref.current) {
    ref.current = false
    return true
  }

  return false
}