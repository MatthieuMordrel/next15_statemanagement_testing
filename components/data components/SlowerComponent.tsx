'use client'

import { Button } from '@/components/ui/button'
import { useData } from '@/hooks/useData'
import { Data } from '@/lib/data'

function SlowerComponent({ data }: { data: Data }) {
  const { state, incrementYear } = useData({ data })

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
