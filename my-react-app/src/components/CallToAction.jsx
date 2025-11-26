import Button from './Button';
import ForkPattern from '../../public/images/pattern-fork.svg';
import KnifePattern from '../../public/images/pattern-knife.svg';

export default function CallToAction({selectPage}) {
    return <section className='mt-10'>
        <div className='w-[95%] mx-auto bg-[#E0E6E3] rounded-xl p-10 relative md:py-20 -z-2'>
            <div>
                <h2 className='text-[#163A34] text-5xl font-bold text-center'>Ready to cook smarter?</h2>
                <p className='text-xl mt-6 text-center text-[#163A34]'>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                <div className='flex justify-center mt-8 w-44 mx-auto'>
                    <Button onClick={()=>selectPage('Recipes')}>Browse recipes</Button> 
                </div>
                <img className='absolute bottom-0 left-0 h-45 hidden md:block -z-1' src={ForkPattern} alt="background fork pattern" />
                <img className='absolute top-0 right-0 h-45 hidden md:block -z-1' src={KnifePattern} alt="background knife pattern" /> 
            </div>
        </div>
    </section>
}