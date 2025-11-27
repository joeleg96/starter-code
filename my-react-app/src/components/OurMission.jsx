import H2 from './H2';
import P from './P';
import MissionImg from '/images/image-about-our-mission-large.webp';

export default function OurMission() {
    return <section className='w-[95%] mx-auto'>
        <div className='lg:flex lg:gap-12 lg:items-center'>
            <div>
                <p className='text-xl font-bold bg-[#FE9F6B] rounded-md px-1 w-29 mb-8'>Our Mission</p>
                <h2 className='text-6xl text-[#163A34] font-bold'>Help more people cook nourishing meals, more often.</h2>
                <P>Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</P>
                <P>We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</P>  
            </div>
            <div>
                <img className='mt-8 rounded-xl border-4 border-white' src={MissionImg} />
            </div>
        </div>
    </section>
}