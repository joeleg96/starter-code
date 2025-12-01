import RecipeItem from "./RecipeItem"
import data from '../data.json';

export default function Recipes({ selectPage, selectRecipe, search }) {
    
    const filteredRecipes = data.filter((item) => {
    const text = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(text) ||
      item.overview.toLowerCase().includes(text) ||
      item.ingredients.join(" ").toLowerCase().includes(text)
    );
  });

    return <section className='md:grid md:grid-cols-2 md:max-w-[760px] lg:grid-cols-3 lg:max-w-[1300px] gap-4 mx-auto px-2'>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((item) => (
            <RecipeItem
              key={item.id}
              recipeImg={import.meta.env.BASE_URL + item.image.large}
              title={item.title}
              description={item.overview}
              servings={item.servings}
              prepMinutes={item.prepMinutes}
              cookMinutes={item.cookMinutes}
              id={item.id}
              selectPage={selectPage}
              selectRecipe={selectRecipe}
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
    </section>
}