import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { Suspense } from 'react'
import { WrapperSlowComponent_RQ_RSC_Server, WrapperSlowerComponent_RQ_RSC_Server } from './Wrappers_RSC'

export default async function RSC_Await_Page() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>React Query - RSC + await Approach</h1>
          <p className='text-muted-foreground'>
            Request is prefetched on the server every navigation, not on the client. Client mount with the data but server component always suspend.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using useEffect with independent loading states for each data fetch</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {/* First component with its own loading and error states */}
            <Suspense fallback={<Loading />}>
              <WrapperSlowComponent_RQ_RSC_Server />
            </Suspense>
            {/* Second component with its own loading and error states */}
            <Suspense fallback={<Loading />}>
              <WrapperSlowerComponent_RQ_RSC_Server />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
