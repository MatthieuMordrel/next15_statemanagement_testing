'use client'

import { Button } from '@/components/ui/button'
import { useCountRenders } from '@/hooks/useCountRenders'
import { Data } from '@/lib/data'
import { UseMutateFunction } from '@tanstack/react-query'

// Using complete class names that are statically detectable at build time
const colorVariants: Record<string, string> = {
  red: 'bg-red-100',
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  yellow: 'bg-yellow-100'
}

// Define a union type for incrementYear
type IncrementYearType = UseMutateFunction<any, Error, number | undefined, Data> | (() => void)

/**
 * This component is only used to display the data, but we should be able to retrieve the data and setter functions directly inside it if needed
 */
function DataComponent({ data, seconds, color, incrementYear }: { data: Data; seconds: number; color: string; incrementYear: IncrementYearType }) {
  const renders = useCountRenders()

  // Get the background color class, fallback to a default if color is not in variants
  const bgColorClass = colorVariants[color] || 'bg-gray-100'

  // Handle the incrementYear function based on its type
  const handleIncrementYear = () => {
    // Call the function with undefined as the argument for React Query mutations
    incrementYear(undefined as any)
  }

  return (
    <div className={`p-4 ${bgColorClass} rounded-lg`}>
      <h2 className='text-xl font-semibold'>Data Component</h2>
      <p>This component took {seconds} seconds to load!</p>
      <p>Loaded data: {data.title}</p>
      <p>Timestamp: {data.timestamp}</p>
      <Button onClick={handleIncrementYear} className='mt-2'>
        Increment Year
      </Button>
      <p>Renders: {renders}</p>
    </div>
  )
}

export default DataComponent
