'use client'

import DataComponent from '@/components/data components/DataComponent'
import { incrementYear } from '@/lib/data'
import { useAtom } from 'jotai'
import { slowDataPromiseAtom, slowerDataPromiseAtom } from './atoms'

export function WrapperSlowComponent_Jotai_PromiseProps_Client() {
  const [data] = useAtom(slowDataPromiseAtom)

  return <DataComponent data={data!} seconds={1} color='blue' incrementYear={incrementYear} />
}

export function WrapperSlowerComponent_Jotai_PromiseProps_Client() {
  const [data] = useAtom(slowerDataPromiseAtom)

  return <DataComponent data={data!} seconds={1} color='green' incrementYear={incrementYear} />
}
