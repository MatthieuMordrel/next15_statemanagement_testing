import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'
import Link from 'next/link'
import { Suspense } from 'react'
import { WrapperSlowComponent_Use, WrapperSlowerComponent_Use } from '../Wrappers'

export default function SecondPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Second Page - Same Data Context</h1>
          <p className='text-muted-foreground'>This page uses the same data context from the layout.</p>
        </div>

        <div>
          <Button asChild variant='outline'>
            <Link href='/vanilla/promise-props'>Back to First Page</Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Streaming Example - Shared Data</CardTitle>
            <CardDescription>Using the same data context from the layout level</CardDescription>
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
