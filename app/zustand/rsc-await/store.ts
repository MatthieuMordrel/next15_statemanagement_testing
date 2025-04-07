import { Data } from '@/lib/data'
import { createStore } from 'zustand/vanilla'

// Define the store state type
export interface DataState {
  // Data states
  slowData: Data | null
  slowerData: Data | null
  // Loading states (mostly for client-side updates)
  isLoadingSlow: boolean
  isLoadingSlower: boolean
  // Error states
  errorSlow: string | null
  errorSlower: string | null
  // Separate actions namespace
  actions: {
    // Setter actions to hydrate the store with server data
    setSlowData: (data: Data | null) => void
    setSlowerData: (data: Data | null) => void
    // Client-side actions
    incrementSlowYear: () => void
    incrementSlowerYear: () => void
  }
}

// Create a store factory function for Next.js per-request store pattern
export const createDataStore = (initState: Partial<Omit<DataState, 'actions'>> = {}) => {
  return createStore<DataState>(set => ({
    // Initial states
    slowData: null,
    slowerData: null,
    isLoadingSlow: false,
    isLoadingSlower: false,
    errorSlow: null,
    errorSlower: null,
    ...initState,

    // Separate actions into their own namespace
    actions: {
      // Server data hydration actions
      setSlowData: (data: Data | null) => {
        set({ slowData: data })
      },

      setSlowerData: (data: Data | null) => {
        set({ slowerData: data })
      },

      // Client-side actions
      incrementSlowYear: () => {
        set(state => {
          if (!state.slowData) return state

          const date = new Date(state.slowData.timestamp)
          date.setFullYear(date.getFullYear() + 1)

          return {
            slowData: {
              ...state.slowData,
              timestamp: date.toISOString()
            }
          }
        })
      },

      incrementSlowerYear: () => {
        set(state => {
          if (!state.slowerData) return state

          const date = new Date(state.slowerData.timestamp)
          date.setFullYear(date.getFullYear() + 1)

          return {
            slowerData: {
              ...state.slowerData,
              timestamp: date.toISOString()
            }
          }
        })
      }
    }
  }))
}
