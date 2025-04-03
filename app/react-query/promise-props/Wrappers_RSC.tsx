import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { WrapperSlowComponent_RQ_RSC_Client, WrapperSlowerComponent_RQ_RSC_Client } from '../rsc-await/Wrappers_Client'

export async function WrapperSlowComponent_PromiseProps_RSC_Server() {
  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['slowDataPromiseProps'],
    queryFn: fetchSlowData
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WrapperSlowComponent_RQ_RSC_Client />
    </HydrationBoundary>
  )
}

export async function WrapperSlowerComponent_PromiseProps_RSC_Server() {
  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['slowerDataPromiseProps'],
    queryFn: fetchSlowerData
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WrapperSlowerComponent_RQ_RSC_Client />
    </HydrationBoundary>
  )
}
