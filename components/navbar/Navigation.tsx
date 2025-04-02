'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'

const stateManagers = [
  { name: 'Vanilla', slug: 'vanilla' },
  { name: 'Jotai', slug: 'jotai' },
  { name: 'Zustand', slug: 'zustand' },
  { name: 'React Query', slug: 'react-query' },
  { name: 'SWR', slug: 'swr' }
]

const approaches = [
  { name: 'useEffect', slug: 'use-effect' },
  { name: 'RSC Await', slug: 'rsc-await' },
  { name: 'Promise Props', slug: 'promise-props' }
]

export default function Navigation() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 200)
  }

  const handleMouseEnter = (slug: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(slug)
  }

  return (
    <nav className='border-b'>
      <div className='container flex h-16 items-center px-4'>
        <Link href='/' className='font-bold text-xl hover:underline flex items-center gap-2'>
          <span className='text-xs bg-primary/10 px-2 py-1 rounded-md text-primary'>Home</span>
        </Link>

        <div className='ml-auto flex items-center space-x-4'>
          {stateManagers.map(manager => (
            <DropdownMenu key={manager.slug} open={openDropdown === manager.slug} onOpenChange={open => setOpenDropdown(open ? manager.slug : null)}>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' onMouseEnter={() => handleMouseEnter(manager.slug)}>
                  {manager.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' onMouseLeave={handleMouseLeave}>
                {approaches.map(approach => (
                  <DropdownMenuItem key={approach.slug} asChild>
                    <Link href={`/${manager.slug}/${approach.slug}`} className={pathname === `/${manager.slug}/${approach.slug}` ? 'bg-accent' : ''}>
                      {approach.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>
    </nav>
  )
}
