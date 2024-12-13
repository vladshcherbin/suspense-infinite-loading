import { Suspense } from 'react'
import RecipesList from './components/RecipesList'

export default function Page() {
  return (
    <>
      <h1>Recipes List</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RecipesList />
      </Suspense>
    </>
  )
}
