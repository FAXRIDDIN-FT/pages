import Recipes from '../../components/recipes/recipes'

const Recipe = ({recipes, error, loading}) => {
  if(!recipes) {
    return <div>...</div>
  }
  console.log(recipes)
  return (
    <div>
      <Recipes recipes={recipes} error={error} loading={loading}/>
    </div>
  )
}

export default Recipe