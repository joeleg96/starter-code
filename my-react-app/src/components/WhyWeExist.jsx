import ExistItem from "./ExistItem";

export default function WhyWeExist() {
    return <section className='mt-16'>
        <hr className='w-full border-[#E0E6E3] mb-12'></hr>
        <div className='w-[95%] mx-auto lg:flex lg:gap-20'>
            <div className='lg:w-1/3'>
              <h2 className='text-6xl text-[#163A34] font-bold'>Why we exist</h2>  
            </div>
            <div className='lg:w-2/3 mx-auto lg:-mt-6'>
                <ExistItem 
                    title='Cut through the noise.'
                    description='The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.'
                />
                <ExistItem 
                    title='Empower home kitchens.'
                    description='When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.'
                /> 
                <ExistItem 
                    title='Make healthy look good.'
                    description='High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.'
                /> 
            </div>
        </div>
    </section>
}