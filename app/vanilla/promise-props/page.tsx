import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { Suspense } from 'react'
import { WrapperSlowComponent_Use, WrapperSlowerComponent_Use } from './Wrappers'

export default function VanillaPromisePropsPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Vanilla React - Promise Props Approach</h1>
          <p className='text-muted-foreground'>Using the use hook with promise props for streaming. Each component streams independently.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Streaming Example</CardTitle>
            <CardDescription>Using the use hook with promise props for independent streaming</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Suspense fallback={<Loading />}>
              <WrapperSlowComponent_Use />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <WrapperSlowerComponent_Use />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
