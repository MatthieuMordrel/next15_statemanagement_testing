import Providers from '@/providers/queryProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function ReactQueryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </Providers>
  )
}
