import { ComparisonTable } from '@/components/home page/ComparisonTable'
import { OverviewCard } from '@/components/home page/OverviewCard'
import { TechniqueComparisonTable } from '@/components/home page/TechniqueComparisonTable'

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto space-y-8 py-8'>
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold tracking-tight'>State Management Testing Suite in an SSR context</h1>
        </div>

        <OverviewCard />

        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Data Fetching Techniques Comparison</h2>
          <TechniqueComparisonTable />
        </div>

        <div className='space-y-4'>
          <ComparisonTable />
        </div>
      </div>
    </div>
  )
}
