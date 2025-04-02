'use client'

import { Data } from '@/lib/data'
import { createContext, ReactNode, useContext } from 'react'

type DataContextType = {
  slowPromise: Promise<Data>
  slowerPromise: Promise<Data>
}

const DataContext = createContext<DataContextType | null>(null)

export function useDataContext() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }
  return context
}

export function DataProvider({
  children,
  slowPromise,
  slowerPromise
}: {
  children: ReactNode
  slowPromise: Promise<Data>
  slowerPromise: Promise<Data>
}) {
  return <DataContext.Provider value={{ slowPromise, slowerPromise }}>{children}</DataContext.Provider>
}
