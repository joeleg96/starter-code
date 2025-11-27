import data from '../data.json';
import servingsIcon from '../../public/images/icon-servings.svg';
import prepIcon from '../../public/images/icon-prep-time.svg';
import cookIcon from '../../public/images/icon-cook-time.svg';
import IngredientsAndSteps from './IngredientsAndSteps';

export default function FullRecipe({index}) {
    return <section className='w-[95%] mx-auto'>
            <div className='mx-auto mt-8 border border-[#E0E6E3] bg-white rounded-xl p-2 lg:flex gap-4 xl:gap-14'>
                <img className='rounded-xl lg:max-w-145 lg:max-h-145 lg:min-w-120 lg:mt-6' src={import.meta.env.BASE_URL + data[index].image.large} />
                <div className='mt-4 px-2'>
                    <h3 className='text-2xl text-[#163A34] font-extrabold'>{data[index].title}</h3>
                    <p className='text-xl text-[#163A34] mt-4'>{data[index].overview}</p>
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
                        <h4 className='text-xl text-[#163A34] font-semibold mb-4'>Ingredients:</h4>
                        {data[index].ingredients.map(item => 
                            <IngredientsAndSteps 
                                text={item}
                            />
                        )}
                    </div>
                    <div>
                        <h4 className='text-xl text-[#163A34] font-semibold mb-4'>Instructions:</h4>
                        {data[index].instructions.map(item => 
                            <IngredientsAndSteps 
                                text={item}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
}