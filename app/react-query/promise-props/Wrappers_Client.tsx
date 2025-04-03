'use client'

import DataComponent from '@/components/data components/DataComponent'
import { useSlowDataPromiseProps, useSlowerDataPromiseProps } from '@/hooks/useSlowData'

export function WrapperSlowComponent_RQ_PromiseProps_Client() {
  const { data, incrementYear } = useSlowDataPromiseProps()
  return <DataComponent data={data} seconds={1} color='blue' incrementYear={incrementYear} />
}

export function WrapperSlowerComponent_RQ_PromiseProps_Client() {
  const { data, incrementYear } = useSlowerDataPromiseProps()
  return <DataComponent data={data} seconds={1} color='green' incrementYear={incrementYear} />
}
