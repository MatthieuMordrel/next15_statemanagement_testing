import { Data, fetchSlowData, fetchSlowerData } from '@/lib/data'
import { createStore } from 'zustand/vanilla'

// Define the store state type
export interface DataState {
  // Data states
  slowData: Data | null
  slowerData: Data | null
  // Loading states
  isLoadingSlow: boolean
  isLoadingSlower: boolean
  // Error states
  errorSlow: string | null
  errorSlower: string | null
  // Separate actions namespace
  actions: {
    fetchSlowData: () => Promise<void>
    fetchSlowerData: () => Promise<void>
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
      // Model actions as events, not setters
      fetchSlowData: async () => {
        set({ isLoadingSlow: true, errorSlow: null })
        try {
          const data = await fetchSlowData()
          set({ slowData: data })
        } catch (error) {
          set({ errorSlow: error as string })
        } finally {
          set({ isLoadingSlow: false })
        }
      },

      fetchSlowerData: async () => {
        set({ isLoadingSlower: true, errorSlower: null })
        try {
          const data = await fetchSlowerData()
          set({ slowerData: data })
        } catch (error) {
          set({ errorSlower: error as string })
        } finally {
          set({ isLoadingSlower: false })
        }
      },

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
