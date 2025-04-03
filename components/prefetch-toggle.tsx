'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { Switch } from '@/components/ui/switch'
import { prefetchAtom } from '@/lib/atoms/prefetch'
import { useAtom } from 'jotai'

export function PrefetchToggle() {
  const [prefetchEnabled, setPrefetchEnabled] = useAtom(prefetchAtom)

  if (prefetchEnabled === undefined) {
    return (
      <div className='flex items-center space-x-2'>
        <Skeleton className='h-6 w-11 rounded-full' />
        <Skeleton className='h-5 w-24' />
      </div>
    )
  }

  return (
    <div className='flex items-center space-x-2'>
      <Switch id='prefetch-toggle' checked={prefetchEnabled} onCheckedChange={setPrefetchEnabled} />
      <label htmlFor='prefetch-toggle' className='text-sm font-medium'>
        Enable Prefetching
      </label>
    </div>
  )
}
