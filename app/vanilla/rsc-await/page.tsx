import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { Suspense } from 'react'
import { WrapperSlowComponent_RSC, WrapperSlowerComponent_RSC } from '../Wrappers'

async function SlowWrapper() {
  // The await here allows the component to suspend
  const data = await fetchSlowData()
  return <WrapperSlowComponent_RSC data={data} />
}

async function SlowerWrapper() {
  // The await here allows the component to suspend
  const data = await fetchSlowerData()
  return <WrapperSlowerComponent_RSC data={data} />
}

export default function VanillaRscAwaitPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Vanilla React - RSC Await Approach</h1>
          <p className='text-muted-foreground'>Using React Server Components with await for streaming. Each component streams independently.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Streaming Example</CardTitle>
            <CardDescription>Using RSC with await for independent streaming of components</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Suspense fallback={<Loading />}>
              <SlowWrapper />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <SlowerWrapper />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
