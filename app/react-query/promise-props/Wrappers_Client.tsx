'use client'

import { WrapperSlowComponent, WrapperSlowerComponent } from '@/app/vanilla/Wrappers'
import { Loading } from '@/components/ui/loading'
import { useSlowDataPromiseProps, useSlowerDataPromiseProps } from '@/hooks/useSlowData'
import { Suspense } from 'react'

export function WrapperSlowComponent_RQ_PromiseProps_Client() {
  const { data } = useSlowDataPromiseProps()
  return (
    <Suspense fallback={<Loading />}>
      <WrapperSlowComponent data={data} />
    </Suspense>
  )
}

export function WrapperSlowerComponent_RQ_PromiseProps_Client() {
  const { data } = useSlowerDataPromiseProps()
  return (
    <Suspense fallback={<Loading />}>
      <WrapperSlowerComponent data={data} />
    </Suspense>
  )
}
