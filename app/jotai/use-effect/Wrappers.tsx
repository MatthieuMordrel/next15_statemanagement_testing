'use client'

import DataComponent from '@/components/data components/DataComponent'
import { Loading } from '@/components/ui/loading'
import { Data, fetchSlowData, fetchSlowerData, incrementYear } from '@/lib/data'
import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'

// Atoms for slow data
const slowDataAtom = atom<Data | null>(null)
const slowLoadingAtom = atom(true)
const slowErrorAtom = atom<Error | null>(null)
const slowIncrementYearAtom = atom(null, (get, set) => {
  const currentData = get(slowDataAtom)
  if (currentData) {
    set(slowDataAtom, incrementYear(currentData))
  }
})

// Atoms for slower data
const slowerDataAtom = atom<Data | null>(null)
const slowerLoadingAtom = atom(true)
const slowerErrorAtom = atom<Error | null>(null)
const slowerIncrementYearAtom = atom(null, (get, set) => {
  const currentData = get(slowerDataAtom)
  if (currentData) {
    set(slowerDataAtom, incrementYear(currentData))
  }
})

export function WrapperSlowComponent_Jotai_Effect() {
  const [slowData, setSlowData] = useAtom(slowDataAtom)
  const [loadingSlowData, setLoadingSlowData] = useAtom(slowLoadingAtom)
  const [slowError, setSlowError] = useAtom(slowErrorAtom)
  const [, incrementYear] = useAtom(slowIncrementYearAtom)

  useEffect(() => {
    // Handle slow data fetch
    const loadSlowData = async () => {
      try {
        const data = await fetchSlowData()
        setSlowData(data)
      } catch (err) {
        setSlowError(err as Error)
      } finally {
        setLoadingSlowData(false)
      }
    }
    loadSlowData()
  }, [setSlowData, setLoadingSlowData, setSlowError])

  return (
    <>
      {slowData ? (
        <DataComponent data={slowData} seconds={2} color='blue' incrementYear={incrementYear} />
      ) : loadingSlowData ? (
        <Loading />
      ) : slowError ? (
        <div className='text-red-500'>Error loading slow data: {slowError.message}</div>
      ) : null}
    </>
  )
}

export function WrapperSlowerComponent_Jotai_Effect() {
  const [slowerData, setSlowerData] = useAtom(slowerDataAtom)
  const [loadingSlowerData, setLoadingSlowerData] = useAtom(slowerLoadingAtom)
  const [slowerError, setSlowerError] = useAtom(slowerErrorAtom)
  const [, incrementYear] = useAtom(slowerIncrementYearAtom)

  useEffect(() => {
    // Handle slower data fetch
    const loadSlowerData = async () => {
      try {
        const data = await fetchSlowerData()
        setSlowerData(data)
      } catch (err) {
        setSlowerError(err as Error)
      } finally {
        setLoadingSlowerData(false)
      }
    }
    loadSlowerData()
  }, [setSlowerData, setLoadingSlowerData, setSlowerError])

  return (
    <>
      {slowerData ? (
        <DataComponent data={slowerData} seconds={4} color='green' incrementYear={incrementYear} />
      ) : loadingSlowerData ? (
        <Loading />
      ) : slowerError ? (
        <div className='text-red-500'>Error loading slower data: {slowerError.message}</div>
      ) : null}
    </>
  )
}
