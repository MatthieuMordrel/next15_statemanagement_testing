export type Data = {
  id: string
  title: string
  timestamp: string
}

// Simulated data fetching with delay
export function fetchDataOptimistic(delay: number = 1000): Data {
  return {
    id: Math.random().toString(36).substring(7),
    title: `Data fetched after ${delay}ms`,
    timestamp: new Date().toISOString()
  }
}

export async function fetchSlowData(): Promise<Data> {
  // Use absolute URL with the base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/dummyDataSlow`, { cache: 'no-store', method: 'GET', headers: { 'Content-Type': 'application/json' } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = (await res.json()) as Data
  return data
}

export async function fetchSlowerData(): Promise<Data> {
  // Use absolute URL with the base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/dummyDataSlower`, { cache: 'no-store', method: 'GET', headers: { 'Content-Type': 'application/json' } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = (await res.json()) as Data
  return data
}

// Simulated error data fetching
export async function fetchErrorData(): Promise<Data> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  throw new Error('Failed to fetch data')
}
