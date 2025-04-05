import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { HydrationBoundary } from 'jotai-ssr'
import { slowDataAtom, slowerDataAtom } from './atoms'
import { WrapperSlowComponent_Jotai_RSC_Client, WrapperSlowerComponent_Jotai_RSC_Client } from './Wrappers_Client'

export async function WrapperSlowComponent_Jotai_RSC_Server() {
  const data = await fetchSlowData()

  return (
    <HydrationBoundary hydrateAtoms={[[slowDataAtom, data]]}>
      <WrapperSlowComponent_Jotai_RSC_Client />
    </HydrationBoundary>
  )
}

export async function WrapperSlowerComponent_Jotai_RSC_Server() {
  const data = await fetchSlowerData()

  return (
    <HydrationBoundary hydrateAtoms={[[slowerDataAtom, data]]}>
      <WrapperSlowerComponent_Jotai_RSC_Client />
    </HydrationBoundary>
  )
}
