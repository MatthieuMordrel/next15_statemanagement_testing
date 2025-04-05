'use client'
import { Data, incrementYear } from '@/lib/data'
import { atom } from 'jotai'

export const slowDataAtom = atom<Data | null>(null)
export const slowerDataAtom = atom<Data | null>(null)

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
