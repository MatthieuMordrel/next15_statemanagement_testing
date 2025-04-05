'use client'

import { Data, incrementYear } from '@/lib/data'
import { atom } from 'jotai'

// Atoms that store the promises from server
export const slowDataPromiseAtom = atom<Promise<Data> | null>(null)
export const slowerDataPromiseAtom = atom<Promise<Data> | null>(null)

// Atoms that store the resolved data
export const slowDataAtom = atom<Data | null>(null)
export const slowerDataAtom = atom<Data | null>(null)

// Increment atoms that work with the resolved data
export const slowIncrementYearAtom = atom(null, (get, set) => {
  const currentData = get(slowDataAtom)
  if (currentData) {
    set(slowDataAtom, incrementYear(currentData))
  }
})

export const slowerIncrementYearAtom = atom(null, (get, set) => {
  const currentData = get(slowerDataAtom)
  if (currentData) {
    set(slowerDataAtom, incrementYear(currentData))
  }
})
