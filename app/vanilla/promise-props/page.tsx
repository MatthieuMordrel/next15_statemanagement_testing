'use client'

import { ConsumePromiseComponent } from '@/components/ConsumePromiseComponent'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { fetchFastData, fetchSlowData } from '@/lib/data'
import { Suspense } from 'react'

export default function VanillaPromisePropsPage() {
  const fastPromise = fetchFastData()
  const slowPromise = fetchSlowData()

  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Vanilla React - Promise Props Approach</h1>
          <p className='text-muted-foreground'>Using the use hook with promise props for streaming. Each component handles its own promise.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Streaming Example</CardTitle>
            <CardDescription>Using the use hook with promise props for independent streaming</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Suspense fallback={<Loading />}>
              <ConsumePromiseComponent promise={fastPromise} />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <ConsumePromiseComponent promise={slowPromise} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
