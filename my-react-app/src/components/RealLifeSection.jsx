import RealLifeImg from '/images/image-home-real-life-large.webp';

export default function RealLifeSection() {
    return <section>
        <hr className='w-full border-[#E0E6E3] hidden md:block'></hr>
        <div className='w-[95%] mx-auto lg:flex lg:mt-12 gap-6'>
            <div>
                <h2 className='text-5xl font-extrabold mb-8 text-[#163A34] md:mt-10'>Built for real life</h2>
                <p className='text-[#395852] text-xl mb-6'>Cooking shouldn’t be complicated. These recipes come in under <span className='font-bold bg-[#FE9F6B] rounded-md px-1'>30 minutes</span> of active time, fit busy schedules, and taste good enough to repeat. </p>
                <p className='text-[#395852] text-xl mb-10'>Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p> 
            </div>
        
            <div className='flex justify-center'>
                <img className='rounded-xl' src={RealLifeImg} alt='cutting lettuce' />
            </div> 
        </div>
        
    </section>
}