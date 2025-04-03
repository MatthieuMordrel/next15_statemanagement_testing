import { Data, fetchSlowData, fetchSlowerData } from '@/lib/data'
import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'

// Reusable incrementYear mutation factory
function createIncrementYearMutation(queryKey: string, fetchFn: () => Promise<any>) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: [`incrementYear-${queryKey}`],
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [queryKey] })
      const data = queryClient.getQueryData([queryKey]) as Data
      queryClient.setQueryData([queryKey], {
        ...data,
        timestamp: (new Date(data.timestamp).getFullYear() + 1).toString() + ' (will revert to server state when optimistic update finishes)'
      })
      return data
    },
    mutationFn: async () => {
      const data = await fetchFn()
      return data
    },
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData([queryKey], data)
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
