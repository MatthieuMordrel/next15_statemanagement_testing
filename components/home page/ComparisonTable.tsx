'use client'

import { useAtom } from 'jotai'
import { ChevronDown, Filter, PlugZap, Zap, ZapOff } from 'lucide-react'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import stateManagersData from '@/data/stateManagers.json'
import { selectedStateManagersAtom, visibleColumnsAtom } from '@/lib/atoms/filters'

const stateManagers = stateManagersData.stateManagers
const columns = ['Data Fetching', 'Pros', 'Cons', 'Data Availability'] as const

// Status indicators with their meanings for the legend
const statusIndicators = [
  {
    icon: <PlugZap className='size-4' />,
    label: "Doesn't work/Unknown",
    description: "Doesn't seem to work or I don't know how to make it work",
    color: 'text-red-500'
  },
  {
    icon: <ZapOff className='size-4' />,
    label: 'Never available',
    description: 'Fresh or Stale Data is never available',
    color: 'text-red-500'
  },
  {
    icon: <Zap className='size-4' />,
    label: 'Fresh Data',
    description: 'Fresh Data is available using Next.js prefetching',
    color: 'text-yellow-500'
  },
  {
    icon: <Zap className='size-4' />,
    label: 'Stale Data',
    description: 'Stale Data is available without needing Next.js prefetching',
    color: 'text-green-500'
  }
]

export function ComparisonTable() {
  const [selectedStateManagers, setSelectedStateManagers] = useAtom(selectedStateManagersAtom)
  const [visibleColumns, setVisibleColumns] = useAtom(visibleColumnsAtom)
  const [showLegend, setShowLegend] = useState(false)

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

  // Helper function to render the status icon
  const renderStatusIcon = (status: string | boolean) => {
    if (typeof status !== 'string') return <ZapOff className='size-4 text-red-500' />

    switch (status) {
      case 'instant':
        return <Zap className='size-4 text-green-500' />
      case 'prefetching':
        return <Zap className='size-4 text-yellow-500' />
      case 'broken':
        return <PlugZap className='size-4 text-red-500' />
      default:
        return <ZapOff className='size-4 text-red-500' />
    }
  }

  return (
    <Card className='overflow-hidden border-0 shadow-md bg-white dark:bg-slate-900'>
      <CardContent className='p-6 space-y-6'>
        {/* Header with title and filters */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <h2 className='text-2xl font-bold'>State Manager Comparison</h2>

          <div className='flex flex-wrap gap-2'>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex items-center gap-2'>
                  <Filter className='size-4' />
                  <span>Managers</span>
                  {selectedStateManagers.length > 0 && (
                    <Badge variant='secondary' className='ml-1'>
                      {selectedStateManagers.length}
                    </Badge>
                  )}
                  <ChevronDown className='size-3 ml-1 opacity-70' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start' className='w-56 p-2'>
                {stateManagers.map(manager => (
                  <DropdownMenuCheckboxItem
                    key={manager.name}
                    checked={selectedStateManagers.includes(manager.name)}
                    onCheckedChange={() => toggleStateManager(manager.name)}
                    onSelect={e => e.preventDefault()}
                    className='rounded-md cursor-pointer'>
                    {manager.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex items-center gap-2'>
                  <Filter className='size-4' />
                  <span>Columns</span>
                  <ChevronDown className='size-3 ml-1 opacity-70' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-56 p-2'>
                {columns.map(column => (
                  <DropdownMenuCheckboxItem
                    key={column}
                    checked={visibleColumns[column]}
                    onCheckedChange={() => toggleColumn(column)}
                    onSelect={e => e.preventDefault()}
                    className='rounded-md cursor-pointer'>
                    {column}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant='ghost' onClick={() => setShowLegend(prev => !prev)} className='flex items-center gap-2'>
              <span>Legend</span>
              <ChevronDown className={`size-3 ml-1 opacity-70 transition-transform duration-200 ${showLegend ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>

        {/* Description and legend */}
        <div className='space-y-4'>
          <p className='text-muted-foreground'>
            In Next.js, navigation can always be instant using prefetching, and is never instant without it. However, this navigation might show a
            loading.js, which is much less exciting than having the actual page with fresh data available. Below we explore how to instantly get the
            page we want, with stale or fresh data.
          </p>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showLegend ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mt-2'>
              {statusIndicators.map((indicator, index) => (
                <div key={index} className='flex items-start gap-2'>
                  <div className={`${indicator.color} mt-1`}>{indicator.icon}</div>
                  <div>
                    <div className='font-medium'>{indicator.label}</div>
                    <div className='text-sm text-muted-foreground'>{indicator.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className='rounded-lg border overflow-hidden'>
          <Table>
            <TableHeader>
              <TableRow className='bg-slate-50 dark:bg-slate-800'>
                <TableHead className='font-semibold'>State Manager</TableHead>
                {visibleColumns['Data Fetching'] && <TableHead className='font-semibold'>Data Fetching</TableHead>}
                {visibleColumns['Pros'] && <TableHead className='font-semibold'>Pros</TableHead>}
                {visibleColumns['Cons'] && <TableHead className='font-semibold'>Cons</TableHead>}
                {visibleColumns['Data Availability'] && <TableHead className='font-semibold'>Data Availability</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStateManagers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={Object.values(visibleColumns).filter(Boolean).length + 1} className='text-center py-8 text-muted-foreground'>
                    No state managers selected. Please select at least one state manager to compare.
                  </TableCell>
                </TableRow>
              ) : (
                filteredStateManagers.flatMap(manager =>
                  manager.techniques.flatMap((technique, techIndex) => {
                    const baseRowStyle = 'transition-opacity duration-200 opacity-100 hover:bg-slate-50/50 dark:hover:bg-slate-800/30'

                    return [
                      // First row for each technique
                      <tr key={`${manager.name}-${technique.name}-first`} className={`${baseRowStyle} border-b`}>
                        <TableCell className='font-medium bg-slate-50/50 dark:bg-slate-800/50 align-top' rowSpan={2}>
                          <div className='sticky top-0 pt-3'>
                            <Badge variant='outline' className='px-2 py-1 font-semibold'>
                              {manager.name}
                            </Badge>
                          </div>
                        </TableCell>

                        {visibleColumns['Data Fetching'] && (
                          <TableCell rowSpan={2} className='align-top'>
                            <div className='py-1 px-2 bg-slate-100 dark:bg-slate-800 rounded inline-block text-sm'>{technique.name}</div>
                          </TableCell>
                        )}

                        {visibleColumns['Pros'] && (
                          <TableCell rowSpan={2} className='align-top'>
                            <ul className='list-disc list-inside space-y-2'>
                              {technique.pros.map((pro, index) => (
                                <li key={index} className='text-sm'>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </TableCell>
                        )}

                        {visibleColumns['Cons'] && (
                          <TableCell rowSpan={2} className='align-top'>
                            <ul className='list-disc list-inside space-y-2'>
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
                            <div className='flex items-center gap-2 p-1 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors'>
                              {renderStatusIcon(technique.navigation.firstLoad.instant)}
                              <span className='text-sm'>First Load: {technique.navigation.firstLoad.comment}</span>
                            </div>
                          </TableCell>
                        )}
                      </tr>,

                      // Second row for each technique (subsequent navigation)
                      <tr key={`${manager.name}-${technique.name}-subsequent`} className={baseRowStyle}>
                        {visibleColumns['Data Availability'] && (
                          <TableCell>
                            <div className='flex items-center gap-2 p-1 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors'>
                              {renderStatusIcon(technique.navigation.subsequent.instant)}
                              <span className='text-sm'>Subsequent: {technique.navigation.subsequent.comment}</span>
                            </div>
                          </TableCell>
                        )}
                      </tr>
                    ]
                  })
                )
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
