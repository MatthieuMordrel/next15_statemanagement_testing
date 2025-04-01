'use client'

function SlowComponent({ data }: { data: any }) {
  return (
    <div className='p-4 bg-blue-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Slow Component</h2>
      <p>This component took 2 seconds to load!</p>
      <p>Loaded data: {data.title}</p>
      <p>Timestamp: {data.timestamp}</p>
    </div>
  )
}

export default SlowComponent
