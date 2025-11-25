import FullRecipe from './FullRecipe';
import data from '../../data.json';
import RecipeItem from './RecipeItem';

export default function RecipeDetailsPage({chosenRecipe, selectRecipe, selectPage}){

    return <section className='max-w-400 mx-auto'>
        <p className='w-[95%] mx-auto text-4xl text-[#163A34] font-semibold mb-2'><span className='font-light text-[#D0DCD9]'>Recipes /</span> {data[chosenRecipe].title}</p>
        <FullRecipe index={chosenRecipe}/>
        <hr className='w-full border-[#E0E6E3] my-10'></hr>
        <div className='w-[95%] mx-auto'>
            <h2 className='text-4xl text-[#163A34] font-semibold mb-2 ml-4'>More recipes</h2>
            <div className='lg:flex gap-10'>
                <RecipeItem 
                    className='w-[95%] mx-auto mt-8 border border-[#E0E6E3] bg-white rounded-xl p-2'
                    key={data[3].id}
                    recipeImg={data[3].image.large}
                    title={data[3].title}
                    description={data[3].overview}
                    servings={data[3].servings}
                    prepMinutes={data[3].prepMinutes}
                    cookMinutes={data[3].cookMinutes}
                    id={data[3].id}
                    selectPage={selectPage}
                    selectRecipe={selectRecipe}
                />
                <RecipeItem 
                    className='w-[95%] mx-auto mt-8 border border-[#E0E6E3] bg-white rounded-xl p-2'
                    key={data[4].id}
                    recipeImg={data[4].image.large}
                    title={data[4].title}
                    description={data[4].overview}
                    servings={data[4].servings}
                    prepMinutes={data[4].prepMinutes}
                    cookMinutes={data[4].cookMinutes}
                    id={data[4].id}
                    selectPage={selectPage}
                    selectRecipe={selectRecipe}
                />
                <RecipeItem 
                    className='w-[95%] mx-auto mt-8 border border-[#E0E6E3] bg-white rounded-xl p-2'
                    key={data[5].id}
                    recipeImg={data[5].image.large}
                    title={data[5].title}
                    description={data[5].overview}
                    servings={data[5].servings}
                    prepMinutes={data[5].prepMinutes}
                    cookMinutes={data[5].cookMinutes}
                    id={data[5].id}
                    selectPage={selectPage}
                    selectRecipe={selectRecipe}
                />
            </div>
        </div>
    </section>
}