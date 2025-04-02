'use client'

import SlowComponent from '@/components/SlowComponent'
import SlowerComponent from '@/components/SlowerComponent'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { Data, fetchSlowData, fetchSlowerData } from '@/lib/data'
import { useEffect, useState } from 'react'

export default function VanillaUseEffectPage() {
  const [slowData, setSlowData] = useState<Data | null>(null)
  const [slowerData, setSlowerData] = useState<Data | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [slow, slower] = await Promise.all([fetchSlowData(), fetchSlowerData()])
        setSlowData(slow)
        setSlowerData(slower)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Vanilla React - useEffect Approach</h1>
          <p className='text-muted-foreground'>
            Traditional approach using useEffect with loading states. Note that we wait for all data before showing anything.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using useEffect for data fetching with a single loading state</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {loading && <Loading />}
            {error && <div className='text-red-500'>Error: {error.message}</div>}
            {!loading && !error && (
              <>
                {slowData && <SlowComponent data={slowData} />}
                {slowerData && <SlowerComponent data={slowerData} />}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
