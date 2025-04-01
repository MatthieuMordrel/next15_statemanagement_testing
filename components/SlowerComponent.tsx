'use client'

function SlowerComponent({ data }: { data: any }) {
  return (
    <div className='p-4 bg-green-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Slower Component</h2>
      <p>This component took 4 seconds to load!</p>
      <p>Loaded data: {data.title}</p>
      <p>Timestamp: {data.timestamp}</p>
    </div>
  )
}

export default SlowerComponent
