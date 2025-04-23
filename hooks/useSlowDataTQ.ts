import { Data, fetchSlowData, fetchSlowerData, incrementYear } from '@/lib/data'
import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { useRef } from 'react'

// Reusable incrementYear mutation factory
function createIncrementYearMutation(queryKey: string, fetchFn: () => Promise<Data>) {
  const queryClient = useQueryClient()
  // Use a ref to track the most recent mutation timestamp
  const latestMutationRef = useRef<number>(0)

  return useMutation({
    mutationKey: [`incrementYear-${queryKey}`],
    onMutate: async () => {
      // Cancel any in-flight queries
      await queryClient.cancelQueries({ queryKey: [queryKey] })

      // Get current data
      const data = queryClient.getQueryData([queryKey]) as Data

      // Update the data optimistically
      queryClient.setQueryData([queryKey], incrementYear(data))

      // Return the current data for potential rollback
      return data
    },
    mutationFn: async () => {
      // Assign a timestamp to this mutation, this helps us determine if this is the most recent mutation
      const mutationTimestamp = Date.now()
      latestMutationRef.current = mutationTimestamp

      // Fetch the data
      const data = await fetchFn()

      // Return both the data and the timestamp
      return { data, mutationTimestamp }
    },
    onSuccess: (result, variables, context) => {
      // Only update the query cache if this is the most recent mutation
      if (result.mutationTimestamp === latestMutationRef.current) {
        queryClient.setQueryData([queryKey], result.data)
      }
    }
  })
}

export function useSlowData() {
  const query = useQuery({
    queryKey: ['slowData'],
    queryFn: fetchSlowData
  })
  const incrementYear = createIncrementYearMutation('slowData', fetchSlowData)

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    incrementYear: incrementYear.mutate
  }
}

export function useSlowerData() {
  const query = useQuery({
    queryKey: ['slowerData'],
    queryFn: fetchSlowerData
  })
  const incrementYear = createIncrementYearMutation('slowerData', fetchSlowerData)

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    incrementYear: incrementYear.mutate
  }
}

export function useSlowDataSuspense() {
  const query = useSuspenseQuery({
    queryKey: ['slowDataSuspense'],
    queryFn: fetchSlowData,
    refetchOnMount: false
  })
  const incrementYear = createIncrementYearMutation('slowDataSuspense', fetchSlowData)

  return {
    data: query.data,
    incrementYear: incrementYear.mutate
  }
}

export function useSlowerDataSuspense() {
  const query = useSuspenseQuery({
    queryKey: ['slowerDataSuspense'],
    queryFn: fetchSlowerData,
    refetchOnMount: false
  })
  const incrementYear = createIncrementYearMutation('slowerDataSuspense', fetchSlowerData)

  return {
    data: query.data,
    incrementYear: incrementYear.mutate
  }
}

export function useSlowDataRSC() {
  const query = useSuspenseQuery({
    queryKey: ['slowDataRSC'],
    queryFn: fetchSlowData
  })
  const incrementYear = createIncrementYearMutation('slowDataRSC', fetchSlowData)

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    incrementYear: incrementYear.mutate
  }
}

export function useSlowerDataRSC() {
  const query = useSuspenseQuery({
    queryKey: ['slowerDataRSC'],
    queryFn: fetchSlowerData
  })
  const incrementYear = createIncrementYearMutation('slowerDataRSC', fetchSlowerData)

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    incrementYear: incrementYear.mutate
  }
}

export function useSlowDataPromiseProps() {
  const query = useSuspenseQuery({
    queryKey: ['slowDataPromiseProps'],
    queryFn: fetchSlowData
  })
  const incrementYear = createIncrementYearMutation('slowDataPromiseProps', fetchSlowData)

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    incrementYear: incrementYear.mutate
  }
}

export function useSlowerDataPromiseProps() {
  const query = useSuspenseQuery({
    queryKey: ['slowerDataPromiseProps'],
    queryFn: fetchSlowerData
  })
  const incrementYear = createIncrementYearMutation('slowerDataPromiseProps', fetchSlowerData)

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    incrementYear: incrementYear.mutate
  }
}
