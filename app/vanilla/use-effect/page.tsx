'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { Data, fetchSlowData, fetchSlowerData } from '@/lib/data'
import { useEffect, useState } from 'react'
import { WrapperSlowComponent_RSC, WrapperSlowerComponent_RSC } from '../Wrappers'

export default function VanillaUseEffectPage() {
  // Separate states for each data fetch
  const [slowData, setSlowData] = useState<Data | null>(null)
  const [slowerData, setSlowerData] = useState<Data | null>(null)
  const [loadingSlowData, setLoadingSlowData] = useState(true)
  const [loadingSlowerData, setLoadingSlowerData] = useState(true)
  const [slowError, setSlowError] = useState<Error | null>(null)
  const [slowerError, setSlowerError] = useState<Error | null>(null)

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

    // Kick off both fetches independently
    loadSlowData()
    loadSlowerData()
  }, [])

  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Vanilla React - useEffect Approach</h1>
          <p className='text-muted-foreground'>Independent data fetching approach where each component renders as soon as its data is available.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using useEffect with independent loading states for each data fetch</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {/* First component with its own loading and error states */}
            <div>
              {loadingSlowData && <Loading />}
              {slowError && <div className='text-red-500'>Error loading slow data: {slowError.message}</div>}
              {!loadingSlowData && !slowError && slowData && <WrapperSlowComponent_RSC data={slowData} />}
            </div>

            {/* Second component with its own loading and error states */}
            <div>
              {loadingSlowerData && <Loading />}
              {slowerError && <div className='text-red-500'>Error loading slower data: {slowerError.message}</div>}
              {!loadingSlowerData && !slowerError && slowerData && <WrapperSlowerComponent_RSC data={slowerData} />}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
