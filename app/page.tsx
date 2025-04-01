import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <main className='container py-8'>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='space-y-2'>
            <h1 className='text-4xl font-bold tracking-tight'>State Management Testing Suite</h1>
            <p className='text-muted-foreground'>Compare different state management solutions in Next.js 14</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What We're Testing</CardTitle>
              <CardDescription>
                This project compares different state management solutions in Next.js 14, testing various approaches to data fetching and state
                management.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-2'>
                <h3 className='text-lg font-medium'>State Managers</h3>
                <ul className='list-disc list-inside text-muted-foreground space-y-1'>
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

          <Card>
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
              <CardDescription>Explore different combinations of state managers and data fetching approaches</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertDescription>Select a state manager from the navigation bar to see all available testing approaches.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
