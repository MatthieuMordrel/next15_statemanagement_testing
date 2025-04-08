'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import stateManagersData from '@/data/stateManagers.json'
import { selectedStateManagersAtom, visibleColumnsAtom } from '@/lib/atoms/filters'
import { useAtom } from 'jotai'
import { PlugZap, Zap, ZapOff } from 'lucide-react'
import React from 'react'

const stateManagers = stateManagersData.stateManagers
const columns = ['Data Fetching', 'Pros', 'Cons', 'Data Availability'] as const

export function ComparisonTable() {
  const [selectedStateManagers, setSelectedStateManagers] = useAtom(selectedStateManagersAtom)
  const [visibleColumns, setVisibleColumns] = useAtom(visibleColumnsAtom)

  const toggleStateManager = (name: string) => {
    setSelectedStateManagers(prev => {
      if (prev.includes(name)) {
        return prev.filter(n => n !== name)
      }
      return [...prev, name]
    })
  }

  const toggleColumn = (column: string) => {
    setVisibleColumns(prev => ({
      ...prev,
      [column]: !prev[column]
    }))
  }

  const filteredStateManagers =
    selectedStateManagers.length === 0 ? stateManagers : stateManagers.filter(manager => selectedStateManagers.includes(manager.name))

  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-2'>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>State Managers {selectedStateManagers.length > 0 && `(${selectedStateManagers.length})`}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start' className='w-56'>
            {stateManagers.map(manager => (
              <DropdownMenuCheckboxItem
                key={manager.name}
                checked={selectedStateManagers.includes(manager.name)}
                onCheckedChange={() => toggleStateManager(manager.name)}
                onSelect={e => e.preventDefault()}>
                {manager.name}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>Columns</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-56'>
            {columns.map(column => (
              <DropdownMenuCheckboxItem
                key={column}
                checked={visibleColumns[column]}
                onCheckedChange={() => toggleColumn(column)}
                onSelect={e => e.preventDefault()}>
                {column}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='flex flex-col gap-2'>
        In Next.js, navigation can always be instant using prefetching, and is never instant without it. However this navigation might show a
        loading.js, which is much less exciting than having the actual page with fresh data available. Below we explore how to instantly get the page
        we want, with stale or fresh data.
        <div className='flex gap-2'>
          <PlugZap className='size-4 text-red-500' />: Doesn&apos;t seem to work/I don&apos;t know how to make it work
          <ZapOff className='size-4 text-red-500' />: Fresh or Stale Data is never available
        </div>
        <div className='flex gap-2'>
          <Zap className='size-4 text-yellow-500' />: Fresh Data is available using Next.js prefetching
          <Zap className='size-4 text-green-500' />: Stale Data is available without needing Next.js prefetching (Fresh data could be shown using your
          state management prefetching mecanisms)
        </div>
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>State Manager</TableHead>
              {visibleColumns['Data Fetching'] && <TableHead>Data Fetching</TableHead>}
              {visibleColumns['Pros'] && <TableHead>Pros</TableHead>}
              {visibleColumns['Cons'] && <TableHead>Cons</TableHead>}
              {visibleColumns['Data Availability'] && <TableHead>Data Availability</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStateManagers.map(manager =>
              manager.techniques.map(technique => (
                <React.Fragment key={`${manager.name}-${technique.name}`}>
                  <TableRow>
                    <TableCell className='font-medium' rowSpan={2}>
                      {manager.name}
                    </TableCell>
                    {visibleColumns['Data Fetching'] && <TableCell rowSpan={2}>{technique.name}</TableCell>}
                    {visibleColumns['Pros'] && (
                      <TableCell rowSpan={2}>
                        <ul className='list-disc list-inside space-y-1'>
                          {technique.pros.map((pro, index) => (
                            <li key={index} className='text-sm'>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    )}
                    {visibleColumns['Cons'] && (
                      <TableCell rowSpan={2}>
                        <ul className='list-disc list-inside space-y-1'>
                          {technique.cons.map((con, index) => (
                            <li key={index} className='text-sm'>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    )}
                    {visibleColumns['Data Availability'] && (
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          {technique.navigation.firstLoad.instant === 'instant' ? (
                            <Zap className='size-4 text-green-500' />
                          ) : technique.navigation.firstLoad.instant === 'prefetching' ? (
                            <Zap className='size-4 text-yellow-500' />
                          ) : technique.navigation.firstLoad.instant === 'broken' ? (
                            <PlugZap className='size-4 text-red-500' />
                          ) : (
                            <ZapOff className='size-4 text-red-500' />
                          )}
                          <span className='text-sm'>{technique.navigation.firstLoad.comment}</span>
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                  <TableRow>
                    {visibleColumns['Data Availability'] && (
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          {technique.navigation.subsequent.instant === 'instant' ? (
                            <Zap className='size-4 text-green-500' />
                          ) : technique.navigation.subsequent.instant === 'prefetching' ? (
                            <Zap className='size-4 text-yellow-500' />
                          ) : technique.navigation.subsequent.instant === 'broken' ? (
                            <PlugZap className='size-4 text-red-500' />
                          ) : (
                            <ZapOff className='size-4 text-red-500' />
                          )}
                          <span className='text-sm'>{technique.navigation.subsequent.comment}</span>
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                </React.Fragment>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
