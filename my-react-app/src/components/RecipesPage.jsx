import RecipeHero from "./RecipeHero";
import RecipeFiltersSection from "./RecipeFiltersSection";
import Recipes from "./Recipes";

export default function RecipesPage({selectPage, selectRecipe}) {
    return <main className='max-w-350 mx-auto'>
        <RecipeHero />
        <RecipeFiltersSection />
        <Recipes 
            selectPage={selectPage}
            selectRecipe={selectRecipe} 
        />
    </main>
}