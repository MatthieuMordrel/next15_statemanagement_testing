async function SlowerComponent(data: any) {
  return (
    <div className='p-4 bg-green-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Slower Component</h2>
      <p>This component took 4 seconds to load!</p>
      <p>Data: {data.title}</p>
    </div>
  )
}

export default SlowerComponent
