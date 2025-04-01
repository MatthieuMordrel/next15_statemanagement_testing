import SlowComponent from '@/components/SlowComponent'
import SlowerComponent from '@/components/SlowerComponent'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import { fetchFastData, fetchSlowData } from '@/lib/data'
import { Suspense } from 'react'

export default async function VanillaRscAwaitPage() {
  const fastData = await fetchFastData()
  const slowData = await fetchSlowData()
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
              <SlowComponent data={fastData} />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <SlowerComponent data={slowData} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
