'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

function SlowComponent({ data }: { data: any }) {
  const [state, setState] = useState(data)

  const incrementYear = () => {
    const date = new Date(state)
    date.setFullYear(date.getFullYear() + 1)
    setState(date.toISOString())
  }

  return (
    <div className='p-4 bg-blue-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Slow Component</h2>
      <p>This component took 2 seconds to load!</p>
      <p>Loaded data: {state.title}</p>
      <p>Timestamp: {state.timestamp}</p>
      <Button onClick={incrementYear} className='mt-2'>
        Increment Year
      </Button>
    </div>
  )
}

export default SlowComponent
