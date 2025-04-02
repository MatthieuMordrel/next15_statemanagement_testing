'use client'

import { Button } from '@/components/ui/button'
import { Data } from '@/lib/data'
import { useEffect, useState } from 'react'

function SlowerComponent({ data }: { data: Data }) {
  console.log('SlowerComponent streaming with data:', data.timestamp)
  const [state, setState] = useState(data)

  useEffect(() => {
    console.log('SlowerComponent hydrated with timestamp:', state.timestamp)
  }, [state.timestamp])

  const incrementYear = () => {
    const date = new Date(state.timestamp)
    date.setFullYear(date.getFullYear() + 1)
    setState({ ...state, timestamp: date.toISOString() })
  }

  return (
    <div className='p-4 bg-green-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Slower Component</h2>
      <p>This component took 4 seconds to load!</p>
      <p>Loaded data: {state.title}</p>
      <p>Timestamp: {state.timestamp}</p>
      <Button onClick={incrementYear} className='mt-2'>
        Increment Year
      </Button>
    </div>
  )
}

export default SlowerComponent
