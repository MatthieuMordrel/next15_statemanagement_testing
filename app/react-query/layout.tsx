import Providers from '@/providers/queryProvider'

export default function ReactQueryLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>
}
