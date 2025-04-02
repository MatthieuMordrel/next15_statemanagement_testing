import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function OverviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What We're Testing</CardTitle>
        <CardDescription>
          This project compares different state management solutions in Next.js 15, testing various approaches to data fetching and state management.
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
