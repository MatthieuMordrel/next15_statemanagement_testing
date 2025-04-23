import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { Suspense } from 'react'
import { WrapperSlowComponent_RQ_Suspense, WrapperSlowerComponent_RQ_Suspense } from './Wrappers'

export default function VanillaUseEffectPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>React Query - useSuspense Approach</h1>
        </div>
        <p className='text-muted-foreground'>
          Request starts on the server, and is rerun on the client. Even with refetchOnMount: false, it leads to hydration mismatches and need to be
          fixed using prefetching.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using useSuspense with independent loading states for each data fetch</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Suspense fallback={<Loading />}>
              <WrapperSlowComponent_RQ_Suspense />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <WrapperSlowerComponent_RQ_Suspense />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
