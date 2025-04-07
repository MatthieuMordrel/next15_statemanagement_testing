'use client'

import { Data } from '@/lib/data'
import { createContext, ReactNode, useContext, useEffect, useRef } from 'react'
import { useStore } from 'zustand'
import { createDataStore, DataState } from './store'

// Define the type for the store API
export type DataStoreApi = ReturnType<typeof createDataStore>

// Create the context
export const DataStoreContext = createContext<DataStoreApi | undefined>(undefined)

// Provider props interface with server data
export interface DataStoreProviderProps {
  children: ReactNode
  slowData?: Data | null
  slowerData?: Data | null
}

// Provider component that creates the store instance and initializes with server data
export function DataStoreProvider({ children, slowData, slowerData }: DataStoreProviderProps) {
  // Use a ref to ensure the store is only created once
  const storeRef = useRef<DataStoreApi | null>(null)

  // Create the store with initial server data if it doesn't exist
  if (storeRef.current === null) {
    storeRef.current = createDataStore({
      slowData: slowData || null,
      slowerData: slowerData || null
    })
  }

  // Update the store when server data changes (during development/HMR)
  const store = storeRef.current
  useEffect(() => {
    if (slowData !== undefined) {
      store.getState().actions.setSlowData(slowData)
    }
    if (slowerData !== undefined) {
      store.getState().actions.setSlowerData(slowerData)
    }
  }, [store, slowData, slowerData])

  return <DataStoreContext.Provider value={storeRef.current}>{children}</DataStoreContext.Provider>
}

// Internal base hook to access the store
function useDataStoreBase<T>(selector: (state: DataState) => T): T {
  const dataStoreContext = useContext(DataStoreContext)

  if (!dataStoreContext) {
    throw new Error(`useDataStore must be used within DataStoreProvider`)
  }

  return useStore(dataStoreContext, selector)
}

// Export atomic selector hooks instead of a single hook
// This prevents unnecessary rerenders by subscribing only to specific parts of state

// Data selectors
export function useSlowData(): Data | null {
  return useDataStoreBase(state => state.slowData)
}

export function useSlowerData(): Data | null {
  return useDataStoreBase(state => state.slowerData)
}

// Loading state selectors
export function useIsLoadingSlow(): boolean {
  return useDataStoreBase(state => state.isLoadingSlow)
}

export function useIsLoadingSlower(): boolean {
  return useDataStoreBase(state => state.isLoadingSlower)
}

// Error state selectors
export function useErrorSlow(): string | null {
  return useDataStoreBase(state => state.errorSlow)
}

export function useErrorSlower(): string | null {
  return useDataStoreBase(state => state.errorSlower)
}

// Actions selector - since actions don't change, it's fine to export them all in one hook
export function useDataActions() {
  return useDataStoreBase(state => state.actions)
}
