import Link from 'next/link'

export default function Home() {
  return (
    <article>
      <h1>Suspense loading state is infinite with javascript turned off (server mode)</h1>
      <p>Turn off javascript, go to <Link href="/recipes">/recipes</Link> and see infinite loading component</p>
      <p>note: check server console to see the data was actually fetched</p>
      <p>note: check page source and see data exists, hidden at the end</p>
    </article>
  )
}
