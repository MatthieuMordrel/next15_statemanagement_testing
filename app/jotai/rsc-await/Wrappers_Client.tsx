'use client'

import DataComponent from '@/components/data components/DataComponent'
import { useAtom } from 'jotai'
import { slowDataAtom, slowerDataAtom, slowerIncrementYearAtom, slowIncrementYearAtom } from './atoms'

export function WrapperSlowComponent_Jotai_RSC_Client() {
  const [data] = useAtom(slowDataAtom)
  const [, incrementYear] = useAtom(slowIncrementYearAtom)
  // data should always be defined
  return <DataComponent data={data!} seconds={2} color='blue' incrementYear={incrementYear} />
}

export function WrapperSlowerComponent_Jotai_RSC_Client() {
  const [data] = useAtom(slowerDataAtom)
  const [, incrementYear] = useAtom(slowerIncrementYearAtom)
  // data should always be defined
  return <DataComponent data={data!} seconds={4} color='green' incrementYear={incrementYear} />
}
