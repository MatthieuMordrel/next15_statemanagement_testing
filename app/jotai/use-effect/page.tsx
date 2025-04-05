'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { WrapperSlowComponent_Jotai_Effect, WrapperSlowerComponent_Jotai_Effect } from './Wrappers'

export default function JotaiUseEffectPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Jotai - useEffect Approach</h1>
          <p className='text-muted-foreground'>
            Request starts on the client, not on the server. Data is managed with Jotai atoms and fetched using useEffect.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using useEffect with Jotai atoms for state management</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {/* First component with its own loading and error states */}
            <WrapperSlowComponent_Jotai_Effect />
            {/* Second component with its own loading and error states */}
            <WrapperSlowerComponent_Jotai_Effect />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
