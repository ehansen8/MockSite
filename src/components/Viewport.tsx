import { useState, useEffect } from 'react'

export function Viewport() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <span>{viewportWidth} </span>
}
