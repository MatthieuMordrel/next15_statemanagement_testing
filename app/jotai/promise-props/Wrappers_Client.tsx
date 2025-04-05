'use client'

import DataComponent from '@/components/data components/DataComponent'
import { incrementYear } from '@/lib/data'
import { useAtom } from 'jotai'
import { slowDataPromiseAtom, slowerDataPromiseAtom } from './atoms'

export function WrapperSlowComponent_Jotai_PromiseProps_Client() {
  //For some reason, the useAtom hook unwrap the promise
  const [promiseButData, setPromiseButData] = useAtom(slowDataPromiseAtom)

  return <DataComponent data={promiseButData!} seconds={1} color='blue' incrementYear={incrementYear} />
}

export function WrapperSlowerComponent_Jotai_PromiseProps_Client() {
  //For some reason, the useAtom hook unwrap the promise
  const [promiseButData, setPromiseButData] = useAtom(slowerDataPromiseAtom)

  return <DataComponent data={promiseButData!} seconds={1} color='green' incrementYear={incrementYear} />
}
