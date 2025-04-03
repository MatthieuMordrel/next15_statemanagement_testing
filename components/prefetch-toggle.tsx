'use client'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { prefetchAtom } from '@/lib/atoms/prefetch'
import { cn } from '@/lib/utils'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

const states = [
  { value: null, label: 'null' },
  { value: true, label: 'true' },
  { value: false, label: 'false' }
] as const

export function PrefetchToggle() {
  const [prefetchEnabled, setPrefetchEnabled] = useAtom(prefetchAtom)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return (
      <div className='flex items-center space-x-2'>
        <Skeleton className='h-6 w-11 rounded-full' />
        <Skeleton className='h-5 w-24' />
      </div>
    )
  }

  const currentIndex = states.findIndex(state => state.value === prefetchEnabled)
  const nextState = states[(currentIndex + 1) % states.length]

  return (
    <div className='flex items-center space-x-2'>
      <Button
        variant='ghost'
        size='sm'
        className={cn(
          'w-24 justify-between hover:bg-transparent',
          prefetchEnabled === null && 'bg-primary/10 text-primary hover:bg-primary/20',
          prefetchEnabled === true && 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
          prefetchEnabled === false && 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
        )}
        onClick={() => setPrefetchEnabled(nextState.value)}>
        {states[currentIndex].label}
        <span className='ml-2 text-xs opacity-50'>↻</span>
      </Button>
      <span className='text-sm font-medium'>Prefetch</span>
    </div>
  )
}
