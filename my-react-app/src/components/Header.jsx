import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger-menu.svg';
import Button from './Button';

export default function Header({ toggleSideBar, selectPage }) {

    return <header>
        <div className="flex justify-between p-4">
            <img src={logo} />
            <img className='lg:hidden' onClick={() => toggleSideBar()} src={hamburger} /> 
            <ul className='hidden lg:flex lg:justify-between lg:gap-8 lg:items-center'>
                <li 
                    className='hover:cursor-pointer font-semibold text-[#163A34] text-xl'
                    onClick={()=>selectPage('Home')}
                    >Home
                </li>
                <li 
                    className='hover:cursor-pointer font-semibold text-[#163A34] text-xl'
                    onClick={()=>selectPage('About')}
                    >About
                </li>
                <li 
                    className='hover:cursor-pointer font-semibold text-[#163A34] text-xl'
                    onClick={()=>selectPage('Recipes')}
                    >Recipes
                </li>
            </ul>
            <div className='hidden lg:block'>
               <Button onClick={()=>selectPage('Recipes')}>Browse recipes</Button> 
            </div>
        </div>
        <hr className='w-full border-[#E0E6E3] mb-10'></hr>
    </header>
}