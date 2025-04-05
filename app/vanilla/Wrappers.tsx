'use client'

import DataComponent from '@/components/data components/DataComponent'
import { useData } from '@/hooks/useData'
import { Data } from '@/lib/data'

export function WrapperSlowComponent({ data }: { data: Data }) {
  const { state, incrementYearState } = useData({ data })
  return <DataComponent data={state} seconds={2} color='blue' incrementYear={incrementYearState} />
}

export function WrapperSlowerComponent({ data }: { data: Data }) {
  const { state, incrementYearState } = useData({ data })
  return <DataComponent data={state} seconds={4} color='green' incrementYear={incrementYearState} />
}
