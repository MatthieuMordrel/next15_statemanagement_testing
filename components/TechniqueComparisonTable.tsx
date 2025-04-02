import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const techniques = [
  {
    name: 'useEffect-based data fetching (no Suspense/Streaming)',
    dataFetching: {
      start: 'Data fetching starts on the client side after component mount',
      details: 'Triggered by useEffect hook, runs after initial render, client calls the API, which calls the database'
    },

    pros: [
      'Works with any state management solution',
      'Declarative approach',
      'If data is available show it, otherwise show loading state or error',
      'Components are self-contained, no props needed',
      'No hydration issues because servers renders the loading state',
      'Data Fetching and Caching happen on the client',
      'Easy to implement and extensive docs'
    ],
    cons: [
      'Data fetching starts on the client',
      'Need to pass by the server to get the data',
      'Risk of waterfalls with round-trips',
      'User must be identified on each request',
      'No SEO benefits',
      'Requires a re-render after the mounting'
    ]
  },
  {
    name: 'RSC await with client components',
    dataFetching: {
      start: 'Data fetching in a parent wrapper RSC',
      details: 'Triggered after the http request, blocks the rendering of the RSCs until their data is fetched'
    },

    pros: [
      'SEO benefits thanks to incremental html generation',
      'Database can be called directly, no need for additional endpoints',
      'No rerender after mounting',
      'All independant data fetches can start in parallel',
      'Integrate well with Suspense to show instant loading state',
      'Integrate with Error Boundaries for better error handling',
      'Theoretical better TTI thanks to selective hydration'
    ],
    cons: [
      'Less declarative approach (Suspense and Error Boundaries)',
      'Need to pass props around to get the data',
      'Or use a provider that need to be initalized with each query',
      //Because the server doesn't know what is cached on the client, it will always try to fetch the data again and hydrate the cache/client state
      //This is very different from CSR/SPA where the server is only called when needed based on client needs
      'Caching is difficult to manage, esp. on navigation',
      "Server doesn't know what is cached on client",
      'Extremely hard to integrate (properly) with state management systems',
      'Hydration always has to be considered',
      //Only fetch opt out of the SSG, for the others we need to use connection or force-dynamic as route config
      //With "use cache" this is probably simpler
      'Non-fetch must be explicitely specified to avoid SSG',
      //If we don't wrap the client component in an RSC, we cannot sync the server state on the server and use hooks
      'Client Components must be wrapped in an RSC itself wrapped in a Suspense',
      // If we do multiple fetch calls in the same RSC, the suspense boundary only resolve when the last fetch call is resolved
      'Each wrapper RSC must be unique to the fetching they are doing optimally',
      'Poor documentation'
    ]
  },
  {
    name: 'Promise props with use hook',
    dataFetching: {
      start: 'Data fetching starts in any parent RSC',
      details: 'Triggered after the http request, blocks the rendering of the client components fetching data'
    },

    pros: [
      'Same benefits as with RSC',
      'No need to wrap client components in RSC, use() can be used on client',
      'Directly suspend the client component, not the RSC'
    ],
    cons: ['Client components need to accept a promise as props', 'Hydration always has to be considered', 'Poor documentation']
  }
]

export function TechniqueComparisonTable() {
  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[200px]'>Technique</TableHead>
            <TableHead className='w-[250px]'>Data Fetching</TableHead>
            <TableHead className='w-[300px]'>Pros</TableHead>
            <TableHead className='w-[300px]'>Cons</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {techniques.map(technique => (
            <TableRow key={technique.name}>
              <TableCell className='font-medium whitespace-normal'>
                <div className='space-y-1'>
                  <div>{technique.name}</div>
                </div>
              </TableCell>
              <TableCell className='whitespace-normal'>
                <div className='space-y-2'>
                  <div className='text-sm text-muted-foreground'>{technique.dataFetching.start}</div>
                  <div className='text-sm'>{technique.dataFetching.details}</div>
                </div>
              </TableCell>

              <TableCell>
                <ul className='list-disc list-inside space-y-1 text-sm'>
                  {technique.pros.map((pro, index) => (
                    <li key={index} className='whitespace-nowrap'>
                      {pro}
                    </li>
                  ))}
                </ul>
              </TableCell>
              <TableCell>
                <ul className='list-disc list-inside space-y-1 text-sm'>
                  {technique.cons.map((con, index) => (
                    <li key={index} className='whitespace-nowrap'>
                      {con}
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
