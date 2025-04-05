import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import useSWR from 'swr'

export function useSlowDataSWR() {
  const { data, isLoading, error } = useSWR('slowData', fetchSlowData, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  return {
    data,
    isLoading,
    error
  }
}

export function useSlowerDataSWR() {
  const { data, isLoading, error } = useSWR('slowerData', fetchSlowerData, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  return {
    data,
    isLoading,
    error
  }
}

// RSC versions of the hooks that use SWRConfig's fallback data
export function useSlowDataSWR_RSC() {
  const { data, isLoading, error } = useSWR('slowDataRSC', fetchSlowData, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false
  })

  return {
    data,
    isLoading,
    error
  }
}

export function useSlowerDataSWR_RSC() {
  const { data, isLoading, error } = useSWR('slowerDataRSC', fetchSlowerData, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false
  })

  return {
    data,
    isLoading,
    error
  }
}

// Promise props versions of the hooks
export function useSlowDataSWR_PromiseProps() {
  const { data, isLoading, error } = useSWR('slowDataPromiseProps', fetchSlowData, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false
  })

  return {
    data,
    isLoading,
    error
  }
}

export function useSlowerDataSWR_PromiseProps() {
  const { data, isLoading, error } = useSWR('slowerDataPromiseProps', fetchSlowerData, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false
  })

  return {
    data,
    isLoading,
    error
  }
}
