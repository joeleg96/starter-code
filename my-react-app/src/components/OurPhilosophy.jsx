import ExistItem from "./ExistItem";

export default function OurPhilosophy() {
    return <section className='mt-16'>
        <hr className='w-full border-[#E0E6E3] mb-12'></hr>
        <div className='w-[95%] mx-auto lg:flex lg:gap-20'>
            <div className='lg:w-1/3'>
                <h2 className='text-6xl text-[#163A34] font-bold'>Our food philosophy</h2>
            </div>
            <div className='lg:w-2/3 mx-auto lg:-mt-6'>
                <ExistItem 
                    title='Whole ingredients first.'
                    description='Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.'
                />
                <ExistItem 
                    title='Flavor without compromise.'
                    description='Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.'
                /> 
                <ExistItem 
                    title='Respect for time.'
                    description='Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.'
                />
                <ExistItem 
                    title='Sustainable choices.'
                    description='Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.'
                /> 
            </div>
        </div>
    </section>
}