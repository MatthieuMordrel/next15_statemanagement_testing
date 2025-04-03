'use client'

import { Loading } from '@/components/ui/loading'
import { Data, fetchSlowData, fetchSlowerData } from '@/lib/data'
import { useEffect, useState } from 'react'
import { WrapperSlowComponent, WrapperSlowerComponent } from '../Wrappers'

export function WrapperSlowComponent_Effect() {
  const [slowData, setSlowData] = useState<Data | null>(null)
  const [loadingSlowData, setLoadingSlowData] = useState(true)
  const [slowError, setSlowError] = useState<Error | null>(null)

  useEffect(() => {
    // Handle slow data fetch
    const loadSlowData = async () => {
      try {
        const data = await fetchSlowData()
        setSlowData(data)
      } catch (err) {
        setSlowError(err as Error)
      } finally {
        setLoadingSlowData(false)
      }
    }
    loadSlowData()
  }, [])
  return (
    <>
      {slowData && <WrapperSlowComponent data={slowData} />}
      {loadingSlowData && <Loading />}
      {slowError && <div className='text-red-500'>Error loading slow data: {slowError.message}</div>}
    </>
  )
}

export function WrapperSlowerComponent_Effect() {
  const [slowerData, setSlowerData] = useState<Data | null>(null)
  const [loadingSlowerData, setLoadingSlowerData] = useState(true)
  const [slowerError, setSlowerError] = useState<Error | null>(null)

  useEffect(() => {
    // Handle slower data fetch
    const loadSlowerData = async () => {
      try {
        const data = await fetchSlowerData()
        setSlowerData(data)
      } catch (err) {
        setSlowerError(err as Error)
      } finally {
        setLoadingSlowerData(false)
      }
    }
    loadSlowerData()
  }, [])

  return (
    <>
      {slowerData && <WrapperSlowerComponent data={slowerData} />}
      {loadingSlowerData && <Loading />}
      {slowerError && <div className='text-red-500'>Error loading slower data: {slowerError.message}</div>}
    </>
  )
}
