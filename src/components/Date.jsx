import React from 'react'
import { useEffect, useState } from 'react'

const Date = () => {
  const [currentDate, setCurrentDate] = useState(() => new globalThis.Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new globalThis.Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
   
  }).replaceAll(',', '')
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })

  return (
    <time dateTime={currentDate.toISOString()}>
      {formattedDate} {formattedTime}
    </time>
  )
}

export default Date
