'use client'

import SlowComponent from '@/components/data components/SlowComponent'
import SlowerComponent from '@/components/data components/SlowerComponent'
import { useData } from '@/hooks/useData'
import { Data } from '@/lib/data'
import { use } from 'react'

export function WrapperSlowComponent_Use({ promise }: { promise: Promise<Data> }) {
  const data = use(promise)
  const { state, incrementYear } = useData({ data })
  return <SlowComponent data={state} incrementYear={incrementYear} />
}

export function WrapperSlowerComponent_Use({ promise }: { promise: Promise<Data> }) {
  const data = use(promise)
  const { state, incrementYear } = useData({ data })
  return <SlowerComponent data={state} incrementYear={incrementYear} />
}
