import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { connection } from 'next/dist/server/request/connection'
import { WrapperSlowComponent_PromiseProps_RSC_Server } from './Wrappers_RSC'

export default async function RSC_Await_Page() {
  await connection()
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>React Query - Promise Props Approach</h1>
          <p className='text-muted-foreground'>Promise is passed to the client, we don&apos;t need to await the RSC</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using useEffect with independent loading states for each data fetch</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <WrapperSlowComponent_PromiseProps_RSC_Server />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
