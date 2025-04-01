import { Suspense, use } from 'react'

// Simulated async data fetching
async function fetchData(delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay))
  return `Data loaded after ${delay}ms`
}

function Loading() {
  return (
    <div className='p-4 bg-gray-100 rounded-lg animate-pulse'>
      <div className='h-6 bg-gray-200 rounded w-3/4 mb-2'></div>
      <div className='h-4 bg-gray-200 rounded w-1/2'></div>
    </div>
  )
}

// Async component using use hook
function NotAsyncComponent({ promise }: { promise: Promise<string> }) {
  const data = use(promise)

  return (
    <div className='p-4 bg-purple-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Async Component with use hook</h2>
      <p>{data}</p>
    </div>
  )
}

// Another async component with different timing
function AnotherNotAsyncComponent({ promise }: { promise: Promise<string> }) {
  const data = use(promise)

  return (
    <div className='p-4 bg-pink-100 rounded-lg'>
      <h2 className='text-xl font-semibold'>Another Async Component</h2>
      <p>{data}</p>
    </div>
  )
}

export default function UseHookPage() {
  // Create promises that will be used by the components
  const fastPromise = fetchData(2000)
  const slowPromise = fetchData(4000)

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Next.js Streaming with use Hook</h1>

      <div className='space-y-4'>
        {/* This component will load first */}
        <div className='p-4 bg-yellow-100 rounded-lg'>
          <h2 className='text-xl font-semibold'>Instant Component</h2>
          <p>This component loads immediately!</p>
        </div>

        {/* This component will stream in after 2 seconds */}
        <Suspense fallback={<Loading />}>
          <NotAsyncComponent promise={fastPromise} />
        </Suspense>

        {/* This component will stream in after 4 seconds */}
        <Suspense fallback={<Loading />}>
          <AnotherNotAsyncComponent promise={slowPromise} />
        </Suspense>
      </div>
    </div>
  )
}
