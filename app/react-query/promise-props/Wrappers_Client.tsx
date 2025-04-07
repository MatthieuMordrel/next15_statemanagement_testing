'use client'

import DataComponent from '@/components/data components/DataComponent'
import { useSlowDataPromiseProps, useSlowerDataPromiseProps } from '@/hooks/useSlowDataTQ'

export function WrapperSlowComponent_RQ_PromiseProps_Client() {
  //Because we use useSuspenseQuery, the data will always be loaded on the client
  const { data, incrementYear } = useSlowDataPromiseProps()
  return <DataComponent data={data} seconds={2} color='blue' incrementYear={incrementYear} />
}

export function WrapperSlowerComponent_RQ_PromiseProps_Client() {
  //Because we use useSuspenseQuery, the data will always be loaded on the client
  const { data, incrementYear } = useSlowerDataPromiseProps()
  return <DataComponent data={data} seconds={4} color='green' incrementYear={incrementYear} />
}
