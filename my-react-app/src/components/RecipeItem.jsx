import servingsIcon from '../../public/images/icon-servings.svg';
import prepIcon from '../../public/images/icon-prep-time.svg';
import cookIcon from '../../public/images/icon-cook-time.svg';
import Button from './Button';

export default function RecipeItem({ recipeImg, title, description, servings, prepMinutes, cookMinutes, selectPage, selectRecipe, id, ...props}) {

    return <section>
        <div className='mt-8 border border-[#E0E6E3] bg-white rounded-xl p-2' {...props}>
            <img className='rounded-xl' src={recipeImg} />  
            <div className='mt-4 px-2'>
                <h3 className='text-2xl text-[#163A34] font-semibold truncate mb-2'>{title}</h3>
                <p className='text-xl text-[#163A34] line-clamp-2 lg:line-clamp-1'>{description}</p>
                <div className='grid grid-cols-2 my-4'>
                    <div className='flex items-center gap-2'>
                        <img src={servingsIcon} />
                        <p className='text-xl text-[#163A34]'>Servings: {servings}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={prepIcon} />
                        <p className='text-xl text-[#163A34]'>Prep: {prepMinutes} min{prepMinutes > 1 ? 's' : null} </p>
                    </div>
                    <div className='flex items-center gap-2 w-40'>
                        <img src={cookIcon} />
                        <p className='text-xl text-[#163A34]'>Cook: {cookMinutes} min{cookMinutes > 1 ? 's' : null}</p>
                    </div>
                </div>
            </div>
            <Button onClick={()=>{selectPage('Details'), selectRecipe(id), window.scrollTo({ top: 0, behavior: "smooth" })}}>View Recipe</Button>
        </div>
    </section>
}