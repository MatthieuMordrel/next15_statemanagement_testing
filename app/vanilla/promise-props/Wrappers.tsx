'use client'

import DataComponent from '@/components/data components/DataComponent'
import { useData } from '@/hooks/useData'
import { use } from 'react'
import { useDataContext } from './DataProvider'

export function WrapperSlowComponent_Use() {
  const { slowPromise } = useDataContext()
  const data = use(slowPromise)
  const { state, incrementYearState } = useData({ data })
  return <DataComponent data={state} seconds={2} color='blue' incrementYear={incrementYearState} />
}

export function WrapperSlowerComponent_Use() {
  const { slowerPromise } = useDataContext()
  const data = use(slowerPromise)
  const { state, incrementYearState } = useData({ data })
  return <DataComponent data={state} seconds={4} color='green' incrementYear={incrementYearState} />
}
