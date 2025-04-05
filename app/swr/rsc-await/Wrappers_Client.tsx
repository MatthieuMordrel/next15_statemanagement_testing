'use client'

import DataComponent from '@/components/data components/DataComponent'
import { Loading } from '@/components/ui/loading'
import { useSlowDataSWR_RSC, useSlowerDataSWR_RSC } from '@/hooks/useSlowDataSWR'

export function WrapperSlowComponent_SWR_RSC_Client() {
  const { data, isLoading, error } = useSlowDataSWR_RSC()
  console.log('WrapperSlowComponent_SWR_RSC_Client', data, isLoading, error)
  return (
    <>
      {data ? (
        <DataComponent data={data} seconds={2} color='blue' />
      ) : isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className='text-red-500'>Error loading slow data: {error.message}</div>
      ) : null}
    </>
  )
}

export function WrapperSlowerComponent_SWR_RSC_Client() {
  const { data, isLoading, error } = useSlowerDataSWR_RSC()
  console.log('WrapperSlowerComponent_SWR_RSC_Client', data, isLoading, error)
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
