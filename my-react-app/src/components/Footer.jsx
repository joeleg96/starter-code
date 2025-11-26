import InstagramIcon from '../../public/images/icon-instagram.svg';
import BlueSkyIcon from '../../public/images/icon-bluesky.svg';
import TikTokIcon from '../../public/images/icon-tiktok.svg';

export default function Footer() {
    return <footer className='my-10 '>
        <hr className='w-full border-[#E0E6E3] mb-6'></hr>
        <div className='w-[95%] mx-auto md:flex md:flex-row-reverse justify-between'>
           <ul className='flex justify-center gap-8'>
                <li className='hover:cursor-pointer'><img src={InstagramIcon} alt="instagram icon"/></li>
                <li className='hover:cursor-pointer'><img src={BlueSkyIcon} alt="BlueSky icon" /></li>
                <li className='hover:cursor-pointer'><img src={TikTokIcon} alt="TikTok icon" /></li>
            </ul>
            <p className='text-lg text-[#163A34] font-bold'>Made with ❤️ and 🥑</p> 
        </div>    
    </footer>
}