import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const techniques = [
  {
    name: 'useEffect-based data fetching',
    dataFetching: {
      start: 'Data fetching starts on the client side after component mount',
      details: 'Triggered by useEffect hook, runs after initial render, client calls the API, which calls the database'
    },

    pros: [
      'Works with any state management solution',
      'Declarative approach',
      'If data is available show it, otherwise show loading state or error',
      'Components can just consume a custom hook, no props needed',
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
      start: 'Data fetching starts on the server',
      details: 'Triggered after the first request, only blocks the rendering of the data-reliant components until the data is fetched'
    },

    pros: [
      'SEO benefits thanks to incremental html generation',
      'Database can be called directly, no need for additional endpoints',
      'No rerender after mounting',
      'All independant data fetches can start in parallel',
      'Integrate well with Suspense to show instant loading state',
      'Integrate with Error Boundaries for better error handling'
    ],
    cons: [
      'Much less declarative approach (Suspense and Error Boundaries)',
      'Need to pass props around to get the data',
      'Caching is difficult to manage, esp. on navigation',
      "Server doesn't know what is cached on client",
      'Extremely hard to integrate (properly) with state management systems',
      'Hydration always has to be considered',
      'Dynamic non-fetch must be explicitely specified',
      'Poor documentation'
    ]
  },
  {
    name: 'Promise props with use hook',
    dataFetching: {
      start: 'Data fetching starts',
      details: 'Modern React pattern, works with both client and server, simpler mental model, built-in error handling'
    },

    pros: ['Clean data flow'],
    cons: ['Promise must be passed around through props', 'Hydration always has to be considered', 'Poor documentation']
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
