import dropArrow from '../../public/images/caret-down.svg'

export default function RecipeFilterButton({children}) {
    return <button 
        className='flex justify-center gap-2 bg-white border border-[#E0E6E3] rounded-xl py-2 px-8 mx-auto w-100 mt-2 text-[#163A34] md:w-60'>{children}
        <img src={dropArrow} />
    </button>
}