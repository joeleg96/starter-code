import FullRecipe from './FullRecipe';
import data from '../data.json';
import RecipeItem from './RecipeItem';

export default function RecipeDetailsPage({chosenRecipe, selectRecipe, selectPage}){

    return <section className='max-w-400 mx-auto'>
        <p className='w-[95%] mx-auto text-4xl text-[#163A34] font-semibold mb-2'><span className='font-light text-[#D0DCD9]'>Recipes /</span> {data[chosenRecipe].title}</p>
        <FullRecipe index={chosenRecipe}/>
        <hr className='w-full border-[#E0E6E3] my-10'></hr>
        <div className='w-[95%] mx-auto'>
            <h2 className='text-4xl text-[#163A34] font-semibold mb-2 ml-4'>More recipes</h2>
            <div className='lg:flex gap-2'>
                <RecipeItem 
                    className='w-[95%] mx-auto mt-8 border border-[#E0E6E3] bg-white rounded-xl p-2 min-w-79'
                    key={data[(chosenRecipe+1)%8].id}
                    recipeImg={data[(chosenRecipe+1)%8].image.large}
                    title={data[(chosenRecipe+1)%8].title}
                    description={data[(chosenRecipe+1)%8].overview}
                    servings={data[(chosenRecipe+1)%8].servings}
                    prepMinutes={data[(chosenRecipe+1)%8].prepMinutes}
                    cookMinutes={data[(chosenRecipe+1)%8].cookMinutes}
                    id={data[(chosenRecipe+1)%8].id}
                    selectPage={selectPage}
                    selectRecipe={selectRecipe}
                />
                <RecipeItem 
                    className='w-[95%] mx-auto mt-8 border border-[#E0E6E3] bg-white rounded-xl p-2 min-w-79'
                    key={data[(chosenRecipe+2)%8].id}
                    recipeImg={data[(chosenRecipe+2)%8].image.large}
                    title={data[(chosenRecipe+2)%8].title}
                    description={data[(chosenRecipe+2)%8].overview}
                    servings={data[(chosenRecipe+2)%8].servings}
                    prepMinutes={data[(chosenRecipe+2)%8].prepMinutes}
                    cookMinutes={data[(chosenRecipe+2)%8].cookMinutes}
                    id={data[(chosenRecipe+2)%8].id}
                    selectPage={selectPage}
                    selectRecipe={selectRecipe}
                />
                <RecipeItem 
                    className='w-[95%] mx-auto mt-8 border border-[#E0E6E3] bg-white rounded-xl p-2 min-w-79'
                    key={data[(chosenRecipe+3)%8].id}
                    recipeImg={data[(chosenRecipe+3)%8].image.large}
                    title={data[(chosenRecipe+3)%8].title}
                    description={data[(chosenRecipe+3)%8].overview}
                    servings={data[(chosenRecipe+3)%8].servings}
                    prepMinutes={data[(chosenRecipe+3)%8].prepMinutes}
                    cookMinutes={data[(chosenRecipe+3)%8].cookMinutes}
                    id={data[(chosenRecipe+3)%8].id}
                    selectPage={selectPage}
                    selectRecipe={selectRecipe}
                />
            </div>
        </div>
    </section>
}