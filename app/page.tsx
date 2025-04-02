import { ComparisonTable } from '@/components/ComparisonTable'
import { OverviewCard } from '@/components/OverviewCard'
import { TechniqueComparisonTable } from '@/components/TechniqueComparisonTable'

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto space-y-8 py-8'>
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold tracking-tight'>State Management Testing Suite</h1>
          <p className='text-muted-foreground'>Compare different state management solutions in Next.js 14</p>
        </div>

        <OverviewCard />

        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Data Fetching Techniques Comparison</h2>
          <TechniqueComparisonTable />
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>State Manager Comparison</h2>
          <ComparisonTable />
        </div>
      </div>
    </div>
  )
}
