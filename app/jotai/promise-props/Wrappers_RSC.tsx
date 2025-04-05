import { Loading } from '@/components/ui/loading'
import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { HydrationBoundary } from 'jotai-ssr'
import { Suspense } from 'react'
import { slowDataPromiseAtom, slowerDataPromiseAtom } from './atoms'
import { WrapperSlowComponent_Jotai_PromiseProps_Client, WrapperSlowerComponent_Jotai_PromiseProps_Client } from './Wrappers_Client'

export async function WrapperSlowComponent_Jotai_PromiseProps_Server() {
  const slowPromise = fetchSlowData()
  const slowerPromise = fetchSlowerData()

  return (
    <HydrationBoundary
      hydrateAtoms={[
        [slowDataPromiseAtom, slowPromise],
        [slowerDataPromiseAtom, slowerPromise]
      ]}>
      <Suspense fallback={<Loading />}>
        <WrapperSlowComponent_Jotai_PromiseProps_Client />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <WrapperSlowerComponent_Jotai_PromiseProps_Client />
      </Suspense>
    </HydrationBoundary>
  )
}
