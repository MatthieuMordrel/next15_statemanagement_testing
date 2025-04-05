import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { WrapperSlowComponent_Jotai_PromiseProps_Server } from './Wrappers_RSC'

export default async function JotaiPromisePropsPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Jotai - Promise Props Approach</h1>
          <p className='text-muted-foreground'>Requests are started on the server and passed as promises to the client.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>
              Using Jotai with promise-based data fetching - <span className='text-red-500'>Incrementing the year doesn&apos;t work</span>
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <WrapperSlowComponent_Jotai_PromiseProps_Server />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
