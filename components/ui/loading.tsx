import { Skeleton } from '@/components/ui/skeleton'

export function Loading() {
  return (
    <div className='space-y-4'>
      <Skeleton className='h-8 w-[250px]' />
      <Skeleton className='h-4 w-[200px]' />
      <Skeleton className='h-4 w-[200px]' />
      <Skeleton className='h-4 w-[200px]' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-[90%]' />
      </div>
    </div>
  )
}
