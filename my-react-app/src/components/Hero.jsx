import Button from './Button'
import HeroImg from '/images/image-home-hero-large.webp';
import squiggle from '/images/pattern-squiggle-1.svg';

export default function Hero({selectPage}) {
    return <section>
        <div className='w-[95%] mx-auto'>
            <h1 className='text-6xl text-[#163A34] font-bold mt-8 lg:text-center'>Healthy meals, zero fuss </h1>
            <p className='text-xl text-[#163A34] my-6 lg:text-center'> Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork. </p>
            <div className='w-44 lg:mx-auto'>
                <Button onClick={()=>selectPage('Recipes')}>Start exploring</Button>
            </div>
        </div>

        <div className='relative flex justify-center'>
            <img className='mt-8 rounded-xl border-4 border-white w-[95%]' src={HeroImg} />
            <img className='absolute top-10 -z-1 ' src={squiggle} />
        </div>
    </section>
}