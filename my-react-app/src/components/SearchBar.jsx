import SearchImg from '../../public/images/icon-search.svg'

export default function SearchBar() {
    return <div className='flex justify-center gap-6 bg-white border border-[#E0E6E3] rounded-xl py-2 px-8 mx-auto w-100 mt-2 md:w-60'>
        <img src={SearchImg} />
       <textarea className='h-6 w-80 resize-none' placeholder='Search by name or ingredient...'></textarea> 
    </div>
    
}