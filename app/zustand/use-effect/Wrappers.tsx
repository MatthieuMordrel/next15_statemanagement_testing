'use client'

import DataComponent from '@/components/data components/DataComponent'
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect } from 'react'
import { useDataActions, useErrorSlow, useErrorSlower, useIsLoadingSlow, useIsLoadingSlower, useSlowData, useSlowerData } from './provider'

// Wrapper for the slow component (2 seconds)
export function WrapperSlowComponent_Zustand_Effect() {
  // Use atomic selectors to prevent unnecessary rerenders
  const slowData = useSlowData()
  const isLoadingSlow = useIsLoadingSlow()
  const errorSlow = useErrorSlow()
  const { fetchSlowData, incrementSlowYear } = useDataActions()

  // Fetch data on component mount
  useEffect(() => {
    fetchSlowData()
  }, [fetchSlowData])

  // If data is available, render the component
  if (slowData) return <DataComponent data={slowData} seconds={2} color='blue' incrementYear={incrementSlowYear} />

  if (errorSlow) {
    return (
      <div className='p-4 bg-red-100 rounded-lg'>
        <h2 className='text-xl font-semibold'>Error Loading Data</h2>
        <p>{errorSlow}</p>
      </div>
    )
  }

  if (isLoadingSlow) {
    return <Skeleton className='h-[100px] w-full' />
  }
  return null
}

// Wrapper for the slower component (4 seconds)
export function WrapperSlowerComponent_Zustand_Effect() {
  // Use atomic selectors to prevent unnecessary rerenders
  const slowerData = useSlowerData()
  const isLoadingSlower = useIsLoadingSlower()
  const errorSlower = useErrorSlower()
  const { fetchSlowerData, incrementSlowerYear } = useDataActions()

  // Fetch data on component mount
  useEffect(() => {
    fetchSlowerData()
  }, [fetchSlowerData])

  // If data is available, render the component
  if (slowerData) return <DataComponent data={slowerData} seconds={4} color='green' incrementYear={incrementSlowerYear} />

  if (errorSlower) {
    return (
      <div className='p-4 bg-red-100 rounded-lg'>
        <h2 className='text-xl font-semibold'>Error Loading Data</h2>
        <p>{errorSlower}</p>
      </div>
    )
  }

  if (isLoadingSlower) {
    return <Skeleton className='h-[100px] w-full' />
  }
  return null
}
