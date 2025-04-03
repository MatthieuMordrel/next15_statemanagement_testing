import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { connection } from 'next/dist/server/request/connection'
import { DataProvider } from './DataProvider'

export default async function PromisePropsLayout({ children }: { children: React.ReactNode }) {
  await connection()
  // Start fetching data at the layout level
  const slowPromise = fetchSlowData()
  const slowerPromise = fetchSlowerData()

  return (
    <DataProvider slowPromise={slowPromise} slowerPromise={slowerPromise}>
      {children}
    </DataProvider>
  )
}
