import { Loading } from '@/components/ui/loading'
import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Suspense } from 'react'
import { WrapperSlowComponent_RQ_PromiseProps_Client, WrapperSlowerComponent_RQ_PromiseProps_Client } from './Wrappers_Client'

export async function WrapperSlowComponent_PromiseProps_RSC_Server() {
  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['slowDataPromiseProps'],
    queryFn: fetchSlowData
  })

  queryClient.prefetchQuery({
    queryKey: ['slowerDataPromiseProps'],
    queryFn: fetchSlowerData
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>
        <WrapperSlowComponent_RQ_PromiseProps_Client />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <WrapperSlowerComponent_RQ_PromiseProps_Client />
      </Suspense>
    </HydrationBoundary>
  )
}
