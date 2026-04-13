import { useEffect, useRef } from 'react'

// run effect() function only when deps are updated, but skip first mount
// note that in a strict mode it'd run the hook at the first render once anyway, 
// window.env === 'development' is created to handle that case
export default function useUpdateEffect(effect, deps = []) {
  const renderRef = useRef(0)

  useEffect(() => {
    if (!renderRef.current) {
      renderRef.current++
      return
    }
    // strick mode workaround
    if (window.env === 'development' && renderRef.current === 1) {
      renderRef.current++
      return
    }
    effect()
  }, deps)
}