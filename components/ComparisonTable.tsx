import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const stateManagers = [
  {
    name: 'Vanilla React',
    techniques: [
      {
        name: 'useEffect-based data fetching',
        pros: ['Simple and straightforward implementation', 'Built into React', 'Easy to understand for beginners', 'No additional dependencies'],
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
        pros: ['Server-side data fetching', 'Better performance', 'Automatic streaming', 'Built-in error boundaries'],
        cons: ['More complex setup', 'Requires careful component splitting', 'May need additional client-side state management']
      },
      {
        name: 'Promise props with use hook',
        pros: ['Simple mental model'],
        cons: ['Requires using context for DI = boilerplate/provider hell', 'No caching on the client side']
      }
    ]
  },
  {
    name: 'Jotai',
    techniques: [
      {
        name: 'useEffect-based data fetching',
        pros: ['Atomic state management', 'Great for derived state', 'Simple API', 'Good TypeScript support'],
        cons: ['May be overkill for simple apps', 'Learning curve for complex state', 'Manual cache management']
      },
      {
        name: 'RSC await with client components',
        pros: ['Seamless server/client integration', 'Good performance', 'Type-safe', 'Atomic updates'],
        cons: ['More complex setup', 'May need additional configuration', 'Learning curve for RSC patterns']
      },
      {
        name: 'Promise props with use hook',
        pros: ['Clean integration with RSC', 'Type-safe', 'Good for streaming', 'Atomic updates'],
        cons: ['Requires careful error handling', 'May need additional setup', 'Less flexible than other approaches']
      }
    ]
  },
  {
    name: 'Zustand',
    techniques: [
      {
        name: 'useEffect-based data fetching',
        pros: ['Simple API', 'Great performance', 'Small bundle size', 'Easy to test'],
        cons: ['Manual cache management', 'No built-in loading states', 'May need middleware for complex cases']
      },
      {
        name: 'RSC await with client components',
        pros: ['Good performance', 'Simple integration', 'Type-safe', 'Easy to test'],
        cons: ['May need additional setup', 'Less RSC-specific features', 'Manual streaming setup']
      },
      {
        name: 'Promise props with use hook',
        pros: ['Clean integration', 'Type-safe', 'Good performance', 'Simple API'],
        cons: ['Manual error handling', 'Less RSC-specific features', 'May need additional setup']
      }
    ]
  },
  {
    name: 'React Query',
    techniques: [
      {
        name: 'useEffect-based data fetching',
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
        name: 'RSC await with client components',
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
        name: 'Promise props with use hook',
        pros: [
          'All RSC benefits',
          'queryCache decides what to use, only the query is passed from server',
          'Directly suspense the client component, not the RSC'
        ],
        cons: ['']
      }
    ]
  },
  {
    name: 'SWR',
    techniques: [
      {
        name: 'useEffect-based data fetching',
        pros: ['Simple API', 'Built-in cache', 'Fast page navigation', 'Real-time updates'],
        cons: ['Less feature-rich than React Query', 'May need additional setup', 'Less TypeScript support']
      },
      {
        name: 'RSC await with client components',
        pros: ['Good RSC support', 'Simple API', 'Fast page navigation', 'Real-time updates'],
        cons: ['Less RSC-specific features', 'May need additional setup', 'Less TypeScript support']
      },
      {
        name: 'Promise props with use hook',
        pros: ['Clean RSC integration', 'Simple API', 'Fast page navigation', 'Real-time updates'],
        cons: ['Less RSC-specific features', 'May need additional setup', 'Less TypeScript support']
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
