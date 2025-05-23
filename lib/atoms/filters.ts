import { atom } from 'jotai'

export const selectedStateManagersAtom = atom<string[]>(['Vanilla React', 'Jotai', 'Zustand', 'React Query', 'SWR'])

export const visibleColumnsAtom = atom<Record<string, boolean>>({
  'Data Fetching': true,
  Pros: true,
  Cons: true,
  'Data Availability': true
})
