'use client'

import DataComponent from '@/components/data components/DataComponent'
import { Loading } from '@/components/ui/loading'
import { useSlowDataSWR, useSlowerDataSWR } from '@/hooks/useSlowDataSWR'

export function WrapperSlowComponent_SWR_Effect() {
  const { data, isLoading, error } = useSlowDataSWR()
  return (
    <>
      {data ? (
        <DataComponent data={data} seconds={2} color='blue' />
      ) : isLoading ? (
        <Loading />
      ) : error ? (
        <div className='text-red-500'>Error loading slow data: {error.message}</div>
      ) : null}
    </>
  )
}

export function WrapperSlowerComponent_SWR_Effect() {
  const { data, isLoading, error } = useSlowerDataSWR()
  return (
    <>
      {data ? (
        <DataComponent data={data} seconds={4} color='green' />
      ) : isLoading ? (
        <Loading />
      ) : error ? (
        <div className='text-red-500'>Error loading slower data: {error.message}</div>
      ) : null}
    </>
  )
}
