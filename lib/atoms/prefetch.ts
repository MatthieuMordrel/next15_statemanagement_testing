import { atomWithStorage } from 'jotai/utils'

// Create an atom that persists to localStorage with null as default
export const prefetchAtom = atomWithStorage<boolean | null>('prefetch-enabled', null)
