import Button from './Button';

export default function SideBar( {selectPage, toggleSideBar}) {
    return <nav>
        <div className='w-[95%] mx-auto bg-white border border-[#E0E6E3] rounded-xl pt-4 lg:hidden'>
            <ul className='flex flex-col gap-2.5 px-4'>
                <li 
                    className='hover:cursor-pointer font-semibold text-[#163A34] text-xl'
                    onClick={()=> {selectPage('Home'), toggleSideBar()}}
                    >Home
                </li>
                <li 
                    className='hover:cursor-pointer font-semibold text-[#163A34] text-xl'
                    onClick={()=>{selectPage('About'), toggleSideBar()}}
                    >About
                </li>
                <li 
                    className='hover:cursor-pointer font-semibold text-[#163A34] text-xl'
                    onClick={()=>{selectPage('Recipes'), toggleSideBar()}}
                    >Recipes
                </li>
            </ul>
            <div className='w-full px-2 pt-6 pb-2'>
              <Button onClick={()=>{selectPage('Recipes'), toggleSideBar()}}>Browse recipes</Button>  
            </div>
        </div>
    </nav>
}