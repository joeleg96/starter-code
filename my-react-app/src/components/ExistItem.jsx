import ArrowIcon from '../assets/images/arrow-right.svg';

export default function ExistItem({title, description}) {
    return <section className='mt-10'>
        <div className='flex items-baseline gap-6 relative'>
            <img className='w-15 h-8 relative top-1' src={ArrowIcon} /> 
            <div>
                <h3 className='text-3xl text-[#163A34] font-bold'>{title}</h3>
                <p className='text-xl text-[#163A34] my-4'>{description}</p>
            </div>
        </div>
    </section>
}