'use client'

import DataComponent from '@/components/data components/DataComponent'
import { useSlowDataSWR_PromiseProps, useSlowerDataSWR_PromiseProps } from '@/hooks/useSlowDataSWR'

export function WrapperSlowComponent_SWR_PromiseProps_Client() {
  const { data } = useSlowDataSWR_PromiseProps()
  return <DataComponent data={data!} seconds={2} color='blue' />
}

export function WrapperSlowerComponent_SWR_PromiseProps_Client() {
  const { data } = useSlowerDataSWR_PromiseProps()
  return <DataComponent data={data!} seconds={4} color='green' />
}
