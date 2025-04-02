'use client'

import SlowComponent from '@/components/data components/SlowComponent'
import SlowerComponent from '@/components/data components/SlowerComponent'
import { useData } from '@/hooks/useData'
import { use } from 'react'
import { useDataContext } from './DataProvider'

export function WrapperSlowComponent_Use() {
  const { slowPromise } = useDataContext()
  const data = use(slowPromise)
  const { state, incrementYear } = useData({ data })
  return <SlowComponent data={state} incrementYear={incrementYear} />
}

export function WrapperSlowerComponent_Use() {
  const { slowerPromise } = useDataContext()
  const data = use(slowerPromise)
  const { state, incrementYear } = useData({ data })
  return <SlowerComponent data={state} incrementYear={incrementYear} />
}
