import { Data, fetchSlowData, fetchSlowerData } from '@/lib/data'
import { useQuery } from '@tanstack/react-query'

/**
 * Custom hook for fetching slow data (2s delay)
 * @returns React Query result for slow data
 */
export function useSlowData() {
  return useQuery({
    queryKey: ['slowData'],
    queryFn: fetchSlowData
  })
}

/**
 * Custom hook for fetching slower data (4s delay)
 * @returns React Query result for slower data
 */
export function useSlowerData() {
  return useQuery({
    queryKey: ['slowerData'],
    queryFn: fetchSlowerData
  })
}
