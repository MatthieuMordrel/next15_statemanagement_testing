'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { WrapperSlowComponent_Effect, WrapperSlowerComponent_Effect } from './Wrappers'

export default function VanillaUseEffectPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Vanilla React - useEffect Approach</h1>
          <p className='text-muted-foreground'>Independent data fetching approach where each component renders as soon as its data is available.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using useEffect with independent loading states for each data fetch</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {/* First component with its own loading and error states */}
            <WrapperSlowComponent_Effect />
            {/* Second component with its own loading and error states */}
            <WrapperSlowerComponent_Effect />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
