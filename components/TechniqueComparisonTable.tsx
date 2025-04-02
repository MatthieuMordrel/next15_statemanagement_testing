import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const techniques = [
  {
    name: 'useEffect-based data fetching',
    dataFetching: {
      description: 'Data fetching starts on the client side after component mount',
      details: 'Triggered by useEffect hook, runs after initial render, client-side only execution'
    },

    pros: [
      'Works with any state management solution',
      'Declarative approach',
      'If data is available show it, otherwise show loading state or error',
      'Easy to implement and extensive docs',
      'No hydration issues because servers renders the loading state'
    ],
    cons: [
      'Data fetching starts on the client',
      'Risk of waterfalls with round-trips',
      'User must be identified on each request',
      'No SEO benefits',
      'Requires a re-render after the mounting'
    ]
  },
  {
    name: 'RSC await with client components',
    dataFetching: {
      description: 'Data fetching happens on the server',
      details: 'Server-side execution, automatic streaming support, built into React Server Components, can be mixed with client components'
    },

    pros: [
      'Server-side data fetching',
      'Better performance',
      'Automatic streaming',
      'Built-in error boundaries',
      'Reduced client-side JavaScript',
      'Better SEO support',
      'Automatic code splitting'
    ],
    cons: [
      'More complex setup',
      'Requires careful component splitting',
      'May need additional client-side state management',
      'Learning curve for RSC patterns',
      'May need to refactor existing components',
      'Debugging can be more challenging'
    ]
  },
  {
    name: 'Promise props with use hook',
    dataFetching: {
      description: 'Data fetching is handled through promise props and the use hook',
      details: 'Modern React pattern, works with both client and server, simpler mental model, built-in error handling'
    },

    pros: [
      'Clean data flow',
      'Good for streaming',
      'Type-safe',
      'Works well with RSC',
      'Reduces boilerplate',
      'Better error handling',
      'Simpler mental model'
    ],
    cons: [
      'Requires careful error handling',
      'May need additional state management',
      'Less flexible than other approaches',
      'Newer API, less community support',
      'May need polyfills for older browsers',
      'Limited browser support'
    ]
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
                  <div className='text-sm text-muted-foreground'>{technique.dataFetching.description}</div>
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
