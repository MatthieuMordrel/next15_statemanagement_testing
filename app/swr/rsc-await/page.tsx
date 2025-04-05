import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { Suspense } from 'react'
import { WrapperSlowComponent_SWR_RSC_Client, WrapperSlowerComponent_SWR_RSC_Client } from './Wrappers_Client'
import { SWRProviderSlow, SWRProviderSlower } from './Wrappers_RSC'

export default function SwrRscAwaitPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>SWR - RSC + SWRConfig Approach</h1>
          <p className='text-muted-foreground'>
            Request is prefetched on the server using SWRConfig, not on the client. Client should mount with the data.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using SWRConfig with fallback data for server-side prefetching</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Suspense fallback={<Loading />}>
              <SWRProviderSlow>
                <WrapperSlowComponent_SWR_RSC_Client />
              </SWRProviderSlow>
            </Suspense>

            <Suspense fallback={<Loading />}>
              <SWRProviderSlower>
                <WrapperSlowerComponent_SWR_RSC_Client />
              </SWRProviderSlower>
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
