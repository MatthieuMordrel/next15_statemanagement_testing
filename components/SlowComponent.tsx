async function SlowComponent(data: any) {
  return (
    <div className='p-4 bg-blue-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Slow Component</h2>
      <p>This component took 2 seconds to load!</p>
      <p>Data: {data.title}</p>
    </div>
  )
}

export default SlowComponent
