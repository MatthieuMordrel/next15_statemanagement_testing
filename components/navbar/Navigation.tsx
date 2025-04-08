'use client'

import { useAtom } from 'jotai'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PrefetchToggle } from '@/components/navbar/prefetch-toggle'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { prefetchAtom } from '@/lib/atoms/prefetch'
import { cn } from '@/lib/utils'

// State management options
const stateManagers = [
  { name: 'Vanilla', slug: 'vanilla' },
  { name: 'Jotai', slug: 'jotai' },
  { name: 'Zustand', slug: 'zustand' },
  { name: 'React Query', slug: 'react-query' },
  { name: 'SWR', slug: 'swr' }
]

// Data fetching approaches
const approaches = [
  { name: 'useEffect', slug: 'use-effect' },
  { name: 'RSC Await', slug: 'rsc-await' },
  { name: 'Promise Props', slug: 'promise-props' }
]

export default function Navigation() {
  const pathname = usePathname()
  const [prefetchEnabled] = useAtom(prefetchAtom)

  return (
    <nav className='border-b'>
      <div className='flex h-16 items-center px-4 pr-12'>
        <Link href='/' className='font-bold text-xl hover:underline flex items-center gap-2'>
          <span className='text-xs bg-primary/10 px-2 py-1 rounded-md text-primary'>Home</span>
        </Link>

        <div className='ml-auto flex items-center gap-4'>
          <NavigationMenu>
            <NavigationMenuList className='gap-1'>
              {stateManagers.map(manager => (
                <NavigationMenuItem key={manager.slug}>
                  <NavigationMenuTrigger className='h-10 px-4 font-medium'>{manager.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className='w-[500px] p-6'>
                      <div className='mb-4 border-b pb-2'>
                        <h4 className='text-md font-medium leading-none mb-1'>{manager.name}</h4>
                      </div>
                      <div className='grid grid-cols-3 gap-4'>
                        {approaches.map(approach => (
                          <Link
                            key={approach.slug}
                            href={`/${manager.slug}/${approach.slug}`}
                            prefetch={prefetchEnabled}
                            className={cn(
                              'flex flex-col items-start justify-between rounded-md p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border transition-colors duration-200',
                              pathname === `/${manager.slug}/${approach.slug}`
                                ? 'bg-accent text-accent-foreground border-primary/30'
                                : 'bg-background border-muted hover:border-primary/20'
                            )}>
                            <div className='w-full flex justify-center items-center'>
                              <div className='text-sm font-medium leading-none'>{approach.name}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <PrefetchToggle />
        </div>
      </div>
    </nav>
  )
}
