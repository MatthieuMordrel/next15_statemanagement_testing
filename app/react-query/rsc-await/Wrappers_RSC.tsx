import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { WrapperSlowComponent_RQ_RSC_Client, WrapperSlowerComponent_RQ_RSC_Client } from './Wrappers_Client'

export async function WrapperSlowComponent_RQ_RSC_Server() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['slowDataRSC'],
    queryFn: fetchSlowData
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WrapperSlowComponent_RQ_RSC_Client />
    </HydrationBoundary>
  )
}

export async function WrapperSlowerComponent_RQ_RSC_Server() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['slowerDataRSC'],
    queryFn: fetchSlowerData
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WrapperSlowerComponent_RQ_RSC_Client />
    </HydrationBoundary>
  )
}
