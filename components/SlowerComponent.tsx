'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

function SlowerComponent({ data }: { data: any }) {
  console.log('SlowerComponent streaming with data:', data.timestamp)
  const [timestamp, setTimestamp] = useState(data.timestamp)

  useEffect(() => {
    console.log('SlowerComponent hydrated with timestamp:', timestamp)
  }, [])

  const incrementYear = () => {
    const date = new Date(timestamp)
    date.setFullYear(date.getFullYear() + 1)
    setTimestamp(date.toISOString())
  }

  return (
    <div className='p-4 bg-green-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Slower Component</h2>
      <p>This component took 4 seconds to load!</p>
      <p>Loaded data: {data.title}</p>
      <p>Timestamp: {timestamp}</p>
      <Button onClick={incrementYear} className='mt-2'>
        Increment Year
      </Button>
    </div>
  )
}

export default SlowerComponent
