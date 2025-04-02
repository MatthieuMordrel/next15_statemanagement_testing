'use client'

import { Data } from '@/lib/data'
import { cache, createContext, ReactNode, useCallback, useContext, useState } from 'react'

type DataContextType = {
  slowPromise: Promise<Data>
  slowerPromise: Promise<Data>
  sharedState: {
    timestamp: string
  }
  incrementYear: () => void
}

const DataContext = createContext<DataContextType | null>(null)

export function useDataContext() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }
  return context
}

// Cache the promises to prevent refetching
export const getCachedSlowPromise = cache((promise: Promise<Data>) => promise)
export const getCachedSlowerPromise = cache((promise: Promise<Data>) => promise)

export function DataProvider({
  children,
  slowPromise,
  slowerPromise
}: {
  children: ReactNode
  slowPromise: Promise<Data>
  slowerPromise: Promise<Data>
}) {
  // Cache the promises
  const cachedSlowPromise = getCachedSlowPromise(slowPromise)
  const cachedSlowerPromise = getCachedSlowerPromise(slowerPromise)

  // Shared state for timestamp
  const [sharedState, setSharedState] = useState({
    timestamp: new Date().toISOString()
  })

  // Shared increment function
  const incrementYear = useCallback(() => {
    const date = new Date(sharedState.timestamp)
    date.setFullYear(date.getFullYear() + 1)
    setSharedState({ timestamp: date.toISOString() })
  }, [sharedState.timestamp])

  return (
    <DataContext.Provider
      value={{
        slowPromise: cachedSlowPromise,
        slowerPromise: cachedSlowerPromise,
        sharedState,
        incrementYear
      }}>
      {children}
    </DataContext.Provider>
  )
}
