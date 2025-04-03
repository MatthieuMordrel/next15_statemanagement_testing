'use client'

import DataComponent from '@/components/data components/DataComponent'
import { Loading } from '@/components/ui/loading'
import { useSlowData, useSlowerData } from '@/hooks/useSlowData'

export function WrapperSlowComponent_RQ_Effect() {
  const { data, isLoading, isError, error, incrementYear} = useSlowData()
  return (
    <>
      {data && <DataComponent data={data} seconds={1} color='blue' incrementYear={incrementYear} />}
      {isLoading && <Loading />}
      {isError && <div className='text-red-500'>Error loading slow data: {error?.message}</div>}
    </>
  )
}

export function WrapperSlowerComponent_RQ_Effect() {
  const { data, isLoading, isError, error, incrementYear } = useSlowerData()

  return (
    <>
      {data && <DataComponent data={data} seconds={1} color='green' incrementYear={incrementYear} />}
      {isLoading && <Loading />}
      {isError && <div className='text-red-500'>Error loading slower data: {error?.message}</div>}
    </>
  )
}
