'use client'

import DataComponent from '@/components/data components/DataComponent'
import { useDataActions, useSlowData, useSlowerData } from './provider'

// Client component for slow data
export function SlowDataComponent() {
  // Use atomic selectors to prevent unnecessary rerenders
  const slowData = useSlowData()
  const { incrementSlowYear } = useDataActions()

  // Data is already available from server
  if (!slowData) return null

  return <DataComponent data={slowData} seconds={2} color='blue' incrementYear={incrementSlowYear} />
}

// Client component for slower data
export function SlowerDataComponent() {
  // Use atomic selectors to prevent unnecessary rerenders
  const slowerData = useSlowerData()
  const { incrementSlowerYear } = useDataActions()

  // Data is already available from server
  if (!slowerData) return null

  return <DataComponent data={slowerData} seconds={4} color='green' incrementYear={incrementSlowerYear} />
}
