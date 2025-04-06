import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

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
          We are NOT comparing SSR vs CSR. As we are using Next.js, everything is SSR.
          <br />
          We are solely focusing on the pros and cons of the different strategies that can be adopted for data fetching and state management in an SSR
          context.
          <br />
          We are testing both client state management and server state management because it&apos;s fun, but 99% of the time if your data lives on the
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
      <CardHeader>
        <CardTitle>Conclusion</CardTitle>
        <CardDescription>
          Without surprise Tanstack React Query is the best solution.
          <br />
          By dehydrating queries, you can benefit from fast first load, even instant with prefetching.
          <br />
          On subsequent navigation, stale data is shown and refetch on mount without triggering suspense. You can probably show fresh data by
          implementing Tanstack Query prefetching on link mouse over/entering the viewport.
          <br />
          Suspense boundaries can be placed around the client component, and you can generally limit the number of Hydration Boundaries needed because
          only queries are passed to the client.
          <br />
          You also benefit from all Tanstack Query native features like optimistic updates, dev tools, smart refetches, etc.
          <br />
          However it does still seems early, as there are some issues with the refetches sometimes not being triggered.
        </CardDescription>
      </CardHeader>
      <CardHeader>
        <CardTitle>Notes</CardTitle>
        <CardDescription>
          I observed some intersting behavior during this project. Notably that changing the value of prefetch in the Link component also change the
          behavior of the router cache. It seems that when prefetch is true, the router cache store s the dynamic route, but not when using prefetch
          null or false. (confirmed that when Next.js prefetch is true, the dynamic page is cached 5 minutes) As far as I know, this is not an issue,
          because the data is being managed from the client at this point, so you want to leverage your server state management system to prefetch the
          data, not Next.js.
          <br />
          Interstingly, for SWR, using prefetch false or null means that the dynamic page needs to be fully reloaded, but Tanstack Query someone
          manages to work well without. I&apos;m thinking that the caching behavior in Tanstack query is smarter than in SWR, so the page is actually
          always regenerated when prefetch is false or null but Tanstack Query know that the data is available in the cache, and so doesn&apos;t
          suspend the component while SWR doesn&apos;t know that, and thinks it has to wait for the promise to resolve to actaully stop suspending.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <p className='text-sm text-muted-foreground'>This project is a work in progress. If you have any feedback, please let me know.</p>
      </CardFooter>
    </Card>
  )
}
