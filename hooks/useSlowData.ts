import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

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

export function useSlowDataRSC() {
  return useSuspenseQuery({
    queryKey: ['slowDataRSC'],
    queryFn: fetchSlowData
  })
}

export function useSlowerDataRSC() {
  return useSuspenseQuery({
    queryKey: ['slowerDataRSC'],
    queryFn: fetchSlowerData
  })
}

/**
 * Custom hook for fetching slow data (2s delay) using Promise Props
 * @returns React Query result for slow data
 */
export function useSlowDataPromiseProps() {
  return useSuspenseQuery({
    queryKey: ['slowDataPromiseProps'],
    queryFn: fetchSlowData
  })
}

/**
 * Custom hook for fetching slower data (4s delay) using Promise Props
 * @returns React Query result for slower data
 */
export function useSlowerDataPromiseProps() {
  return useSuspenseQuery({
    queryKey: ['slowerDataPromiseProps'],
    queryFn: fetchSlowerData
  })
}
