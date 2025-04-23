import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { WrapperSlowComponent_RQ_Effect, WrapperSlowerComponent_RQ_Effect } from './Wrappers'

export default function VanillaUseEffectPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>React Query - useEffect Approach</h1>
          <p className='text-muted-foreground'>Request starts on the client, not on the server. Data is cached on the client and never refetched.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using useEffect with independent loading states for each data fetch</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {/* First component with its own loading and error states */}
            <WrapperSlowComponent_RQ_Effect />
            {/* Second component with its own loading and error states */}
            <WrapperSlowerComponent_RQ_Effect />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
