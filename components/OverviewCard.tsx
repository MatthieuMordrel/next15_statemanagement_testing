import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function OverviewCard() {
  return (
    <Card>
      <CardHeader className='space-y-2'>
        <CardTitle>What we are testing</CardTitle>
        <CardDescription>
          This project compares different state management solutions in Next.js 15, testing various approaches to data fetching and state management.
        </CardDescription>
        <CardTitle>What we are not testing</CardTitle>
        <CardDescription>
          We are NOT comparing SSR vs CSR. I truly think that SSG and PPR are great technologies and have little downsides (self hosting being one of
          them).
          <br />
          We are solely focusing on the pros and cons of the different strategies that can be adopted for data fetching and state management in an SSR
          context.
          <br />
          We are testing both client state management and server state management because it's fun, but 99% of the time if your data lives on the
          server, you should very likely use a server state management solution.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-2'>
          <h3 className='text-lg font-medium'>State Managers</h3>
          <ul className='list-disc list-inside text-muted-foreground space-y-1'>
            <li>Vanilla React</li>
            <li>Jotai</li>
            <li>Zustand</li>
            <li>React Query</li>
            <li>SWR</li>
          </ul>
        </div>

        <div className='space-y-2'>
          <h3 className='text-lg font-medium'>Testing Approaches</h3>
          <ul className='list-disc list-inside text-muted-foreground space-y-1'>
            <li>useEffect-based data fetching</li>
            <li>RSC await with client components</li>
            <li>Promise props with use hook</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
