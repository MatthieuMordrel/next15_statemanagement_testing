// Simulated data fetching with delay
export async function fetchData(delay: number = 1000) {
  await new Promise(resolve => setTimeout(resolve, delay))
  return {
    id: Math.random().toString(36).substring(7),
    title: `Data fetched after ${delay}ms`,
    timestamp: new Date().toISOString()
  }
}

// Simulated API calls that return our slow components
export async function fetchSlowData() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return {
    id: 'fast',
    title: 'Fast Data',
    timestamp: new Date().toISOString()
  }
}

export async function fetchSlowerData() {
  await new Promise(resolve => setTimeout(resolve, 4000))
  return {
    id: 'slow',
    title: 'Slow Data',
    timestamp: new Date().toISOString()
  }
}

// Simulated error data fetching
export async function fetchErrorData() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  throw new Error('Failed to fetch data')
}
