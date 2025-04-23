'use client'

import DataComponent from '@/components/data components/DataComponent'
import { useSlowDataSuspense, useSlowerDataSuspense } from '@/hooks/useSlowDataTQ'

export function WrapperSlowComponent_RQ_Suspense() {
  const { data, incrementYear } = useSlowDataSuspense()
  return <DataComponent data={data} seconds={2} color='blue' incrementYear={incrementYear} />
}

export function WrapperSlowerComponent_RQ_Suspense() {
  const { data, incrementYear } = useSlowerDataSuspense()

  return <DataComponent data={data} seconds={4} color='green' incrementYear={incrementYear} />
}
