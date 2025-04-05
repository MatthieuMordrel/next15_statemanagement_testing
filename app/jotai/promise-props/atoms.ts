'use client'

import { Data, incrementYear } from '@/lib/data'
import { atom } from 'jotai'
import { use } from 'react'

export const slowDataPromiseAtom = atom<Promise<Data> | null>(null)
export const slowerDataPromiseAtom = atom<Promise<Data> | null>(null)
