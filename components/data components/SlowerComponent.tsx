'use client'

import { Button } from '@/components/ui/button'
import { Data } from '@/lib/data'

//This component is only used to display the data, but we should be able to retrieve the data and setter functions directly inside it if needed
function SlowerComponent({ data, incrementYear }: { data: Data; incrementYear: () => void }) {
  return (
    <div className='p-4 bg-green-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Slower Component</h2>
      <p>This component took 4 seconds to load!</p>
      <p>Loaded data: {data.title}</p>
      <p>Timestamp: {data.timestamp}</p>
      <Button onClick={incrementYear} className='mt-2'>
        Increment Year
      </Button>
    </div>
  )
}

export default SlowerComponent
