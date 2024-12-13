import type { ReactNode } from 'react'
import Link from 'next/link'
import 'the-new-css-reset'
import './globals.css'

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/recipes">Recipes</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
