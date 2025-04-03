import { atomWithStorage } from 'jotai/utils'

// Create an atom that persists to localStorage
export const prefetchAtom = atomWithStorage<boolean | undefined>('prefetch-enabled', undefined)
