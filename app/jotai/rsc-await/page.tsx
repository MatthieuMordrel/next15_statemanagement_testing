import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { Suspense } from 'react'
import { WrapperSlowComponent_Jotai_RSC_Server, WrapperSlowerComponent_Jotai_RSC_Server } from './Wrappers_RSC'

export default async function JotaiRscAwaitPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Jotai - RSC + await Approach</h1>
          <p className='text-muted-foreground'>Request is prefetched on the server, not on the client. Client should mount with the data.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using Jotai with server-side data fetching and client-side hydration</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {/* First component with its own loading and error states */}
            <Suspense fallback={<Loading />}>
              <WrapperSlowComponent_Jotai_RSC_Server />
            </Suspense>
            {/* Second component with its own loading and error states */}
            <Suspense fallback={<Loading />}>
              <WrapperSlowerComponent_Jotai_RSC_Server />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
