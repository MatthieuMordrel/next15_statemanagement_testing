'use client'

import SlowComponent from '@/components/SlowComponent'
import SlowerComponent from '@/components/SlowerComponent'
import { use } from 'react'

export function DataDisplay({ promise }: { promise: Promise<any> }) {
  // The use hook here allows the component to suspend
  const data = use(promise)
  return <SlowComponent data={data} />
}

export function SlowerDataDisplay({ promise }: { promise: Promise<any> }) {
  // The use hook here allows the component to suspend
  const data = use(promise)
  return <SlowerComponent data={data} />
}
