import Arrow from '../assets/images/arrow-right.svg'

export default function IngredientsAndSteps({text}) {
    return <section className='flex gap-4 mb-4'>
        <img src={Arrow} />
        <p className='text-xl text-[#163A34]'>{text}</p>
    </section>
}