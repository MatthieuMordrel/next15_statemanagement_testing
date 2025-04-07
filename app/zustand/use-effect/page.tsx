'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { WrapperSlowComponent_Zustand_Effect, WrapperSlowerComponent_Zustand_Effect } from './Wrappers'
import { DataStoreProvider } from './provider'

export default function ZustandUseEffectPage() {
  return (
    <div className='container py-8'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-2xl font-bold mb-2'>Zustand - useEffect Approach</h1>
          <p className='text-muted-foreground'>
            Request starts on the client, not on the server. Data is managed with Zustand store and fetched using useEffect. The store is created per
            request following Next.js best practices.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Fetching Example</CardTitle>
            <CardDescription>Using useEffect with Zustand store for state management</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {/* Wrap components with DataStoreProvider to provide per-request store */}
            <DataStoreProvider>
              {/* First component with its own loading and error states */}
              <WrapperSlowComponent_Zustand_Effect />
              {/* Second component with its own loading and error states */}
              <WrapperSlowerComponent_Zustand_Effect />
            </DataStoreProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
