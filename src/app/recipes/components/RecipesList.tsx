interface Recipe {
  id: number
  name: string
}

export default async function RecipesList() {
  const response = await fetch('https://dummyjson.com/recipes?limit=10', {
    cache: 'no-store'
  })
  const { recipes } = await response.json() as { recipes: Recipe[] }

  // eslint-disable-next-line no-console
  console.log('received recipes', recipes.length)

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </ul>
  )
}
