import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { DataProvider } from './DataProvider'

export const dynamic = 'force-dynamic'

export default async function PromisePropsLayout({ children }: { children: React.ReactNode }) {
  // Start fetching data at the layout level
  const slowPromise = fetchSlowData()
  const slowerPromise = fetchSlowerData()

  return (
    <DataProvider slowPromise={slowPromise} slowerPromise={slowerPromise}>
      {children}
    </DataProvider>
  )
}
