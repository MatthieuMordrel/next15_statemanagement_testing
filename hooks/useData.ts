import { Data, incrementYear } from '@/lib/data'
import { useState } from 'react'

export function useData({ data }: { data: Data }) {
  // console.log('useData streaming with data:', data.timestamp)
  const [state, setState] = useState(data)

  // useEffect(() => {
  //   console.log('SlowComponent hydrated with timestamp:', state.timestamp)
  // }, [state.timestamp])

  const incrementYearState = () => {
    setState(incrementYear(state))
  }

  return { state, incrementYearState }
}
