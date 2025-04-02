import { useEffect, useRef } from 'react'

export function useCountRenders() {
  const renders = useRef(1)
  useEffect(() => {
    renders.current++
  }) //no deps so it works on every render
  return renders.current
}
