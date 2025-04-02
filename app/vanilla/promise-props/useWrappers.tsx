'use client'

import SlowComponent from '@/components/data components/SlowComponent'
import SlowerComponent from '@/components/data components/SlowerComponent'
import { Data } from '@/lib/data'
import { use } from 'react'

export function DataDisplay({ promise }: { promise: Promise<Data> }) {
  // The use hook here allows the component to suspend
  const data = use(promise)
  return <SlowComponent data={data} />
}

export function SlowerDataDisplay({ promise }: { promise: Promise<Data> }) {
  // The use hook here allows the component to suspend
  const data = use(promise)
  return <SlowerComponent data={data} />
}
