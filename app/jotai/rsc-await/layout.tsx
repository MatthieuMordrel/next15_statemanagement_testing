import { ReactNode } from 'react'
import { Providers } from './provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>
}
