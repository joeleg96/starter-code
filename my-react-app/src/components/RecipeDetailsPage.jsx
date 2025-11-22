import FullRecipe from './FullRecipe';

export default function RecipeDetailsPage({chosenRecipe}){
    return <section>
        <FullRecipe index={chosenRecipe}/>
    </section>
}