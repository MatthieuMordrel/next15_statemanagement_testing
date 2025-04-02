'use client'

import SlowComponent from '@/components/data components/SlowComponent'
import SlowerComponent from '@/components/data components/SlowerComponent'
import { useData } from '@/hooks/useData'
import { Data } from '@/lib/data'

export function WrapperSlowComponent_RSC({ data }: { data: Data }) {
  const { state, incrementYear } = useData({ data })
  return <SlowComponent data={state} incrementYear={incrementYear} />
}

export function WrapperSlowerComponent_RSC({ data }: { data: Data }) {
  const { state, incrementYear } = useData({ data })
  return <SlowerComponent data={state} incrementYear={incrementYear} />
}
