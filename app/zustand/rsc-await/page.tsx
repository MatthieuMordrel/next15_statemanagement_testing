import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { Suspense } from 'react'
import { SlowDataComponent, SlowerDataComponent } from './components'
import { DataStoreProvider } from './provider'

// Server component - no 'use client' directive
export default async function ZustandRscAwaitPage() {
  // Fetch data in parallel on the server
  // This is bad because it will block the rendering of the whole page, we need to use a loading.js to suspend the whole page
  // We cannot use granular Suspense boundaries because we need to pass the data to the zustand store at once
  const [slowData, slowerData] = await Promise.all([fetchSlowData(), fetchSlowerData()])

  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Zustand - RSC Await Approach</h1>
          <p className='text-muted-foreground'>
            Data is fetched on the server using React Server Components and passed to the client-side Zustand store. This approach eliminates the need
            for loading states on the client.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using RSC data fetching with Zustand store for state management</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {/* Provide server data to the store */}
            <DataStoreProvider slowData={slowData} slowerData={slowerData}>
              {/* Keeping the Suspense Boundary for illustration purposes, but they never show because we await the data above */}
              <Suspense fallback={<Loading />}>
                <SlowDataComponent />
              </Suspense>
              <Suspense fallback={<Loading />}>
                <SlowerDataComponent />
              </Suspense>
            </DataStoreProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
