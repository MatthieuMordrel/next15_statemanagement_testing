'use client'
import { use } from 'react'

export function ConsumePromiseComponent({ promise }: { promise: Promise<any> }) {
  const data = use(promise)

  return (
    <div className='p-4 bg-blue-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Data Component</h2>
      <p>Loaded data: {data.title}</p>
      <p>Timestamp: {data.timestamp}</p>
    </div>
  )
}
