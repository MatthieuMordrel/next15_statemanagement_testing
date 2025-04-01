'use client'

import SlowComponent from '@/components/SlowComponent'
import SlowerComponent from '@/components/SlowerComponent'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { fetchFastData, fetchSlowData } from '@/lib/data'
import { useEffect, useState } from 'react'

export default function VanillaUseEffectPage() {
  const [fastData, setFastData] = useState<any>(null)
  const [slowData, setSlowData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [fast, slow] = await Promise.all([fetchFastData(), fetchSlowData()])
        setFastData(fast)
        setSlowData(slow)
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
                <SlowComponent />
                <SlowerComponent />
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
