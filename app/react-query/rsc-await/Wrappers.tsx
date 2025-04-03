'use client'

import { WrapperSlowComponent, WrapperSlowerComponent } from '@/app/vanilla/Wrappers'
import { Loading } from '@/components/ui/loading'
import { useSlowData, useSlowerData } from '@/hooks/useSlowData'

export function WrapperSlowComponent_RQ_RSC_Client() {
  const { data, isLoading, isError, error } = useSlowData()
  return (
    <>
      {data && <WrapperSlowComponent data={data} />}
      {isLoading && <Loading />}
      {isError && <div className='text-red-500'>Error loading slow data: {error?.message}</div>}
    </>
  )
}

export function WrapperSlowerComponent_RQ_RSC_Client() {
  const { data, isLoading, isError, error } = useSlowerData()
  return (
    <>
      {data && <WrapperSlowerComponent data={data} />}
      {isLoading && <Loading />}
      {isError && <div className='text-red-500'>Error loading slower data: {error?.message}</div>}
    </>
  )
}
