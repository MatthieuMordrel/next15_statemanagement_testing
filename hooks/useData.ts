import { Data } from '@/lib/data'
import { useState } from 'react'

export function useData({ data }: { data: Data }) {
  // console.log('useData streaming with data:', data.timestamp)
  const [state, setState] = useState(data)

  // useEffect(() => {
  //   console.log('SlowComponent hydrated with timestamp:', state.timestamp)
  // }, [state.timestamp])

  const incrementYear = () => {
    const date = new Date(state.timestamp)
    date.setFullYear(date.getFullYear() + 1)
    setState({ ...state, timestamp: date.toISOString() })
  }

  return { state, incrementYear }
}
