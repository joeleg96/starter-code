import data from '../../data.json';
import servingsIcon from '../assets/images/icon-servings.svg';
import prepIcon from '../assets/images/icon-prep-time.svg';
import cookIcon from '../assets/images/icon-cook-time.svg';
import IngredientsAndSteps from './IngredientsAndSteps';

export default function FullRecipe({index}) {
    return <section>
            <div className='w-100 mx-auto mt-8 border border-[#E0E6E3] bg-white rounded-xl p-2 md:w-90 lg:w-85'>
                <img className='rounded-xl' src={data[index].image.large} />
                <div className='mt-4 px-2'>
                    <h3 className='text-2xl text-[#163A34] font-extrabold truncate'>{data[index].title}</h3>
                    <p className='text-xl text-[#163A34] line-clamp-2'>{data[index].description}</p>
                    <div className='grid grid-cols-2 my-4'>
                        <div className='flex items-center gap-2'>
                            <img src={servingsIcon} />
                            <p className='text-xl text-[#163A34]'>Servings: {data[index].servings}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={prepIcon} />
                            <p className='text-xl text-[#163A34]'>Prep: {data[index].prepMinutes} min{data[index].prepMinutes > 1 ? 's' : null} </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={cookIcon} />
                            <p className='text-xl text-[#163A34]'>Cook: {data[index].cookMinutes} min{data[index].cookMinutes > 1 ? 's' : null}</p>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl text-[#163A34] font-semibold truncate mb-4'>Ingredients:</h4>
                        {data.map(item => {
                            <IngredientsAndSteps 
                                text={item.ingredients}
                            />
                        })}
                    </div>
                </div>
            </div>
        </section>
}