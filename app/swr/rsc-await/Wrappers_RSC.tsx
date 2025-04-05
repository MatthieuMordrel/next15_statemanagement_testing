import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { SWRConfig } from 'swr'

export async function SWRProviderSlow({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fallback: {
          slowDataRSC: await fetchSlowData()
        },
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }}>
      {children}
    </SWRConfig>
  )
}

export async function SWRProviderSlower({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fallback: {
          slowerDataRSC: await fetchSlowerData()
        },
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }}>
      {children}
    </SWRConfig>
  )
}
