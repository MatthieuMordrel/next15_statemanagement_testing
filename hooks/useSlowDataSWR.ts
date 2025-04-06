import { Data, fetchSlowData, fetchSlowerData, incrementYear } from '@/lib/data'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

const SWR_OPTIONS = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false
} as const

const SWR_RSC_OPTIONS = {
  ...SWR_OPTIONS,
  revalidateOnMount: false
} as const

const MUTATION_OPTIONS = {
  populateCache: true,
  revalidate: false,
  rollbackOnError: true
} as const

// Helper type for optimistic data function
type OptimisticDataFunction = (currentData?: Data) => Data

// Create optimistic data function that uses data from the SWR query
const createOptimisticDataFn = (currentData: Data | undefined): OptimisticDataFunction => {
  return (cacheData?: Data) => {
    // If we have cache data, increment its year
    if (cacheData) return incrementYear(cacheData)
    // Otherwise, if we have current data from SWR, increment that
    if (currentData) return incrementYear(currentData)
    // Fallback to a safe default (this should never happen in practice)
    return { id: 'temp', title: 'Temporary Data', timestamp: new Date().toISOString() }
  }
}

// Regular data fetching with SWR
export function useSlowDataSWR() {
  const { data, isLoading, error } = useSWR('slowData', fetchSlowData, SWR_OPTIONS)

  const { trigger, isMutating } = useSWRMutation('slowData', fetchSlowData, {
    ...MUTATION_OPTIONS,
    optimisticData: createOptimisticDataFn(data)
  })

  return {
    data,
    isLoading,
    error,
    incrementYear: trigger,
    isMutating
  }
}

export function useSlowerDataSWR() {
  const { data, isLoading, error } = useSWR('slowerData', fetchSlowerData, SWR_OPTIONS)

  const { trigger, isMutating } = useSWRMutation('slowerData', fetchSlowerData, {
    ...MUTATION_OPTIONS,
    optimisticData: createOptimisticDataFn(data)
  })

  return {
    data,
    isLoading,
    error,
    incrementYear: trigger,
    isMutating
  }
}

// RSC versions of the hooks that use SWRConfig's fallback data
export function useSlowDataSWR_RSC() {
  const { data, isLoading, error } = useSWR('slowDataRSC', fetchSlowData, SWR_RSC_OPTIONS)

  const { trigger, isMutating } = useSWRMutation('slowDataRSC', fetchSlowData, {
    ...MUTATION_OPTIONS,
    optimisticData: createOptimisticDataFn(data)
  })

  return {
    data,
    isLoading,
    error,
    incrementYear: trigger,
    isMutating
  }
}

export function useSlowerDataSWR_RSC() {
  const { data, isLoading, error } = useSWR('slowerDataRSC', fetchSlowerData, SWR_RSC_OPTIONS)

  const { trigger, isMutating } = useSWRMutation('slowerDataRSC', fetchSlowerData, {
    ...MUTATION_OPTIONS,
    optimisticData: createOptimisticDataFn(data)
  })

  return {
    data,
    isLoading,
    error,
    incrementYear: trigger,
    isMutating
  }
}

// Promise props versions of the hooks
export function useSlowDataSWR_PromiseProps() {
  const { data, isLoading, error } = useSWR('slowDataPromiseProps', fetchSlowData, SWR_RSC_OPTIONS)

  const { trigger, isMutating } = useSWRMutation('slowDataPromiseProps', fetchSlowData, {
    ...MUTATION_OPTIONS,
    optimisticData: createOptimisticDataFn(data)
  })

  return {
    data,
    isLoading,
    error,
    incrementYear: trigger,
    isMutating
  }
}

export function useSlowerDataSWR_PromiseProps() {
  const { data, isLoading, error } = useSWR('slowerDataPromiseProps', fetchSlowerData, SWR_RSC_OPTIONS)

  const { trigger, isMutating } = useSWRMutation('slowerDataPromiseProps', fetchSlowerData, {
    ...MUTATION_OPTIONS,
    optimisticData: createOptimisticDataFn(data)
  })

  return {
    data,
    isLoading,
    error,
    incrementYear: trigger,
    isMutating
  }
}
