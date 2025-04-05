import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const stateManagers = [
  {
    name: 'Vanilla React',
    techniques: [
      {
        name: 'useEffect-based data fetching',
        pros: ['Built into React', 'Easy to understand for beginners', 'No additional dependencies'],
        cons: [
          'Boilerplate',
          'Manual cache management',
          'No built-in loading/error states',
          'Potential for race conditions',
          'No automatic background updates'
        ]
      },
      {
        name: 'RSC await with client components',
        pros: ['Simplest approach'],
        cons: ['Data is fixed at request time', 'Need to be passed through props', "It's never enough"]
      },
      {
        name: 'Promise props with use hook',
        pros: [''],
        cons: ['Requires using context for DI = boilerplate/provider hell', 'No caching on the client side']
      }
    ]
  },
  {
    name: 'Jotai',
    techniques: [
      {
        name: 'useEffect-based data fetching',
        pros: [''],
        cons: ['']
      },
      {
        name: 'RSC await with client components',
        pros: [''],
        cons: ['']
      },
      {
        name: 'Promise props with use hook',
        pros: [''],
        cons: ['']
      }
    ]
  },
  {
    name: 'Zustand',
    techniques: [
      {
        name: 'useEffect-based data fetching',
        pros: [''],
        cons: ['']
      },
      {
        name: 'RSC await with client components',
        pros: [''],
        cons: ['']
      },
      {
        name: 'Promise props with use hook',
        pros: [''],
        cons: ['']
      }
    ]
  },
  {
    name: 'React Query',
    techniques: [
      {
        name: 'Standard useQuery approach',
        pros: ['Declarative Approach', 'Simple mental model, all fetches happen on client', 'No boilerplate', 'Fetch where you need'],
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
        name: 'Dehydrating data from the server',
        pros: ['Fast first load', 'Less Waterfalls', 'SEO', 'DB can be called directly? (to confirm)', 'No rerender after mounting'],
        cons: [
          'Less declarative approach (Suspense and Error Boundaries)',
          'Need to use a provider & RSC wrapper for each query ideally',
          "Server doesn't know what is cached on client",
          'Need for serialization/deserialization of the data',
          'Non-fetch must be explicitely specified to avoid SSG',
          'Client Components must be wrapped in an RSC itself wrapped in a Suspense'
        ]
      },
      {
        name: 'Dehydrating queries from the server',
        pros: [
          'All RSC benefits',
          'queryCache decides what to use, only the query is passed from server',
          'Directly suspends the client component, not the RSC',
          'Multiple queries can be passed through a single HydrationBoundary'
        ],
        cons: [
          'Less declarative approach (Suspense and Error Boundaries)',
          'Need for serialization/deserialization of the data',
          'Non-fetch must be explicitely specified to avoid SSG in Next.js',
          'Require using useSuspenseQuery hook (tbh not a con)',
          "Probably can't fetch directly from the db (to confirm)"
        ]
      }
    ]
  },
  {
    name: 'SWR',
    techniques: [
      {
        name: 'useEffect-based data fetching',
        pros: [''],
        cons: ['']
      },
      {
        name: 'RSC await with client components',
        pros: [''],
        cons: ['']
      },
      {
        name: 'Promise props with use hook',
        pros: [''],
        cons: ['']
      }
    ]
  }
]

export function ComparisonTable() {
  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>State Manager</TableHead>
            <TableHead>Technique</TableHead>
            <TableHead>Pros</TableHead>
            <TableHead>Cons</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stateManagers.map(manager =>
            manager.techniques.map(technique => (
              <TableRow key={`${manager.name}-${technique.name}`}>
                <TableCell className='font-medium'>{manager.name}</TableCell>
                <TableCell>{technique.name}</TableCell>
                <TableCell>
                  <ul className='list-disc list-inside space-y-1'>
                    {technique.pros.map((pro, index) => (
                      <li key={index} className='text-sm'>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul className='list-disc list-inside space-y-1'>
                    {technique.cons.map((con, index) => (
                      <li key={index} className='text-sm'>
                        {con}
                      </li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
