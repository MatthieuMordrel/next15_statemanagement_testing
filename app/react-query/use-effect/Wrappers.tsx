'use client'

import DataComponent from '@/components/data components/DataComponent'
import { Loading } from '@/components/ui/loading'
import { useSlowData, useSlowerData } from '@/hooks/useSlowDataTQ'

export function WrapperSlowComponent_RQ_Effect() {
  const { data, isLoading, isError, error, incrementYear } = useSlowData()
  return (
    <>
      {data ? (
        <DataComponent data={data} seconds={2} color='blue' incrementYear={incrementYear} />
      ) : isLoading ? (
        <Loading />
      ) : isError ? (
        <div className='text-red-500'>Error loading slow data: {error?.message}</div>
      ) : null}
    </>
  )
}

export function WrapperSlowerComponent_RQ_Effect() {
  const { data, isLoading, isError, error, incrementYear } = useSlowerData()

  return (
    <>
      {data ? (
        <DataComponent data={data} seconds={4} color='green' incrementYear={incrementYear} />
      ) : isLoading ? (
        <Loading />
      ) : isError ? (
        <div className='text-red-500'>Error loading slower data: {error?.message}</div>
      ) : null}
    </>
  )
}
