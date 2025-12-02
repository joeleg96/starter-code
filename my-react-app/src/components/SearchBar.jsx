import SearchImg from '../../public/images/icon-search.svg'

export default function SearchBar({ ref, updateSearch }) {
    return <div className='flex justify-center gap-6 bg-white border border-[#E0E6E3] rounded-xl py-2 px-8 mx-auto w-100 mt-2 md:w-60 h-11'>
        <img src={SearchImg} />
        <input 
            type='text'
            ref={ref}
            onChange={updateSearch}
            className='h-6 w-70 -ml-4 border-none focus:outline-none' placeholder='Search by name or ingredient...'>
        </input> 
    </div>
    
}