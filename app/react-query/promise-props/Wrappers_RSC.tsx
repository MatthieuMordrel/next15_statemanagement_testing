import { Loading } from '@/components/ui/loading'
import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { getQueryClient } from '@/lib/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { WrapperSlowComponent_RQ_PromiseProps_Client, WrapperSlowerComponent_RQ_PromiseProps_Client } from './Wrappers_Client'

export async function WrapperSlowComponent_PromiseProps_RSC_Server() {
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    queryKey: ['slowDataPromiseProps'],
    queryFn: fetchSlowData
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>
        <WrapperSlowComponent_RQ_PromiseProps_Client />
      </Suspense>
    </HydrationBoundary>
  )
}

export async function WrapperSlowerComponent_PromiseProps_RSC_Server() {
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    queryKey: ['slowerDataPromiseProps'],
    queryFn: fetchSlowerData
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>
        <WrapperSlowerComponent_RQ_PromiseProps_Client />
      </Suspense>
    </HydrationBoundary>
  )
}
